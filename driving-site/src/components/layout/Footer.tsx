import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ display: "grid", gap: "24px" }}>
        <div>
          <strong>[DRIVING SCHOOL NAME]</strong>
          <p>Driving lessons in [CITY] and surrounding areas. Manual/Automatic: [Manual / Automatic / Both].</p>
        </div>
        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
          <div>
            <h3>Quick links</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "8px" }}>
              <li><Link href="/prices">Prices</Link></li>
              <li><Link href="/areas">Areas</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/contact">Book a lesson</Link></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "8px" }}>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/cookies">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Phone: [PHONE]</p>
            <p>Email: [EMAIL]</p>
            <p>WhatsApp: [WHATSAPP LINK or number]</p>
          </div>
        </div>
        <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>
          &copy; {new Date().getFullYear()} [DRIVING SCHOOL NAME]. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
