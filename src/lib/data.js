import { db } from "./db";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 6;

export async function getFilteredUsers(query, currentPage) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
      },
      where: {
        AND: [
          {
            OR: [
              { name: { contains: query, mode: "insensitive" } },
              { email: { contains: query, mode: "insensitive" } },
            ],
          },
        ],
      },
      orderBy: {
        name: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return users;
  } catch (error) {
    return null;
  }
}

export const getAccountByUserId = async (userId) => {
  try {
    const account = await db.account.findFirst({
      where: { userId },
    });

    return account;
  } catch {
    return null;
  }
};

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

export async function getUsersPages(query) {
  try {
    const count = await db.user.count({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: query, mode: "insensitive" } },
              { email: { contains: query, mode: "insensitive" } },
            ],
          },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    return null;
  }
}

export async function getRequestUsersPages(query) {
  try {
    const count = await db.user.count({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: query, mode: "insensitive" } },
              { email: { contains: query, mode: "insensitive" } },
            ],
          },
          { validated: { equals: false } },
        ],
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    return null;
  }
}

export async function getRoleById(id) {
  try {
    const role = await db.user.findUnique({
      where: {
        id: id,
      },
      select: {
        role: true,
      },
    });

    return role;
  } catch (error) {
    return null;
  }
}

export async function getValidatedById(id) {
  try {
    const isValidated = await db.user.findUnique({
      where: {
        id: id,
      },
      select: {
        validated: true,
      },
    });

    return isValidated;
  } catch (error) {
    return null;
  }
}

export async function getLastsFiles() {
  try {
    const lastGuidesFile = await db.file.findFirst({
      where: {
        name: "guias",
      },
      orderBy: { createdAt: "desc" },
    });

    const lastGuidesBikeFile = await db.file.findFirst({
      where: {
        name: "guias-moto",
      },
      orderBy: { createdAt: "desc" },
    });

    const lastValvesFile = await db.file.findFirst({
      where: {
        name: "valvulas",
      },
      orderBy: { createdAt: "desc" },
    });

    const lastValvesBikeFile = await db.file.findFirst({
      where: {
        name: "valvulas-moto",
      },
      orderBy: { createdAt: "desc" },
    });

    const lastValvesRacingFile = await db.file.findFirst({
      where: {
        name: "valvulas-racing",
      },
      orderBy: { createdAt: "desc" },
    });

    const lastSleevesFile = await db.file.findFirst({
      where: {
        name: "camisas",
      },
      orderBy: { createdAt: "desc" },
    });

    const lastExclusiveFile = await db.file.findFirst({
      where: {
        name: "exclusiva",
      },
      orderBy: { createdAt: "desc" },
    });

    return {
      lastGuidesFile,
      lastGuidesBikeFile,
      lastValvesFile,
      lastValvesBikeFile,
      lastValvesRacingFile,
      lastSleevesFile,
      lastExclusiveFile,
    };
  } catch (error) {
    return null;
  }
}

export async function getCardData() {
  try {
    const totalUsers = await db.user.count({
      where: {
        role: "USER",
      },
    });

    const totalAdmins = await db.user.count({
      where: {
        role: "ADMIN",
      },
    });

    const totalAccess = await db.user.count({
      where: {
        validated: true,
      },
    });

    const totalFiles = await db.file.count({});

    return { totalUsers, totalFiles, totalAdmins, totalAccess };
  } catch (error) {
    return null;
  }
}

// export async function getMeliToken() {
//   try {
//     const meliToken = await db.meliToken.findFisrt({
//       orderBy: { expires: "desc" },
//     });
//     console.log(meliToken);
//     return meliToken;
//   } catch (error) {
//     return null;
//   }
// }
