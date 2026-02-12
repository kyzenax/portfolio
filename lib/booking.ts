import { addMinutes, isBefore, parseISO } from "date-fns";
import { appointmentBufferMinutes } from "./constants";
import { prisma } from "./prisma";

export async function hasConflict(serviceId: string, startIso: string) {
  const start = parseISO(startIso);
  if (isBefore(start, new Date())) return true;

  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service) return true;

  const end = addMinutes(start, service.durationMinutes);
  const day = await prisma.blockedDay.findFirst({
    where: {
      date: {
        gte: new Date(start.setHours(0, 0, 0, 0)),
        lt: new Date(start.setHours(23, 59, 59, 999))
      }
    }
  });
  if (day) return true;

  const existing = await prisma.booking.findFirst({
    where: {
      OR: [
        { startTime: { lt: addMinutes(end, appointmentBufferMinutes) }, endTime: { gt: addMinutes(start, -appointmentBufferMinutes) } }
      ]
    }
  });
  return Boolean(existing);
}
