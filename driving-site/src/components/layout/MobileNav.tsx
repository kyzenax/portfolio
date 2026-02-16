"use client";

import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen((value) => !value)}
        className="button secondary"
        style={{ padding: "8px 14px" }}
      >
        Menu
      </button>
      {open && (
        <div
          className="card"
          style={{ position: "absolute", right: "5%", marginTop: "12px", minWidth: "200px" }}
        >
          <ul style={{ listStyle: "none", display: "grid", gap: "10px" }}>
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/prices" onClick={() => setOpen(false)}>Prices</Link></li>
            <li><Link href="/areas" onClick={() => setOpen(false)}>Areas</Link></li>
            <li><Link href="/reviews" onClick={() => setOpen(false)}>Reviews</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Book</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
