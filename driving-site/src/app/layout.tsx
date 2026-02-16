import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { baseStructuredData } from "../lib/seo";

export const metadata: Metadata = {
  title: "[DRIVING SCHOOL NAME]",
  description: "Driving lessons in [CITY] with [Manual / Automatic / Both] options.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <a className="button mobile-call" href="tel:[PHONE]">Call [PHONE]</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseStructuredData) }}
        />
      </body>
    </html>
  );
}
