import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    service: { findUnique: vi.fn(async () => ({ durationMinutes: 30 })) },
    blockedDay: { findFirst: vi.fn(async () => null) },
    booking: { findFirst: vi.fn(async () => ({ id: "1" })) }
  }
}));

import { hasConflict } from "@/lib/booking";

describe("hasConflict", () => {
  it("returns true when overlapping booking exists", async () => {
    await expect(hasConflict("service1", new Date(Date.now() + 3600_000).toISOString())).resolves.toBe(true);
  });
});
