import { clinicDetails } from "@/lib/constants";

export default function ContactPage() {
  return <div className="container-pad py-12"><h1 className="text-3xl font-semibold">Contact</h1><p className="mt-4">Roniya Aesthetic<br/>20 Wolverhampton Road, Oldbury, B68 0LH<br/>07354 949111</p><p className="mt-3 text-sm text-slate-600">Hours: Mon-Fri 09:00-19:00, Sat 09:00-18:00, Sun 10:00-16:00</p><div className="mt-5 flex gap-4"><a className="text-brand-700" href={clinicDetails.phoneHref}>Call now</a><a className="text-brand-700" href={`https://maps.google.com/?q=${encodeURIComponent("20 Wolverhampton Road, Oldbury, B68 0LH")}`} target="_blank">Get Directions</a></div><iframe title="map" className="mt-6 h-80 w-full rounded-2xl border" src="https://www.google.com/maps?q=20+Wolverhampton+Road,+Oldbury,+B68+0LH&output=embed" /></div>;
}
