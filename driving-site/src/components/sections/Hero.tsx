import Link from "next/link";

const Hero = () => {
  return (
    <section className="section" style={{ background: "#f1f5f9" }}>
      <div className="container" style={{ display: "grid", gap: "24px", alignItems: "center" }}>
        <span className="badge">Now taking bookings in [CITY]</span>
        <h1>Driving Lessons in [CITY]</h1>
        <p>
          Learn to drive with a calm, structured approach. Transmission: [Manual / Automatic / Both]. Book lessons that
          fit your schedule and progress with confidence.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/contact" className="button">Book a lesson</Link>
          <Link href="/prices" className="button secondary">View prices</Link>
        </div>
        <p>Instructor: [INSTRUCTOR NAME] • [ADI / PDI trainee status] • Dual controls: [Yes/No]</p>
      </div>
    </section>
  );
};

export default Hero;
