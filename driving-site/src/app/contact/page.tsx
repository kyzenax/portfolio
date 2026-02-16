import { buildMetadata } from "../../lib/seo";
import ContactForm from "../../components/forms/ContactForm";

export const metadata = buildMetadata(
  "Contact & Book Lessons",
  "Book driving lessons in [CITY]. Contact [DRIVING SCHOOL NAME] by phone, WhatsApp, email, or enquiry form.",
  "/contact"
);

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "32px" }}>
        <h1>Contact & book a lesson</h1>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div className="card">
            <h2>Quick contact</h2>
            <p><strong>Phone:</strong> <a href="tel:[PHONE]">[PHONE]</a></p>
            <p><strong>WhatsApp:</strong> <a href="[WHATSAPP LINK or number]">Chat on WhatsApp</a></p>
            <p><strong>Email:</strong> <a href="mailto:[EMAIL]">[EMAIL]</a></p>
            <p>Response time: within one working day.</p>
          </div>
          <div className="card">
            <h2>Book online</h2>
            <ContactForm />
          </div>
        </div>
        <p>By submitting this form you agree to our Terms & Conditions and Privacy Policy.</p>
      </div>
      <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
    </section>
  );
}
