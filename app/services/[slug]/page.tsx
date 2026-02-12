import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = await prisma.service.findUnique({ where: { slug: params.slug } });
  if (!service) return <div className="container-pad py-12">Service not found.</div>;
  return <div className="container-pad py-12"><h1 className="text-3xl font-semibold">{service.name}</h1><p className="mt-4 max-w-2xl text-slate-600">{service.description}</p><p className="mt-3">From £{service.priceFrom} · {service.durationMinutes} mins</p><Link className="mt-5 inline-flex rounded-full bg-brand-500 px-4 py-2 text-white" href={`/booking?service=${service.slug}`}>Book this service</Link></div>;
}
