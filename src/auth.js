import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import { getUserById } from "./lib/data";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.image && session.user) {
        session.user.image = token.image;
      }

      if (token.category && session.user) {
        session.user.category = token.category;
      }

      if (token.description && session.user) {
        session.user.description = token.description;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      if (session.user) {
        session.user.validated = token.validated;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.image = existingUser.image;
      token.category = existingUser.category;
      token.description = existingUser.description;
      token.role = existingUser.role;
      token.validated = existingUser.validated;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});
