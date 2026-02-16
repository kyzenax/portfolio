const TrustBar = () => {
  return (
    <section className="section">
      <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <div className="card">
          <h2>[ADI / PDI trainee status]</h2>
          <p>Accurate status with professional standards and safety-first lessons.</p>
        </div>
        <div className="card">
          <h2>Dual controls</h2>
          <p>Fully insured car with dual controls for added learner confidence.</p>
        </div>
        <div className="card">
          <h2>Experience</h2>
          <p>[YEARS] years of local teaching experience and test route knowledge.</p>
        </div>
        <div className="card">
          <h2>Reviews</h2>
          <p>[NUMBER] verified learner reviews (proof held on file).</p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
