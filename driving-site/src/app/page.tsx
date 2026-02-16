import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import PricingCards from "../components/sections/PricingCards";
import AreasGrid from "../components/sections/AreasGrid";
import Reviews from "../components/sections/Reviews";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata(
  "Driving Lessons in [CITY]",
  "Book professional driving lessons in [CITY] with [DRIVING SCHOOL NAME]. Manual/Automatic options, flexible scheduling, and clear pricing.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PricingCards />
      <AreasGrid />
      <Reviews />
      <section className="section">
        <div className="container">
          <h2>How it works</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: "24px" }}>
            <div className="card">
              <h3>1. Enquire</h3>
              <p>Share your availability, area, and transmission preference.</p>
            </div>
            <div className="card">
              <h3>2. Schedule</h3>
              <p>We confirm lesson times that fit your week and goals.</p>
            </div>
            <div className="card">
              <h3>3. Learn</h3>
              <p>Structured lessons focused on safety, confidence, and progress.</p>
            </div>
            <div className="card">
              <h3>4. Prepare</h3>
              <p>Mock tests and route practice ahead of your practical test.</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}
