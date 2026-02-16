import Link from "next/link";
import areas from "../../content/areas.json";

const AreasGrid = () => {
  return (
    <section className="section" style={{ background: "#f8fafc" }}>
      <div className="container">
        <h2>Areas covered</h2>
        <p>We offer lessons across the following locations with flexible pickup points.</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: "24px" }}>
          {areas.map((area) => (
            <div className="card" key={area.slug}>
              <h3>{area.name}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/areas" className="button secondary">View areas</Link>
        </div>
        <div style={{ marginTop: "32px" }}>
          <div className="card" style={{ minHeight: "220px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p>Map embed placeholder (Google Maps embed or static map).</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasGrid;
