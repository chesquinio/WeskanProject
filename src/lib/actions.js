"use server";

import bcrypt from "bcryptjs";
import {
  registerUserSchema,
  loginUserSchema,
  recoverUserSchema,
  newPasswordUserSchema,
} from "@/src/schemas";
import { getPasswordRecoverTokenByToken, getUserByEmail } from "./data";
import { signIn, signOut } from "@/src/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { db } from "@/src/lib/db";
import { sendPasswordRecoverEmail } from "./email";
import { generatePasswordRecoverToken } from "./tokens";

export async function register(prevState, formdata) {
  const validatedFields = registerUserSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    password: formdata.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error, complete todos los campos.",
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return {
        message: "Este email ya le pertenece a una cuenta.",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: "Solicitud de creación de cuenta exitosa.",
    };
  } catch (error) {
    throw new Error(`Ha ocurrido un error al registrarse: ${error}`);
  }
}

export async function authenticate(prevState, formdata) {
  const validatedFields = loginUserSchema.safeParse({
    email: formdata.get("email"),
    password: formdata.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error, complete todos los campos.",
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { message: "Este email no existe." };
  }

  // if (!existingUser.validated) {
  //   return {
  //     message:
  //       "Tu cuenta no ha sido validada por el momento, esto puede tardar hasta 24 horas hábiles.",
  //   };
  // }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "El email o la contraseña no coinciden.",
          };
        default:
          return { message: "Ha ocurrido un error." };
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut();
}

export async function recover(prevState, formdata) {
  const validatedFields = recoverUserSchema.safeParse({
    email: formdata.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error, complete todos los campos.",
    };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { message: "No se encontró ningún email." };
  }

  try {
    const passwordRecoverToken = await generatePasswordRecoverToken(email);
    await sendPasswordRecoverEmail(
      passwordRecoverToken.email,
      passwordRecoverToken.token
    );

    return { success: "Se ha enviado un email de recuperación!" };
  } catch (error) {
    throw new Error(`Ha ocurrido un error al enviar el email: ${error}`);
  }
}

export async function newPassword(prevState, formdata) {
  const token = formdata.get("token");
  if (!token) {
    return { message: "No se encontro un token valido." };
  }

  const validatedFields = newPasswordUserSchema.safeParse({
    password: formdata.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error, complete todos los campos.",
    };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordRecoverTokenByToken(token);
  if (!existingToken) {
    return { message: "Token invalido!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { message: "El token ha expirado!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { message: "El email no existe." };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    await db.passwordRecoverToken.delete({
      where: {
        id: existingToken.id,
      },
    });

    return { success: "La contraseña se ha modificado" };
  } catch (error) {
    throw new Error(
      `Ha ocurrido un error al modificar la contraseña: ${error}`
    );
  }
}
