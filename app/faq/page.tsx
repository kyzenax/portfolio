import { faqs } from "@/lib/content";

export default function FaqPage() {
  const schema = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
  return <div className="container-pad py-12"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /><h1 className="text-3xl font-semibold">FAQ</h1><div className="mt-6 space-y-4">{faqs.map(([q,a]) => <div key={q} className="rounded-xl border p-4"><h2 className="font-medium">{q}</h2><p className="mt-2 text-sm text-slate-600">{a}</p></div>)}</div></div>;
}
