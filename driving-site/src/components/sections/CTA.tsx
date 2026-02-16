import Link from "next/link";

const CTA = () => {
  return (
    <section className="section">
      <div className="container card" style={{ textAlign: "center" }}>
        <h2>Ready to book your lesson?</h2>
        <p>Get started today and plan your first lesson around your availability.</p>
        <div style={{ marginTop: "18px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/contact" className="button">Book now</Link>
          <a href="tel:[PHONE]" className="button secondary">Call [PHONE]</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
