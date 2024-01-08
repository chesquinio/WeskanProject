import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { loginUserSchema } from "./schemas";
import { getUserByEmail } from "./lib/data";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginUserSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
};
