import { getServices } from "@/lib/services";

export default async function PricesPage() {
  const services = await getServices();
  return <div className="container-pad py-12"><h1 className="text-3xl font-semibold">Prices</h1><ul className="mt-6 space-y-3">{services.map((s) => <li key={s.id} className="flex justify-between border-b pb-2"><span>{s.name}</span><span>From £{s.priceFrom}</span></li>)}</ul></div>;
}
