import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { clinicDetails } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://roniyaaesthetic.co.uk"),
  title: { default: "Roniya Aesthetic | Medical Aesthetic Clinic in Oldbury", template: "%s | Roniya Aesthetic" },
  description: "Premium medical aesthetics in Oldbury near Birmingham. Injectable and skin rejuvenation treatments with safe, consultation-led care.",
  openGraph: {
    title: "Roniya Aesthetic",
    description: "Medical-led aesthetics in Oldbury & Birmingham.",
    url: "https://roniyaaesthetic.co.uk",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: import("react").ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Roniya Aesthetic",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20 Wolverhampton Road",
      addressLocality: "Oldbury",
      postalCode: "B68 0LH",
      addressCountry: "GB"
    },
    telephone: "07354 949111",
    geo: { "@type": "GeoCoordinates", latitude: clinicDetails.coordinates.lat, longitude: clinicDetails.coordinates.lng },
    sameAs: [clinicDetails.instagram],
    openingHours: clinicDetails.openingHours
  };

  return (
    <html lang="en-GB">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
