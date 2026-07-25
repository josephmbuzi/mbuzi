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
        Software engineer · Systems engineer
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="mt-5 max-w-250 text-5xl font-medium leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        I build the platforms behind healthcare, legal, and education products.
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-7 max-w-210 text-lg leading-8 text-zinc-300 sm:text-xl"
      >
        Joseph Mbuzi is a software engineer at Yamfumu Technologies, working
        across frontend, backend, and cloud infrastructure on{" "}
        <Highlight>Spattro</Highlight>, <Highlight>LawCentr</Highlight>, and{" "}
        <Highlight>Koloso</Highlight> — with Microsoft Azure, Docker, and
        CI/CD underneath. Currently learning payment infrastructure.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 mb-3 flex flex-wrap gap-3"
      >
        <Link
          href="#projects"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#e4db55]/60 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#e4db55] focus:ring-offset-2 focus:ring-offset-black"
        >
          View projects
        </Link>
        <Link
          href="/services#contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
        >
          Contact
        </Link>
      </motion.div>
    </motion.div>
  );
}
