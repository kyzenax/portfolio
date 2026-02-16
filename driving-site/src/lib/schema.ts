import faqData from "../content/faq.json";

const businessName = "[DRIVING SCHOOL NAME]";
const city = "[CITY]";

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "DrivingSchool",
    name: businessName,
    areaServed: [city],
  },
  serviceType: "Driving Lessons",
  areaServed: [city],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
