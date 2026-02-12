import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { prisma } from "./prisma";

const COOKIE_NAME = "ra_admin";

export async function loginAdmin(username: string, password: string) {
  const admin = await prisma.adminUser.findUnique({ where: { username } });
  if (!admin) return false;
  const valid = await bcrypt.compare(password, admin.passwordHash);
  if (!valid) return false;
  cookies().set(COOKIE_NAME, admin.id, { httpOnly: true, sameSite: "strict", secure: true, path: "/" });
  return true;
}

export function isAdmin() {
  return Boolean(cookies().get(COOKIE_NAME)?.value);
}
