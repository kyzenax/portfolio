import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const businessName = "[DRIVING SCHOOL NAME]";
const city = "[CITY]";

export const buildMetadata = (title: string, description: string, path = "/"): Metadata => {
  const canonicalUrl = new URL(path, siteUrl).toString();

  return {
    title: `${title} | ${businessName}`,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${businessName}`,
      description,
      url: canonicalUrl,
      siteName: businessName,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${businessName}`,
      description,
    },
    keywords: [
      "driving lessons",
      `driving instructor ${city}`,
      "manual driving lessons",
      "automatic driving lessons",
    ],
  };
};

export const baseStructuredData = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: businessName,
  areaServed: [city],
  url: siteUrl,
  telephone: "[PHONE]",
  email: "[EMAIL]",
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: "GB",
  },
  priceRange: "££",
  sameAs: ["[WHATSAPP LINK or number]"],
};
