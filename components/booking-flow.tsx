"use client";

import { useEffect, useMemo, useState } from "react";

type Service = { id: string; slug: string; name: string; description: string; priceFrom: number; durationMinutes: number };

export function BookingFlow({ services, initialSlug }: { services: Service[]; initialSlug?: string }) {
  const [serviceId, setServiceId] = useState(services.find((s) => s.slug === initialSlug)?.id ?? services[0]?.id);
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [selected, setSelected] = useState("");
  const [form, setForm] = useState({ clientName: "", clientPhone: "", clientEmail: "" });
  const service = useMemo(() => services.find((s) => s.id === serviceId), [serviceId, services]);

  useEffect(() => {
    if (!date || !serviceId) return;
    fetch(`/api/availability?date=${date}&serviceId=${serviceId}`).then((r) => r.json()).then((d) => setSlots(d.slots ?? []));
  }, [date, serviceId]);

  async function submit() {
    const res = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, serviceId, startTime: selected }) });
    if (res.ok) alert("Booking confirmed. A confirmation email has been sent.");
    else alert("Unable to book selected slot.");
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-3">
        {services.map((s) => (
          <button key={s.id} onClick={() => setServiceId(s.id)} className={`w-full rounded-xl border p-4 text-left ${serviceId === s.id ? "border-brand-500 bg-brand-50" : ""}`}>
            <p className="font-medium">{s.name}</p><p className="text-sm text-slate-600">{s.durationMinutes} mins · from £{s.priceFrom}</p>
          </button>
        ))}
      </div>
      <div className="space-y-4 rounded-2xl border p-5">
        <p className="font-semibold">{service?.name}</p>
        <label className="text-sm">Practitioner</label><select className="w-full rounded-lg border p-2"><option>Roniya Aesthetic Team</option></select>
        <label className="text-sm">Choose date</label><input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg border p-2" />
        <div className="grid grid-cols-3 gap-2">{slots.map((slot) => <button key={slot} onClick={() => setSelected(slot)} className={`rounded border p-2 text-sm ${selected === slot ? "border-brand-600 bg-brand-50" : ""}`}>{new Date(slot).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</button>)}</div>
        <input className="w-full rounded-lg border p-2" placeholder="Full name" value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} />
        <input className="w-full rounded-lg border p-2" placeholder="Phone" value={form.clientPhone} onChange={(e) => setForm({ ...form, clientPhone: e.target.value })} />
        <input className="w-full rounded-lg border p-2" placeholder="Email" value={form.clientEmail} onChange={(e) => setForm({ ...form, clientEmail: e.target.value })} />
        <button onClick={submit} className="w-full rounded-full bg-brand-500 px-4 py-3 text-white">Confirm Booking</button>
        <p className="text-xs text-slate-500">SMS reminders can be connected later via Twilio placeholder integration.</p>
      </div>
    </div>
  );
}
