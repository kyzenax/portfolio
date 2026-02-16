import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Manual Driving Lessons",
  "Manual driving lessons in [CITY] with structured coaching and flexible scheduling.",
  "/manual"
);

export default function ManualPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Manual driving lessons</h1>
        <p>Learn manual driving skills with step-by-step guidance and confidence-building practice.</p>
        <div className="card" style={{ marginTop: "24px" }}>
          <h2>What you will learn</h2>
          <ul style={{ paddingLeft: "18px" }}>
            <li>Clutch control, gears, and hill starts.</li>
            <li>Safe junctions, roundabouts, and manoeuvres.</li>
            <li>Test-focused practice tailored to your progress.</li>
          </ul>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/contact" className="button">Book manual lessons</Link>
        </div>
      </div>
    </section>
  );
}
