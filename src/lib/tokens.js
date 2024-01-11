import { v4 as uuidv4 } from "uuid";

import { db } from "./db";
import { getVerificationEmail } from "./data";
import {
  getPasswordRecoverTokenByEmail,
  getPasswordRecoverTokenByToken,
} from "./data";

export async function generatePasswordRecoverToken(email) {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordRecoverTokenByEmail(email);

  if (existingToken) {
    await db.passwordRecoverToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const passwordRecoverToken = await db.passwordRecoverToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordRecoverToken;
}

export async function generateVerificationToken(email) {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
}
