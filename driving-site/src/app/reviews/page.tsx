import Link from "next/link";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Reviews",
  "Read verified learner feedback for [DRIVING SCHOOL NAME] driving lessons in [CITY].",
  "/reviews"
);

export default function ReviewsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Reviews</h1>
        <p>Testimonials below are from real learners. Evidence is retained for compliance.</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: "24px" }}>
          <div className="card">
            <p>“[Review 1 text]”</p>
            <strong>— [Reviewer name]</strong>
          </div>
          <div className="card">
            <p>“[Review 2 text]”</p>
            <strong>— [Reviewer name]</strong>
          </div>
          <div className="card">
            <p>“[Review 3 text]”</p>
            <strong>— [Reviewer name]</strong>
          </div>
          <div className="card">
            <p>“[Review 4 text]”</p>
            <strong>— [Reviewer name]</strong>
          </div>
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/contact" className="button">Book a lesson</Link>
        </div>
      </div>
    </section>
  );
}
