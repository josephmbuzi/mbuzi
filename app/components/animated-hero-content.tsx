"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-[#e4db55]">{children}</span>;
}

export function AnimatedHeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-280"
    >
      <motion.p
        variants={itemVariants}
        className="mt-24 text-sm font-semibold uppercase tracking-[0.18em] text-[#e4db55] sm:mt-26 md:mt-28"
      >
        Software engineer, DevOps, and consultant
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="mt-5 max-w-250 text-5xl font-medium leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        I turn messy workflows into reliable digital systems.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-7 max-w-210 text-lg leading-8 text-zinc-300 sm:text-xl"
      >
        Joseph Mbuzi helps founders, institutions, and lean teams design,
        automate, deploy, and ship the platforms their operations depend on.
        The work blends <Highlight>technical strategy</Highlight>, DevOps,
        product engineering, and clear implementation.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 grid max-w-230 gap-3 border-y border-white/10 py-5 sm:grid-cols-3"
      >
        {[
          ["Strategy", "Architecture, scope, and delivery decisions."],
          ["Build", "Web platforms, automations, and integrations."],
          ["Handoff", "Documentation, review, and maintainable systems."],
        ].map(([title, description]) => (
          <div key={title}>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {description}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-8 mb-3 flex flex-wrap gap-3"
      >
        <Link
          href="/services#contact"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#e4db55]/60 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#e4db55] focus:ring-offset-2 focus:ring-offset-black"
        >
          Start a consulting inquiry
        </Link>
        <Link
          href="/services"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
        >
          Explore services
        </Link>
      </motion.div>
    </motion.div>
  );
}
