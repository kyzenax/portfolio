import { ReactNode } from "react";

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="container-pad py-12">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
