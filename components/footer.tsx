import Link from "next/link";
import { clinicDetails } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-slate-50 py-10">
      <div className="container-pad grid gap-6 text-sm md:grid-cols-3">
        <div>
          <p className="font-semibold">Roniya Aesthetic</p>
          <p>20 Wolverhampton Road, Oldbury, B68 0LH</p>
          <p>07354 949111</p>
        </div>
        <div className="space-y-2">
          <Link href="/privacy">Privacy Policy</Link><br />
          <Link href="/cookies">Cookie Policy</Link><br />
          <Link href="/terms">Terms & Conditions</Link><br />
          <Link href="/accessibility">Accessibility</Link>
        </div>
        <div>
          <a href={clinicDetails.instagram} target="_blank" rel="noreferrer" className="text-brand-700">Instagram @roniya.aesthetic</a>
        </div>
      </div>
    </footer>
  );
}
