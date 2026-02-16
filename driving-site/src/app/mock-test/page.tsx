import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Mock Tests",
  "Mock driving tests in [CITY] to help you prepare for the practical test.",
  "/mock-test"
);

export default function MockTestPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Mock tests</h1>
        <p>Practice under realistic test conditions with detailed feedback.</p>
        <div className="card" style={{ marginTop: "24px" }}>
          <h2>Mock test benefits</h2>
          <ul style={{ paddingLeft: "18px" }}>
            <li>Simulates real DVSA test conditions.</li>
            <li>Highlights strengths and focus areas.</li>
            <li>Includes debrief with clear next steps.</li>
          </ul>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/contact" className="button">Book a mock test</Link>
        </div>
      </div>
    </section>
  );
}
