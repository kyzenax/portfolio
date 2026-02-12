import { ServiceCard } from "@/components/service-card";
import { getServices } from "@/lib/services";

export default async function ServicesPage() {
  const services = await getServices();
  return <div className="container-pad py-12"><h1 className="text-3xl font-semibold">Treatments & Services</h1><div className="mt-6 grid gap-4 md:grid-cols-3">{services.map((s) => <ServiceCard key={s.id} service={s} />)}</div></div>;
}
