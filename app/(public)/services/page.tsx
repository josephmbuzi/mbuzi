import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software engineering services from Joseph Mbuzi for digital platforms, business automation, and developer experience.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Joseph Mbuzi",
    description:
      "Software engineering services from Joseph Mbuzi for digital platforms, business automation, and developer experience.",
    url: "/services",
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

const services = [
  {
    eyebrow: "01",
    title: "Digital platform engineering",
    description:
      "Designing and building web platforms with reliable architecture, clean product flows, and maintainable delivery foundations.",
  },
  {
    eyebrow: "02",
    title: "Business automation",
    description:
      "Turning repeated operational work into structured systems that reduce manual handoffs, improve visibility, and keep teams moving.",
  },
  {
    eyebrow: "03",
    title: "Developer experience",
    description:
      "Improving internal tools, documentation, integrations, and workflows so engineering teams can ship with less friction.",
  },
];

const process = [
  "Map the workflow, constraints, and outcome the system needs to support.",
  "Shape the technical plan around the highest-risk decisions first.",
  "Build in focused iterations with clear handoff, documentation, and review.",
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${siteConfig.name} Services`,
  url: `${siteConfig.url}/services`,
  image: `${siteConfig.url}${siteConfig.image}`,
  description: metadata.description,
  founder: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: "Worldwide",
  serviceType: services.map((service) => service.title),
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      <section className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/60 to-transparent" />
        <div className="absolute right-0 top-20 h-px w-2/3 bg-gradient-to-l from-[#e4db55]/50 to-transparent" />
        <div className="absolute right-0 top-24 z-0 h-72 w-full opacity-25 sm:h-96 lg:h-[34rem] lg:w-1/2 lg:opacity-40">
          <Image
            src="/joseph.png"
            alt="Joseph Mbuzi"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-350">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-zinc-500 transition-colors hover:text-white"
          >
            Joseph Mbuzi
          </Link>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-white/10 bg-zinc-950/70 p-5"
              >
                <p className="text-xs font-semibold uppercase text-[#e4db55]">
                  {service.eyebrow}
                </p>
                <h2 className="mt-8 text-2xl font-medium leading-tight text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#e4db55]">
                Approach
              </p>
              <h2 className="mt-5 max-w-160 text-3xl font-medium leading-tight text-white sm:text-4xl">
                Strategy first, then focused implementation.
              </h2>
            </div>

            <div className="space-y-4">
              {process.map((item, index) => (
                <div
                  key={item}
                  className="grid gap-4 border-b border-white/10 pb-4 sm:grid-cols-[3rem_1fr]"
                >
                  <span className="text-sm font-semibold text-zinc-500">
                    0{index + 1}
                  </span>
                  <p className="text-lg leading-7 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="mt-20 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase text-[#e4db55]">
                Start a project
              </p>
              <h2 className="mt-5 max-w-190 text-3xl font-medium leading-tight text-white sm:text-4xl">
                Bring a workflow, platform, or product problem that needs
                structure.
              </h2>
              <p className="mt-5 max-w-150 text-base leading-7 text-zinc-400">
                Share the context, timeline, and what needs to change. I will
                reply with the next practical step.
              </p>
            </div>

            <ContactForm email={siteConfig.email} />
          </section>
        </div>
      </section>
    </main>
  );
}
