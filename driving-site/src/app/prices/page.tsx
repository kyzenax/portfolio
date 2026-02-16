import Link from "next/link";
import prices from "../../content/prices.json";
import { buildMetadata } from "../../lib/seo";
import { serviceSchema } from "../../lib/schema";

export const metadata = buildMetadata(
  "Lessons & Prices",
  "View pay-as-you-go and block booking driving lesson prices in [CITY]. Transparent pricing with clear conditions.",
  "/prices"
);

export default function PricesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Lessons & prices</h1>
        <p>Clear pricing and inclusions with no hidden fees.</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: "24px" }}>
          {prices.map((price) => (
            <div className="card" key={price.name}>
              <h2>{price.name}</h2>
              <p style={{ fontSize: "1.6rem", fontWeight: 700 }}>{price.price}</p>
              <ul style={{ marginTop: "12px", paddingLeft: "18px" }}>
                {price.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card" style={{ marginTop: "32px" }}>
          <h2>Conditions & booking rules</h2>
          <ul style={{ paddingLeft: "18px" }}>
            <li>Lesson length: [LESSON LENGTH] minutes.</li>
            <li>Block booking terms: [BLOCK BOOKING RULES].</li>
            <li>Payment methods: [PAYMENT METHODS].</li>
            <li>Cancellation policy: [CANCELLATION POLICY].</li>
          </ul>
          <p style={{ marginTop: "12px" }}>
            Please read our <Link href="/terms">Terms & Conditions</Link> before booking.
          </p>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/contact" className="button">Book now</Link>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </section>
  );
}
