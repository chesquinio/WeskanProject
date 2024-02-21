import NextAuth from "next-auth";
import authConfig from "@/auth.config";

import { getAccountByUserId, getUserById } from "./lib/data";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  pages: {
    signIn: "/iniciar-sesion",
    error: "/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      // if (existingUser.isTwoFactorEnabled) {
      //   const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

      //   if (!twoFactorConfirmation) return false;

      //   // Delete two factor confirmation for next sign in
      //   await db.twoFactorConfirmation.delete({
      //     where: { id: twoFactorConfirmation.id }
      //   });
      // }

      return true;
    },
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

      if (token.activeRequest && session.user) {
        session.user.activeRequest = token.activeRequest;
      }

      if (token.typeRequest && session.user) {
        session.user.typeRequest = token.typeRequest;
      }

      if (token.special && session.user) {
        session.user.special = token.special;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.validated = token.validated;
        session.user.isOAuth = token.isOAuth;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.image = existingUser.image;
      token.category = existingUser.category;
      token.description = existingUser.description;
      token.role = existingUser.role;
      token.validated = existingUser.validated;
      token.activeRequest = existingUser.activeRequest;
      token.typeRequest = existingUser.typeRequest;
      token.special = existingUser.special;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});
