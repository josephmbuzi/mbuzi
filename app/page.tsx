import { Hero } from "./components/hero";
import { siteConfig } from "./lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.image}`,
  jobTitle: "Software Engineer",
  description: siteConfig.description,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.medium,
    siteConfig.links.quora,
  ],
  knowsAbout: [
    "Software engineering",
    "Business automation",
    "Developer experience",
    "Digital platforms",
    "Software engineering",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
    </main>
  );
}
