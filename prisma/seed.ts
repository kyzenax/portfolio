import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const services = [
    ["botox-1-area", "Botox 1 Area", 140, 30, "Injectables", "Soften dynamic lines in one target area.", true],
    ["lip-filler-0-5ml", "Lip Filler 0.5ml", 170, 45, "Dermal Fillers", "Natural volume and shape enhancement for lips.", true],
    ["lip-filler-1ml", "Lip Filler 1ml", 220, 50, "Dermal Fillers", "Defined lip contour and fuller projection."],
    ["cheek-filler", "Cheek Filler", 260, 60, "Dermal Fillers", "Restore mid-face volume for lifted appearance."],
    ["microneedling", "Microneedling", 120, 50, "Skin Rejuvenation", "Stimulates collagen and refines skin texture.", true],
    ["prp-facial", "PRP Facial", 220, 60, "Advanced Treatments", "Platelet rich plasma for glow and recovery."],
    ["profhilo", "Profhilo", 280, 45, "Skin Boosters", "Intensive hydration and skin firmness support.", true],
    ["polynucleotides-under-eye", "Polynucleotides Under Eye", 190, 45, "Under Eye", "Improves crepey texture and under-eye quality."],
    ["vitamin-b12-shot", "Vitamin B12 Injection", 35, 15, "Wellness", "Fast energy-supporting intramuscular injection."],
    ["consultation", "Aesthetic Consultation", 30, 30, "Consultation", "Tailored treatment planning and suitability checks.", true]
  ] as const;

  for (const [slug, name, priceFrom, durationMinutes, category, description, featured = false] of services) {
    await prisma.service.upsert({
      where: { slug },
      update: { name, priceFrom, durationMinutes, category, description, featured },
      create: { slug, name, priceFrom, durationMinutes, category, description, featured }
    });
  }

  const opening = [
    [0, "10:00", "16:00", true],
    [1, "09:00", "19:00", false],
    [2, "09:00", "19:00", false],
    [3, "09:00", "19:00", false],
    [4, "09:00", "19:00", false],
    [5, "09:00", "18:00", false],
    [6, "10:00", "16:00", false]
  ];

  for (const [dayOfWeek, startHour, endHour, isClosed] of opening) {
    await prisma.openingHour.upsert({
      where: { dayOfWeek },
      update: { startHour, endHour, isClosed },
      create: { dayOfWeek, startHour, endHour, isClosed }
    });
  }

  await prisma.adminUser.upsert({
    where: { username: "admin" },
    update: {},
    create: { username: "admin", passwordHash: await bcrypt.hash("change-me", 10) }
  });
}

main().finally(async () => prisma.$disconnect());
