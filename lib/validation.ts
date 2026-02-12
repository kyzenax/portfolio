import { z } from "zod";

export const bookingSchema = z.object({
  serviceId: z.string().min(1),
  startTime: z.string().datetime(),
  clientName: z.string().min(2).max(80),
  clientPhone: z.string().min(10).max(20),
  clientEmail: z.string().email().max(120)
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(1000),
  honey: z.string().max(0)
});
