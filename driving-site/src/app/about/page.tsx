import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "About",
  "Meet [INSTRUCTOR NAME], your [ADI / PDI trainee status] driving instructor in [CITY].",
  "/about"
);

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>About [INSTRUCTOR NAME]</h1>
        <p>
          [INSTRUCTOR NAME] is a [ADI / PDI trainee status] providing structured, patient lessons in [CITY] and nearby
          areas. Lessons are tailored to your learning style, with a calm approach that builds safe driving habits.
        </p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: "24px" }}>
          <div className="card">
            <h2>Teaching style</h2>
            <p>Friendly, clear instruction with regular feedback and progress tracking.</p>
          </div>
          <div className="card">
            <h2>Car details</h2>
            <p>Car: [Make/Model] • Dual controls: [Yes/No].</p>
          </div>
          <div className="card">
            <h2>Who we help</h2>
            <p>Beginners, refresher learners, nervous drivers, and mock test preparation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
