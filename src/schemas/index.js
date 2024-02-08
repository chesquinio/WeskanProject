import { z } from "zod";

const UserSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Ingresa un nombre.",
    })
    .min(2, { message: "Ingrese un nombre mas completo." }),
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
  category: z.string({
    invalid_type_error: "Ingrese una categoría.",
  }),
  description: z.string({
    invalid_type_error: "Ingrese una descripción.",
  }),
  validated: z.boolean(),
  isAdmin: z.boolean(),
});

export const registerUserSchema = UserSchema.omit({
  category: true,
  description: true,
  validated: true,
  isAdmin: true,
});

export const loginUserSchema = UserSchema.omit({
  name: true,
  category: true,
  description: true,
  validated: true,
  isAdmin: true,
});

export const recoverUserSchema = UserSchema.omit({
  name: true,
  password: true,
  category: true,
  description: true,
  validated: true,
  isAdmin: true,
});

export const newPasswordUserSchema = UserSchema.omit({
  name: true,
  email: true,
  category: true,
  description: true,
  validated: true,
  isAdmin: true,
});

export const editUserSchema = UserSchema.omit({
  password: true,
  category: true,
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

export const userOptionsSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Es necesario un email.",
    })
    .email({ message: "Es necesario un email valido." }),
  access: z.string({
    invalid_type_error: "Ingrese un tipo de acceso.",
  }),
  role: z.string({
    invalid_type_error: "Ingrese un rol.",
  }),
  special: z.string({
    invalid_type_error: "Ingrese un dato.",
  }),
});
