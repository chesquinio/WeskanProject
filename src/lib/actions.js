"use server";

import bcrypt from "bcryptjs";
import { mongooseConnect } from "./mongoose";
import { redirect } from "next/navigation";
import { User } from "@/src/models/User";
import { registerUserSchema, loginUserSchema } from "@/src/schemas";
import { getUserByEmail } from "./data";
import { signIn } from "@/src/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export async function register(prevState, formdata) {
  const validatedFields = registerUserSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    password: formdata.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error, completa todos los campos.",
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    await mongooseConnect();

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return {
        message: "Este email ya le pertenece a una cuenta.",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      validated: false,
      isAdmin: false,
    });
    await user.save();
  } catch (error) {
    throw new Error(`Ha ocurrido un error al registrarse: ${error}`);
  }

  redirect("/iniciar-sesion");
}

export async function authenticate(prevState, formdata) {
  const validatedFields = loginUserSchema.safeParse({
    email: formdata.get("email"),
    password: formdata.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error, completa todos los campos.",
    };
  }

  const { email, password } = validatedFields.data;

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
