import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Refresher Driving Lessons",
  "Refresher driving lessons in [CITY] to rebuild confidence and update your skills.",
  "/refresher"
);

export default function RefresherPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Refresher driving lessons</h1>
        <p>Ideal for drivers returning to the road after a break or needing extra confidence.</p>
        <div className="card" style={{ marginTop: "24px" }}>
          <h2>Who it is for</h2>
          <ul style={{ paddingLeft: "18px" }}>
            <li>Drivers who have not driven recently.</li>
            <li>Motorway or town centre practice.</li>
            <li>Nervous drivers wanting supportive coaching.</li>
          </ul>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/contact" className="button">Book refresher lessons</Link>
        </div>
      </div>
    </section>
  );
}
