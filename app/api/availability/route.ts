import { addMinutes, formatISO, set } from "date-fns";
import { NextRequest, NextResponse } from "next/server";
import { appointmentBufferMinutes } from "@/lib/constants";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  const serviceId = req.nextUrl.searchParams.get("serviceId");
  if (!date || !serviceId) return NextResponse.json({ slots: [] });

  const selected = new Date(`${date}T12:00:00`);
  const dow = selected.getDay();
  const opening = await prisma.openingHour.findUnique({ where: { dayOfWeek: dow } });
  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  const blocked = await prisma.blockedDay.findFirst({ where: { date: { gte: new Date(`${date}T00:00:00`), lte: new Date(`${date}T23:59:59`) } } });
  if (!opening || opening.isClosed || !service || blocked) return NextResponse.json({ slots: [] });

  const [sh, sm] = opening.startHour.split(":").map(Number);
  const [eh, em] = opening.endHour.split(":").map(Number);
  let cursor = set(selected, { hours: sh, minutes: sm, seconds: 0, milliseconds: 0 });
  const endDay = set(selected, { hours: eh, minutes: em, seconds: 0, milliseconds: 0 });

  const allBookings = await prisma.booking.findMany({ where: { startTime: { gte: set(selected, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) , lte: set(selected, { hours: 23, minutes: 59, seconds: 59, milliseconds: 999 }) } } });
  const slots: string[] = [];
  while (cursor < endDay) {
    const end = addMinutes(cursor, service.durationMinutes);
    if (end > endDay || cursor < new Date()) { cursor = addMinutes(cursor, 15); continue; }
    const conflict = allBookings.some((b) => cursor < addMinutes(new Date(b.endTime), appointmentBufferMinutes) && end > addMinutes(new Date(b.startTime), -appointmentBufferMinutes));
    if (!conflict) slots.push(formatISO(cursor));
    cursor = addMinutes(cursor, 15);
  }

  return NextResponse.json({ slots });
}
