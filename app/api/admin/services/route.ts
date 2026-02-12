import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const id = String(form.get("id"));
  await prisma.service.update({ where: { id }, data: { name: String(form.get("name")), priceFrom: Number(form.get("priceFrom")), durationMinutes: Number(form.get("durationMinutes")), category: String(form.get("category")) } });
  return NextResponse.redirect(new URL("/admin/dashboard", req.url));
}
