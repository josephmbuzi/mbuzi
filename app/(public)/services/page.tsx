import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software consulting services from Joseph Mbuzi for platform builds, workflow automation, technical strategy, and developer experience.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Joseph Mbuzi",
    description:
      "Understand Joseph Mbuzi's software consulting services for platform builds, workflow automation, technical strategy, and developer experience.",
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
    title: "Build a web platform",
    bestFor: "You need a customer portal, internal dashboard, booking flow, marketplace, or data-backed web product.",
    description:
      "I help turn the idea into a working product: user flows, interface structure, backend logic, integrations, and deployment-ready implementation.",
    outcomes: [
      "Clear product scope and technical plan",
      "Responsive web application or product feature",
      "Maintainable codebase with handoff notes",
    ],
  },
  {
    eyebrow: "02",
    title: "Automate a business workflow",
    bestFor: "Your team is losing time to spreadsheets, manual follow-ups, repeated approvals, or disconnected tools.",
    description:
      "I map the workflow, remove unnecessary steps, and build the system or integration that makes the process easier to run and track.",
    outcomes: [
      "Workflow map and automation plan",
      "Internal tool, integration, or data flow",
      "Cleaner visibility for the team using it",
    ],
  },
  {
    eyebrow: "03",
    title: "Improve an existing system",
    bestFor: "You already have software, but it is hard to change, poorly documented, slow to ship, or unclear for new contributors.",
    description:
      "I review the product and codebase, identify what is slowing delivery down, and make targeted improvements that reduce friction.",
    outcomes: [
      "Codebase and workflow review",
      "Refactor or implementation plan",
      "Documentation and cleaner delivery process",
    ],
  },
  {
    eyebrow: "04",
    title: "Plan a technical direction",
    bestFor: "You need technical judgment before hiring, rebuilding, choosing tools, or committing budget to a product idea.",
    description:
      "I help you understand the tradeoffs, risks, architecture options, and practical next steps before the expensive work begins.",
    outcomes: [
      "Technical discovery and recommendations",
      "Build-vs-buy and tooling guidance",
      "Prioritized roadmap for execution",
    ],
  },
];

const process = [
  "We clarify the business problem, users, current workflow, and what success should look like.",
  "I translate that into a practical technical plan with scope, risks, and the first useful version.",
  "I build or improve the system in focused iterations, with regular review and visible progress.",
  "You receive documentation, handoff notes, and next-step recommendations so the work can continue cleanly.",
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

          <section className="mt-20 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#e4db55]">
                Services
              </p>
              <h1 className="mt-5 max-w-190 text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
                Software consulting for teams that need clearer systems.
              </h1>
            </div>

            <div className="max-w-190 lg:pt-12">
              <p className="text-lg leading-8 text-zinc-300">
                I help you move from an unclear operational or product problem
                to a working technical solution. That can mean building a new
                platform, automating a manual process, improving an existing
                codebase, or helping you choose the right technical direction.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "For founders",
                  "For institutions",
                  "For lean teams",
                  "Remote friendly",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold uppercase text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-white/10 bg-zinc-950/70 p-5 md:p-7"
              >
                <p className="text-xs font-semibold uppercase text-[#e4db55]">
                  {service.eyebrow}
                </p>
                <h2 className="mt-8 text-2xl font-medium leading-tight text-white sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm font-semibold uppercase leading-6 text-zinc-500">
                  Best for
                </p>
                <p className="mt-2 text-base leading-7 text-zinc-300">
                  {service.bestFor}
                </p>
                <p className="mt-5 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold uppercase text-zinc-500">
                    What you get
                  </p>
                  <ul className="mt-4 space-y-3">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex gap-3 text-sm leading-6 text-zinc-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#e4db55]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
