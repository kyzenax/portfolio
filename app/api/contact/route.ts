import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "local";
  if (!checkRateLimit(`contact:${ip}`, 5, 60_000).ok) return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  const parsed = contactSchema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid form" }, { status: 400 });
  return NextResponse.json({ ok: true });
}
