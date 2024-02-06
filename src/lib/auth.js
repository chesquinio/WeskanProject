import { auth } from "@/auth";

export async function currentUser() {
  const session = await auth();

  return session?.user;
}

export async function currentRole() {
  const session = await auth();

  return session?.user.role;
}

export async function currentValidated() {
  const session = await auth();

  return session?.user.validated;
}

export async function currentSpecial() {
  const session = await auth();

  return session?.user.special;
}
