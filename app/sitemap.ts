import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://roniyaaesthetic.co.uk";
  const paths = ["", "/about", "/services", "/booking", "/prices", "/before-after", "/reviews", "/contact", "/faq", "/policies", "/aftercare", "/privacy", "/cookies", "/terms", "/accessibility", "/consultation"];
  return paths.map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }));
}
