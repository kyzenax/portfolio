import { addMinutes, parseISO } from "date-fns";
import { NextRequest, NextResponse } from "next/server";
import { hasConflict } from "@/lib/booking";
import { sendBookingConfirmation } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";
import { bookingSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "local";
  if (!checkRateLimit(`book:${ip}`, 6, 60_000).ok) return NextResponse.json({ error: "Too many attempts" }, { status: 429 });
  const parsed = bookingSchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { serviceId, startTime, clientEmail, clientName, clientPhone } = parsed.data;
  const conflict = await hasConflict(serviceId, startTime);
  if (conflict) return NextResponse.json({ error: "Slot unavailable" }, { status: 409 });

  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service) return NextResponse.json({ error: "Service not found" }, { status: 404 });

  const booking = await prisma.booking.create({
    data: { serviceId, clientEmail, clientName, clientPhone, startTime: parseISO(startTime), endTime: addMinutes(parseISO(startTime), service.durationMinutes) }
  });

  await sendBookingConfirmation(clientEmail, `${service.name} on ${new Date(startTime).toLocaleString("en-GB", { timeZone: "Europe/London" })}.`);

  return NextResponse.json({ booking });
}
