import Link from "next/link";
import { Section } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { ReviewCard } from "@/components/review-card";
import { clinicDetails } from "@/lib/constants";
import { reviews } from "@/lib/content";
import { getServices } from "@/lib/services";

export default async function HomePage() {
  const services = (await getServices()).slice(0, 6);
  return (
    <>
      <section className="container-pad py-16 md:py-24">
        <p className="text-sm uppercase tracking-wider text-brand-700">Medical Aesthetics · Oldbury & Birmingham</p>
        <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Premium, clinical aesthetics with a warm personal approach.</h1>
        <p className="mt-4 max-w-2xl text-slate-600">Trusted injectable and skin rejuvenation treatments tailored to your goals and safety.</p>
        <div className="mt-6 flex gap-3"><Link href="/booking" className="rounded-full bg-brand-500 px-5 py-3 text-white">Book Appointment</Link><a href={clinicDetails.phoneHref} className="rounded-full border px-5 py-3">Call 07354 949111</a></div>
        <div className="mt-8 grid gap-3 rounded-2xl border bg-slate-50 p-4 text-sm md:grid-cols-4"><p>Medical-led</p><p>Qualified practitioner</p><p>Hygiene-first</p><p>Consultation available</p></div>
      </section>
      <Section title="Popular Treatments"><div className="grid gap-4 md:grid-cols-3">{services.map((s) => <ServiceCard key={s.id} service={s} />)}</div></Section>
      <Section title="About Roniya Aesthetic" subtitle="Appointments-only clinic focused on natural outcomes, compliance, and patient care."><Link href="/about" className="text-brand-700">Read more about the clinic →</Link></Section>
      <Section title="Find us in Oldbury"><iframe title="map" className="h-72 w-full rounded-2xl border" src="https://www.google.com/maps?q=20+Wolverhampton+Road,+Oldbury,+B68+0LH&output=embed" /></Section>
      <Section title="Client Reviews" subtitle="Rated 5.0 from verified clients"><div className="grid gap-4 md:grid-cols-3">{reviews.map((r) => <ReviewCard key={r.name} review={r} />)}</div></Section>
      <Section title="Safety & Hygiene"><ul className="list-disc space-y-2 pl-5 text-sm"><li>Appointments only with controlled clinical environment.</li><li>Disinfected treatment surfaces between each client.</li><li>PPE and ventilation protocol maintained.</li></ul></Section>
    </>
  );
}
