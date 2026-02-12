# Roniya Aesthetic Website

Next.js App Router + TypeScript + Tailwind + Prisma booking system for a UK medical aesthetics clinic.

## Setup

1. `cp .env.example .env`
2. `npm install`
3. `npx prisma generate`
4. `npx prisma migrate dev --name init`
5. `npm run prisma:seed`
6. `npm run dev`

Admin default: `admin` / `change-me`.

## Features

- Booksy-like booking flow with service, calendar slots, and client details.
- Server-side double-booking protection and simple in-memory rate limiting.
- Admin dashboard for editing services, blocking days, viewing bookings, and CSV export.
- SEO-ready metadata, sitemap, robots, MedicalBusiness schema and FAQ schema.
- Full clinic pages: Home, About, Services, Booking, Prices, Before & After, Reviews, Contact, FAQ, Policies, Aftercare, Privacy, Cookies, Terms, Accessibility, Consultation.

## Stack

- Next.js 14 App Router
- Tailwind CSS
- Prisma + SQLite
- Zod validation
- Vitest basic conflict test
