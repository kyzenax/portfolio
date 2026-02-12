import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const bookings = await prisma.booking.findMany({ include: { service: true }, orderBy: { startTime: "desc" } });
  const csv = ["Name,Phone,Email,Service,Start,End", ...bookings.map((b) => [b.clientName, b.clientPhone, b.clientEmail, b.service.name, b.startTime.toISOString(), b.endTime.toISOString()].join(","))].join("\n");
  return new NextResponse(csv, { headers: { "Content-Type": "text/csv", "Content-Disposition": "attachment; filename=bookings.csv" } });
}
