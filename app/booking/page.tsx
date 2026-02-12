import { BookingFlow } from "@/components/booking-flow";
import { getServices } from "@/lib/services";

export default async function BookingPage({ searchParams }: { searchParams: { service?: string } }) {
  const services = await getServices();
  return <div className="container-pad py-12"><h1 className="text-3xl font-semibold">Book an Appointment</h1><p className="mt-2 text-slate-600">Booksy-style booking: select service, date/time, and your details.</p><div className="mt-6"><BookingFlow services={services} initialSlug={searchParams.service} /></div></div>;
}
