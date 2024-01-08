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
