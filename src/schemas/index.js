import { z } from "zod";

const UserSchema = z.object({
  name: z.string({
    invalid_type_error: "Ingresa un nombre.",
  }),
  email: z
    .string({
      invalid_type_error: "Ingrese un email.",
    })
    .email({ message: "Ingrese un email valido." }),
  password: z
    .string({
      invalid_type_error: "Ingrese una contraseña.",
    })
    .min(6, { message: "Ingrese una contraseña com 6 o más caracteres." }),
  validated: z.boolean(),
  isAdmin: z.boolean(),
});

export const registerUserSchema = UserSchema.omit({
  validated: true,
  isAdmin: true,
});

export const loginUserSchema = UserSchema.omit({
  name: true,
  validated: true,
  isAdmin: true,
});

export const recoverUserSchema = UserSchema.omit({
  name: true,
  password: true,
  validated: true,
  isAdmin: true,
});

export const newPasswordUserSchema = UserSchema.omit({
  name: true,
  email: true,
  validated: true,
  isAdmin: true,
});

export const emailSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Es necesario un email.",
    })
    .email({ message: "Es necesario un email valido" }),
  subject: z.string({
    invalid_type_error: "Ingrese un asunto.",
  }),
  message: z.string({
    invalid_type_error: "Ingrese un mensaje",
  }),
});
