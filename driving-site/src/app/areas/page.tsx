import Link from "next/link";
import areas from "../../content/areas.json";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Areas Covered",
  "Driving lesson coverage across [CITY] and surrounding towns. Local pickup points and flexible scheduling.",
  "/areas"
);

export default function AreasPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Areas covered</h1>
        <p>We offer lessons across [CITY] and nearby towns/postcodes with flexible pickup points.</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: "24px" }}>
          {areas.map((area) => (
            <div className="card" key={area.slug}>
              <h2>{area.name}</h2>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
        <div className="card" style={{ marginTop: "32px" }}>
          <h2>Local knowledge that supports faster progress</h2>
          <p>
            Lessons focus on real-world driving situations, with tailored routes to match your experience and typical test
            areas. We adjust pacing based on confidence, while keeping safety and progression at the core.
          </p>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/contact" className="button">Check availability</Link>
        </div>
      </div>
    </section>
  );
}
