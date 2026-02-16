import Link from "next/link";

const Reviews = () => {
  return (
    <section className="section">
      <div className="container">
        <h2>Learner reviews</h2>
        <p>Real feedback from learners (proof of reviews kept on file).</p>
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
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link href="/reviews" className="button secondary">See all reviews</Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
