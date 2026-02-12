import Link from "next/link";

export function ServiceCard({ service }: { service: { slug: string; name: string; description: string; priceFrom: number; durationMinutes: number } }) {
  return (
    <article className="rounded-2xl border p-5 shadow-sm transition hover:shadow-soft">
      <h3 className="font-semibold">{service.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.description}</p>
      <p className="mt-3 text-sm">From <span className="font-semibold">£{service.priceFrom}</span> · {service.durationMinutes} mins</p>
      <Link href={`/booking?service=${service.slug}`} className="mt-4 inline-flex rounded-full bg-brand-500 px-4 py-2 text-sm text-white">Book</Link>
    </article>
  );
}
