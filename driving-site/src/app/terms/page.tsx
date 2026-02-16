import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Terms & Conditions",
  "Lesson terms, cancellations, payment methods, and booking policies for [DRIVING SCHOOL NAME].",
  "/terms"
);

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Terms & conditions</h1>
        <p>These terms apply to all driving lessons booked with [DRIVING SCHOOL NAME].</p>
        <h2>Bookings & payments</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li>Lesson length: [LESSON LENGTH] minutes unless otherwise agreed.</li>
          <li>Payments accepted: [PAYMENT METHODS]. Payment is required in advance.</li>
          <li>Block bookings: [BLOCK BOOKING RULES]. Any unused lessons expire after [EXPIRY PERIOD].</li>
        </ul>
        <h2>Cancellations & rescheduling</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li>We require [CANCELLATION POLICY] notice for cancellations or changes.</li>
          <li>Late cancellations or no-shows may be charged in full.</li>
        </ul>
        <h2>Late arrivals & lesson time</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li>If you are late, the lesson may be shortened to protect the next booking.</li>
          <li>If we are late, your lesson time will be made up where possible.</li>
        </ul>
        <h2>Pickup & drop-off</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li>Pickup locations must be safe and legal. Please confirm your address in advance.</li>
          <li>We reserve the right to refuse unsafe locations.</li>
        </ul>
        <h2>Test day policy</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li>Test day lessons are subject to availability and require advance booking.</li>
          <li>Use of the instructor car for the test is at the instructor’s discretion.</li>
        </ul>
        <h2>Refunds</h2>
        <p>Refunds are considered on a case-by-case basis for unused, eligible lessons.</p>
      </div>
    </section>
  );
}
