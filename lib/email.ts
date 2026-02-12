import nodemailer from "nodemailer";

export async function sendBookingConfirmation(to: string, summary: string) {
  if (!process.env.SMTP_HOST) return;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "bookings@roniyaaesthetic.co.uk",
    to,
    subject: "Booking confirmed | Roniya Aesthetic",
    text: `Thank you for booking with Roniya Aesthetic. ${summary}`
  });
}
