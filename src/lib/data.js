import { db } from "./db";

export async function getAllUsers() {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    return null;
  }
}

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

export async function getVerificationToken(token) {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
}

export async function getVerificationEmail(email) {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
}

export async function getPasswordRecoverTokenByToken(token) {
  try {
    const passwordRecoverToken = await db.passwordRecoverToken.findUnique({
      where: {
        token,
      },
    });

    return passwordRecoverToken;
  } catch (error) {
    return null;
  }
}

export async function getPasswordRecoverTokenByEmail(email) {
  try {
    const passwordRecoverToken = await db.passwordRecoverToken.findFirst({
      where: {
        email,
      },
    });

    return passwordRecoverToken;
  } catch (error) {
    return null;
  }
}
