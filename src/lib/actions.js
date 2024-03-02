"use server";

import bcrypt from "bcryptjs";
import {
  registerUserSchema,
  loginUserSchema,
  recoverUserSchema,
  newPasswordUserSchema,
  emailSchema,
  editUserSchema,
  userOptionsSchema,
} from "@/schemas";
import {
  getFileByName,
  getPasswordRecoverTokenByToken,
  getUserByEmail,
  getUserById,
  getVerificationToken,
} from "./data";
import { signIn, signOut } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "../../routes";
import { AuthError } from "next-auth";
import { db } from "@/lib/db";
import {
  sendAllowedAdminEmail,
  sendAllowedRequestEmail,
  sendAllowedSpecialListEmail,
  sendChangeRequestEmail,
  sendDeniedRequestEmail,
  sendEmail,
  sendPasswordRecoverEmail,
  sendRequestNoticeEmail,
  sendVerificationEmail,
} from "./emails";
import {
  generatePasswordRecoverToken,
  generateVerificationToken,
} from "./tokens";
import { revalidatePath } from "next/cache";
import { upload, uploadImage, uploadCurriculumFile } from "./files";
import { redirect } from "next/navigation";

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

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Se ha enviado un correo de verificación" };
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

export async function newVerification(token) {
  const existingToken = await getVerificationToken(token);

  if (!existingToken) {
    return { error: "El token no existe!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "El token ha expirado!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "El email no existe!" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verificado!" };
}

export async function allowedRequest(id, email) {
  try {
    await sendAllowedRequestEmail(email);
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        activeRequest: false,
        validated: true,
      },
    });
  } catch (error) {
    throw new Error(`Ha ocurrido un error al permitir el usuario: ${error}`);
  }

  revalidatePath("/administrador/solicitudes");
}

export async function deniedRequest(id, email) {
  try {
    await sendDeniedRequestEmail(email);
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        activeRequest: false,
      },
    });
  } catch (error) {
    throw new Error(`Ha ocurrido un error al denegar el usuario: ${error}`);
  }

  revalidatePath("/administrador/solicitudes");
}

export async function changeToAdmin(id) {
  try {
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        role: "ADMIN",
        validated: true,
      },
    });
  } catch (error) {
    throw new Error(`Ha ocurrido un error al cambiar el rol: ${error}`);
  }
  revalidatePath("/administrador/usuarios");
}

export async function changeToUser(id) {
  try {
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        role: "USER",
        validated: false,
      },
    });
  } catch (error) {
    throw new Error(`Ha ocurrido un error al cambiar el rol: ${error}`);
  }
  revalidatePath("/administrador/usuarios");
}

export async function uploadFile(prevState, formdata) {
  try {
    const list_type = formdata.get("list_type");
    const category = formdata.get("category");
    const file = formdata.get("file");

    if (!file.size > 0) {
      return { message: "No se ha encontrado ningun archivo." };
    }

    const existingListType = await getFileByName(list_type);
    if (existingListType) {
      await db.file.delete({
        where: {
          id: existingListType.id,
        },
      });
    }

    const { link } = await upload(file);
    if (!link) {
      return { message: "Ha ocurrido un error al guardar el archivo." };
    }

    await db.file.create({
      data: {
        name: list_type,
        link: link,
        category: category,
      },
    });

    revalidatePath("/administrador/catalogos");
    return { success: "Se ha guardado el archivo." };
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  }
}

export async function sendEmailToUser(prevState, formdata) {
  const validatedFields = emailSchema.safeParse({
    email: formdata.get("email"),
    subject: formdata.get("subject"),
    message: formdata.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error.",
    };
  }

  const { email, subject, message } = validatedFields.data;

  try {
    await sendEmail(email, subject, message);

    return { success: "Se ha enviado el email correctamente." };
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  }
}

export async function editUser(prevState, formdata) {
  const validatedFields = editUserSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    description: formdata.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error.",
    };
  }

  const { name, email, description } = validatedFields.data;
  const image = formdata.get("image");

  try {
    const link = await uploadImage(image);
    await db.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
        description: description,
        image: link,
      },
    });
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  }

  revalidatePath("/");
  redirect("/");
}

export async function updateCategory(prevState, formdata) {
  const email = formdata.get("email");
  const category = formdata.get("category");

  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) {
    return { message: "No se ha encontrado el usuario" };
  }

  if (!category) {
    return { message: "No se ha podido actualizar la categoria." };
  }

  try {
    await db.user.update({
      where: {
        email: email,
      },
      data: {
        category: category,
      },
    });

    return { success: "Se ha actualizado el usuario" };
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  }
}

export async function listRequest(prevState, formdata) {
  const id = formdata.get("id");
  const requestType = formdata.get("request_type");

  if (!requestType) {
    return { message: "Debes seleccionar una lista a solicitar!" };
  }

  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    return { message: "No se ha encontrado el usuario!" };
  }
  if (user.activeRequest) {
    return { message: "Ya tienes una solicitud activa!" };
  }

  try {
    await sendRequestNoticeEmail(user.name);

    await db.user.update({
      where: {
        id: id,
      },
      data: {
        activeRequest: true,
        typeRequest: requestType,
      },
    });

    return { success: "Se ha enviado la solicitud correctamente" };
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  }
}

export async function updateUserOptions(prevState, formdata) {
  const validatedFields = userOptionsSchema.safeParse({
    email: formdata.get("email"),
    access: formdata.get("access"),
    role: formdata.get("role"),
    special: formdata.get("special"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Ha ocurrido un error.",
    };
  }

  const { email, access, role, special } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { message: "No se encontró ningún usuario." };
  }

  try {
    if (existingUser.typeRequest !== access) {
      await sendChangeRequestEmail(email);
    }
    if (existingUser.special !== special) {
      await sendAllowedSpecialListEmail(email);
    }

    if (role === "admin") {
      await sendAllowedAdminEmail(email);
      await db.user.update({
        where: {
          email: email,
        },
        data: {
          activeRequest: false,
          typeRequest: "todas",
          role: "ADMIN",
          validated: true,
          special: true,
          category: "Administrador",
        },
      });

      revalidatePath("/administrador/usuarios");
      return { success: "Se ha asignado a un nuevo administrador." };
    } else {
      await db.user.update({
        where: {
          email: email,
        },
        data: {
          activeRequest: false,
          typeRequest: access === "remove" ? null : access,
          role: "USER",
          validated: access === "remove" ? false : true,
          category: null,
          special:
            access === "remove" ? false : special === "allowed" ? true : false,
        },
      });

      revalidatePath("/administrador/usuarios");
      return { success: "Se ha modificado el usuario correctamente." };
    }
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  }
}

export async function uploadCurriculum(prevState, formdata) {
  const name = formdata.get("name");
  const file = formdata.get("file");

  if (!name) {
    return { message: "Es necesario ingresar un nombre." };
  }

  if (!file.size > 0) {
    return { message: "No se ha encontrado ningun archivo." };
  }

  try {
    const link = await uploadCurriculumFile(file);

    await db.curriculum.create({
      data: {
        name: name,
        link: link,
      },
    });

    return { success: "Se ha subido el curriculum correctamente." };
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  }
}

export async function deleteCurriculum(prevState, formdata) {
  const id = formdata.get("id");

  const cv = await db.curriculum.findUnique({
    where: {
      id: id,
    },
  });
  if (!cv) {
    return { message: "No se ha encontrado el curriculum." };
  }

  try {
    await db.curriculum.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/administrador/curriculums");
    return { success: "Se ha eliminado el curriculum." };
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error}`);
  }
}
