import faqData from "../../content/faq.json";

const FAQ = () => {
  return (
    <section className="section" style={{ background: "#f8fafc" }}>
      <div className="container">
        <h2>FAQs</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: "24px" }}>
          {faqData.slice(0, 6).map((item) => (
            <div className="card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
