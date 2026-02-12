import Link from "next/link";
import { clinicDetails } from "@/lib/constants";

const links = [
  ["About", "/about"],
  ["Treatments", "/services"],
  ["Booking", "/booking"],
  ["Prices", "/prices"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-brand-700">{clinicDetails.name}</Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {links.map(([label, href]) => (<Link key={href} href={href} className="hover:text-brand-600">{label}</Link>))}
        </nav>
        <Link href="/booking" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-soft">Book Now</Link>
      </div>
    </header>
  );
}
