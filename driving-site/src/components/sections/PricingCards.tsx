import Link from "next/link";
import prices from "../../content/prices.json";

const PricingCards = () => {
  return (
    <section className="section">
      <div className="container">
        <h2>Lesson pricing</h2>
        <p>Transparent packages with clear inclusions and booking rules.</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", marginTop: "24px" }}>
          {prices.slice(0, 3).map((price) => (
            <div className="card" key={price.name}>
              <h3>{price.name}</h3>
              <p style={{ fontSize: "1.4rem", fontWeight: 700 }}>{price.price}</p>
              <ul style={{ marginTop: "12px", paddingLeft: "18px" }}>
                {price.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/prices" className="button secondary">See full prices</Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
