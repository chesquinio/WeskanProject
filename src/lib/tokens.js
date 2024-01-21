import { v4 as uuidv4 } from "uuid";

import { db } from "./db";
import { getVerificationEmail } from "./data";
import {
  getPasswordRecoverTokenByEmail,
  getPasswordRecoverTokenByToken,
} from "./data";

const redirectUrl = process.env.REDIRECT_URI;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const code = process.env.CODE;

var urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "authorization_code");
urlencoded.append("client_id", clientId);
urlencoded.append("client_secret", clientSecret);
urlencoded.append("code", code);
urlencoded.append("redirect_uri", redirectUrl);

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

// export async function generateMeliToken() {
//   const existingToken = await getMeliToken();
//   const expires = existingToken.expires < new Date();
//   console.log(expires);

//   if (expires) {
//     await db.meliToken.delete({
//       where: {
//         id: existingToken.id,
//       },
//     });

//     const res = await fetch("https://api.mercadolibre.com/oauth/token", {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/x-www-form-urlencoded",
//       },
//       body: urlencoded,
//     });
//     const newToken = JSON.parse(await res.text());
//     console.log(newToken);

//     await db.meliToken.create({
//       data: {
//         accessToken: newToken.access_token,
//         userId: newToken.user_id,
//         expires: new Date(new Date.now() + new Token.expires_in()),
//       },
//     });

//     return newToken;
//   }

//   return existingToken;
// }
