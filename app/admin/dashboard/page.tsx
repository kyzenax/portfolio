import { isAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  if (!isAdmin()) return <div className="container-pad py-12">Unauthorized.</div>;
  const [services, bookings, blockedDays] = await Promise.all([prisma.service.findMany(), prisma.booking.findMany({ include: { service: true }, orderBy: { startTime: "desc" } }), prisma.blockedDay.findMany()]);

  return (
    <div className="container-pad py-12 space-y-8">
      <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
      <section><h2 className="text-xl font-medium">Services</h2><div className="mt-3 space-y-2">{services.map((s) => <form key={s.id} action="/api/admin/services" method="post" className="grid gap-2 rounded border p-3 md:grid-cols-6"><input type="hidden" name="id" value={s.id}/><input name="name" defaultValue={s.name} className="rounded border p-2"/><input name="priceFrom" defaultValue={s.priceFrom} className="rounded border p-2"/><input name="durationMinutes" defaultValue={s.durationMinutes} className="rounded border p-2"/><input name="category" defaultValue={s.category} className="rounded border p-2"/><button className="rounded bg-brand-500 px-3 text-white">Save</button></form>)}</div></section>
      <section><h2 className="text-xl font-medium">Bookings</h2><a href="/api/admin/export" className="text-sm text-brand-700">Export CSV</a><div className="mt-3 overflow-auto"><table className="w-full text-sm"><thead><tr><th>Name</th><th>Service</th><th>Time</th></tr></thead><tbody>{bookings.map((b)=><tr key={b.id}><td>{b.clientName}</td><td>{b.service.name}</td><td>{new Date(b.startTime).toLocaleString("en-GB")}</td></tr>)}</tbody></table></div></section>
      <section><h2 className="text-xl font-medium">Blocked Days</h2><form action="/api/admin/block-days" method="post" className="mt-2 flex gap-2"><input type="date" name="date" className="rounded border p-2"/><input name="reason" className="rounded border p-2" placeholder="Reason"/><button className="rounded bg-brand-500 px-4 text-white">Add</button></form><ul className="mt-3 text-sm">{blockedDays.map((d)=><li key={d.id}>{new Date(d.date).toLocaleDateString("en-GB")} - {d.reason || "Closed"}</li>)}</ul></section>
    </div>
  );
}
