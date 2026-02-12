import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const date = String(form.get("date"));
  await prisma.blockedDay.create({ data: { date: new Date(`${date}T00:00:00`), reason: String(form.get("reason") || "") } });
  return NextResponse.redirect(new URL("/admin/dashboard", req.url));
}
