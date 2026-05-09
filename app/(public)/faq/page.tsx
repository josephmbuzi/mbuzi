import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "../../lib/faqs";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Joseph Mbuzi's software engineering, DevOps, automation, and consulting services.",
  keywords: [
    "software engineering FAQ",
    "DevOps consulting FAQ",
    "software consultant questions",
    "business automation consultant",
    "Joseph Mbuzi FAQ",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Joseph Mbuzi",
    description:
      "Answers about software engineering, DevOps, workflow automation, technical strategy, and consulting engagements.",
    url: "/faq",
    images: [
      {
        url: siteConfig.image,
        width: 1672,
        height: 941,
        alt: siteConfig.name,
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/60 to-transparent" />
        <div className="absolute right-0 top-20 h-px w-2/3 bg-gradient-to-l from-[#e4db55]/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-350">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-zinc-500 transition-colors hover:text-white"
          >
            Joseph Mbuzi
          </Link>

          <section className="mt-20 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#e4db55]">
                FAQ
              </p>
              <h1 className="mt-5 max-w-180 text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
                Common questions about software engineering and consulting.
              </h1>
            </div>

            <div className="max-w-190 lg:pt-12">
              <p className="text-lg leading-8 text-zinc-300">
                Answers for founders, institutions, and teams considering
                software engineering, DevOps, workflow automation, or technical
                strategy support.
              </p>
              <Link
                href="/services#contact"
                className="mt-8 inline-flex min-h-11 items-center justify-center border border-[#e4db55]/70 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white"
              >
                Send inquiry
              </Link>
            </div>
          </section>

          <section className="mt-16 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="grid gap-6 border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[0.9fr_1.1fr] md:p-7"
              >
                <h2 className="text-xl font-medium leading-7 text-white sm:text-2xl">
                  {faq.question}
                </h2>
                <p className="text-base leading-7 text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
