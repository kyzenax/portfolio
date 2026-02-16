import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header>
      <div className="container" style={{ padding: "16px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
          [DRIVING SCHOOL NAME]
        </Link>
        <nav aria-label="Main navigation">
          <ul>
            <li><Link href="/prices">Prices</Link></li>
            <li><Link href="/areas">Areas</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Book</Link></li>
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
