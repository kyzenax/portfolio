import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Intensive Driving Lessons",
  "Intensive driving lesson packages in [CITY] tailored to your schedule.",
  "/intensive"
);

export default function IntensivePage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Intensive driving lessons</h1>
        <p>Intensive lesson plans are available for learners who want focused practice over a short period.</p>
        <div className="card" style={{ marginTop: "24px" }}>
          <h2>What is included</h2>
          <ul style={{ paddingLeft: "18px" }}>
            <li>Structured lesson plan with clear milestones.</li>
            <li>Mock test preparation and feedback.</li>
            <li>Flexible scheduling around availability.</li>
          </ul>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/contact" className="button">Ask about intensive lessons</Link>
        </div>
      </div>
    </section>
  );
}
