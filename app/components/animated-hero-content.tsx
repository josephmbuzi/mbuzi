"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

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
      className="max-w-250"
    >
      <motion.p
        variants={itemVariants}
        className="mt-24 text-3xl font-medium leading-[0.95] tracking-[-0.01em] text-zinc-500 sm:mt-26 sm:text-4xl md:mt-28 md:text-5xl lg:text-4xl"
      >
        Systems engineer
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-280 text-lg leading-[1.35] text-zinc-100 sm:text-xl md:text-2xl lg:text-[1.25rem]"
      >
        Joseph Mbuzi is a <Highlight>Systems Engineer</Highlight> focused on
        building scalable digital platforms that help startups and institutions
        operate with clarity and structure.
        <br />
        <br />
        His work spans product, engineering, and developer relations, with a
        practical interest in <Highlight>business automation</Highlight> and
        thoughtful developer experience.
        <br />
        <br />
        After years of building web applications — across{" "}
        <Highlight>branding</Highlight>, tooling, and reliable product delivery
        — he now operates at the intersection of technical strategy, engineering
        practice, and product communication.
        <br />
        <br />
        He shares insights, projects, and thinking through his{" "}
        <Highlight>blog</Highlight>.
      </motion.p>

      <motion.div variants={itemVariants} className="mt-8 mb-3">
        <Link
          href="https://medium.com/@josephmbuzi9"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#e4db55]/60 bg-[#e4db55] px-5 text-sm font-semibold text-black transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#e4db55] focus:ring-offset-2 focus:ring-offset-black"
        >
          Read the blog
        </Link>
      </motion.div>
    </motion.div>
  );
}
