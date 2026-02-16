import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Privacy Policy",
  "Privacy and data protection information for [DRIVING SCHOOL NAME].",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Privacy policy</h1>
        <p>
          This policy explains how [DRIVING SCHOOL NAME] collects, uses, and protects your personal data in accordance
          with UK GDPR.
        </p>
        <h2>Data we collect</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li>Contact details (name, phone, email).</li>
          <li>Lesson preferences (area, transmission type, availability).</li>
          <li>Booking communications.</li>
        </ul>
        <h2>How we use your data</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li>To respond to enquiries and arrange lessons.</li>
          <li>To manage lesson bookings, payments, and cancellations.</li>
          <li>To meet legal or insurance obligations.</li>
        </ul>
        <h2>Lawful basis</h2>
        <p>We process data under legitimate interests and contract necessity.</p>
        <h2>Retention</h2>
        <p>We keep data only as long as needed for bookings, legal, or insurance purposes.</p>
        <h2>Sharing data</h2>
        <p>We do not sell data. We may share data with service providers (e.g., email) under contract.</p>
        <h2>Your rights</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li>Access, correction, or deletion of your data.</li>
          <li>Restriction or objection to processing.</li>
          <li>Data portability where applicable.</li>
        </ul>
        <h2>Contact & complaints</h2>
        <p>
          Contact us at [EMAIL] to exercise your rights. You may also complain to the UK ICO if needed.
        </p>
      </div>
    </section>
  );
}
