import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/hero";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Software Engineer & Consultant",
  description:
    "Joseph Mbuzi is a software engineer and consultant helping teams build web platforms, automate workflows, improve DevOps, and ship maintainable product systems.",
  keywords: [
    "Joseph Mbuzi",
    "software engineer",
    "software consultant",
    "DevOps consultant",
    "full stack developer",
    "business automation consultant",
    "Zambia software engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joseph Mbuzi | Software Engineer & Consultant",
    description:
      "Independent software engineering consulting for web platforms, business automation, DevOps, technical strategy, and maintainable delivery.",
    url: "/",
    images: [
      {
        url: siteConfig.image,
        width: 1672,
        height: 941,
        alt: "Joseph Mbuzi",
      },
    ],
  },
};

const consultingOffers = [
  {
    title: "Web platform engineering",
    description:
      "Plan and build web applications, portals, dashboards, and product features with maintainable architecture.",
  },
  {
    title: "Workflow automation",
    description:
      "Replace repeated manual work with structured tools, integrations, and internal systems that teams can actually operate.",
  },
  {
    title: "DevOps and delivery support",
    description:
      "Improve deployment flow, environment setup, reliability, and the path from code to production.",
  },
];

const proofPoints = [
  "Software engineering",
  "Product-minded engineering",
  "DevOps support",
  "Business automation",
  "Developer experience",
  "Technical communication",
  "Maintainable handoffs",
  "Founder-friendly execution",
];

const engagementSteps = [
  "Diagnose the workflow, constraints, and decision points.",
  "Define the smallest useful technical plan with clear tradeoffs.",
  "Build, document, and hand over a system your team can improve.",
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.image}`,
  jobTitle: "Software Engineer and Consultant",
  description: siteConfig.description,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.medium,
    siteConfig.links.quora,
  ],
  knowsAbout: [
    "Software engineering",
    "Software consulting",
    "DevOps",
    "Full-stack development",
    "Business automation",
    "Developer experience",
    "Digital platforms",
    "Technical strategy",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.country,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-350 border-t border-white/10 pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#e4db55]">
                Consulting focus
              </p>
              <h2 className="mt-5 max-w-170 text-3xl font-medium leading-tight text-white sm:text-4xl">
                For teams that need judgment, implementation, and a clean
                handoff.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {consultingOffers.map((offer) => (
                <article
                  key={offer.title}
                  className="border border-white/10 bg-zinc-950/70 p-5"
                >
                  <h3 className="text-xl font-medium leading-tight text-white">
                    {offer.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {offer.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <section className="mt-20 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#e4db55]">
                Why this stands out
              </p>
              <p className="mt-5 max-w-190 text-2xl leading-snug text-zinc-200 sm:text-3xl">
                I work where product context and engineering detail need to be
                held together. That makes the advice practical and the build
                grounded in the way the business actually runs.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-300"
                >
                  {point}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#e4db55]">
                Engagement model
              </p>
              <h2 className="mt-5 max-w-160 text-3xl font-medium leading-tight text-white sm:text-4xl">
                Advisory that does not stop at advice.
              </h2>
            </div>

            <div className="space-y-4">
              {engagementSteps.map((step, index) => (
                <div
                  key={step}
                  className="grid gap-4 border-b border-white/10 pb-4 sm:grid-cols-[3rem_1fr]"
                >
                  <span className="text-sm font-semibold text-zinc-500">
                    0{index + 1}
                  </span>
                  <p className="text-lg leading-7 text-zinc-300">{step}</p>
                </div>
              ))}

              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="/services"
                  className="inline-flex min-h-11 items-center justify-center border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  Explore services
                </Link>
                <Link
                  href="/services#contact"
                  className="inline-flex min-h-11 items-center justify-center border border-[#e4db55]/70 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white"
                >
                  Send inquiry
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
