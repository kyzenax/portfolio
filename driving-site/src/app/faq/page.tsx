import faqData from "../../content/faq.json";
import { buildMetadata } from "../../lib/seo";
import { faqSchema } from "../../lib/schema";

export const metadata = buildMetadata(
  "FAQs",
  "Common questions about driving lessons, booking, and policies for [DRIVING SCHOOL NAME].",
  "/faq"
);

export default function FAQPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Frequently asked questions</h1>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: "24px" }}>
          {faqData.map((item) => (
            <div className="card" key={item.question}>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
