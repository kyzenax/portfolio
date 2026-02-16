import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata(
  "Cookies Policy",
  "Cookie usage and consent information for [DRIVING SCHOOL NAME].",
  "/cookies"
);

export default function CookiesPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Cookies policy</h1>
        <p>This site uses cookies to provide core functionality and, if enabled, analytics.</p>
        <h2>Cookie categories</h2>
        <ul style={{ paddingLeft: "18px" }}>
          <li><strong>Essential:</strong> Required for site security and form protection.</li>
          <li><strong>Analytics (optional):</strong> Helps us improve the website (only with consent).</li>
          <li><strong>Marketing:</strong> Not used unless explicitly enabled in the future.</li>
        </ul>
        <h2>Managing consent</h2>
        <p>
          If analytics cookies are added, we will request consent via a cookie banner. You can change preferences at any
          time.
        </p>
      </div>
    </section>
  );
}
