import type { ContactPayload } from "./validators";

const RESEND_API_URL = "https://api.resend.com/emails";

export const sendContactEmail = async (payload: ContactPayload) => {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    throw new Error("Missing email configuration.");
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New lesson enquiry from ${payload.name}`,
      text: `Name: ${payload.name}\nPhone: ${payload.phone}\nArea: ${payload.area}\nTransmission: ${payload.transmission}\nMessage: ${payload.message}`,
    }),
  });

  if (!response.ok) {
    throw new Error("Email send failed.");
  }

  return response.json();
};
