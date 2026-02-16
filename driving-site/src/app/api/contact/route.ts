import { NextResponse } from "next/server";
import { checkRateLimit } from "../../../lib/rateLimit";
import { sanitizeContactPayload, validateContactPayload, type ContactPayload } from "../../../lib/validators";
import { sendContactEmail } from "../../../lib/mail";

const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return NextResponse.json({ message: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const sanitized = sanitizeContactPayload(payload);
  const validationError = validateContactPayload(sanitized);

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  if (!turnstileSecret) {
    return NextResponse.json({ message: "Server configuration error." }, { status: 500 });
  }

  const verifyResponse = await fetch(TURNSTILE_VERIFY, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: turnstileSecret,
      response: sanitized.token,
      remoteip: ip,
    }),
  });

  const verifyData = await verifyResponse.json();

  if (!verifyData.success) {
    return NextResponse.json({ message: "Security check failed." }, { status: 400 });
  }

  try {
    await sendContactEmail(sanitized);
  } catch {
    return NextResponse.json({ message: "We could not send your message." }, { status: 500 });
  }

  return NextResponse.json({ message: "Enquiry received." }, { status: 200 });
}
