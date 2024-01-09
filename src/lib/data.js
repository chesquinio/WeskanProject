import { db } from "./db";

export async function getUserByEmail(email) {
  try {
    const user = db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
}

export async function getUserById(id) {
  try {
    const user = db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
}
