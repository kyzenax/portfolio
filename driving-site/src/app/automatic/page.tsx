import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Automatic Driving Lessons",
  "Automatic driving lessons in [CITY] with calm coaching and flexible availability.",
  "/automatic"
);

export default function AutomaticPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Automatic driving lessons</h1>
        <p>Automatic lessons designed for confidence, safety, and steady progress.</p>
        <div className="card" style={{ marginTop: "24px" }}>
          <h2>Why choose automatic?</h2>
          <ul style={{ paddingLeft: "18px" }}>
            <li>Focus more on road awareness without gear changes.</li>
            <li>Ideal for nervous drivers or busy city routes.</li>
            <li>Structured plans tailored to your goals.</li>
          </ul>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/contact" className="button">Book automatic lessons</Link>
        </div>
      </div>
    </section>
  );
}
