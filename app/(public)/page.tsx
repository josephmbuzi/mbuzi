import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Experience } from "../components/experience";
import { Projects } from "../components/projects";
import { Skills } from "../components/skills";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Software Engineer & Systems Engineer",
  description:
    "Joseph Mbuzi is a software engineer at Yamfumu Technologies, building healthcare, education, and legal-tech platforms with React, Node.js, and Microsoft Azure.",
  keywords: [
    "Joseph Mbuzi",
    "software engineer",
    "systems engineer",
    "Microsoft Azure",
    "CI/CD",
    "full stack developer",
    "Zambia software engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joseph Mbuzi | Software Engineer & Systems Engineer",
    description:
      "Software engineering across healthcare, education, and legal-tech platforms, with Microsoft Azure, Docker, and CI/CD underneath.",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-350 border-t border-white/10 pt-12">
          <About />
          <Experience />
          <Projects />
          <Skills />

          <section className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10">
            <p className="max-w-160 text-2xl leading-snug text-zinc-200 sm:text-3xl">
              Have a project in mind, or want to talk shop?
            </p>
            <Link
              href="/services#contact"
              className="inline-flex min-h-11 items-center justify-center border border-[#e4db55]/70 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white"
            >
              Get in touch
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
