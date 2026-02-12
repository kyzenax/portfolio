import { prisma } from "./prisma";

export async function getServices() {
  return prisma.service.findMany({ orderBy: [{ featured: "desc" }, { name: "asc" }] });
}
