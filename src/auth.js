import NextAuth from "next-auth";
import authConfig from "@/src/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/src/lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  callbacks: {
    async session({ token, session }) {
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});
