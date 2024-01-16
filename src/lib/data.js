import { db } from "./db";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { read } from "./files";
import { redirect } from "next/navigation";

const ITEMS_PER_PAGE = 6;

export async function getFilteredValidatedUsers(query, currentPage) {
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
          { validated: { equals: true } },
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

export async function getFilteredRequestUsers(query, currentPage) {
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
          { validated: { equals: false } },
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

export async function getValidatedUsersPages(query) {
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
          { validated: { equals: true } },
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

export async function getLastFile() {
  try {
    const lastFile = await db.file.findFirst({
      orderBy: { createdAt: "desc" },
    });
    const filename = lastFile.filename;
    const path = await read(filename);

    return path;
  } catch (error) {
    return null;
  }
}
