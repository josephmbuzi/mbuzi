import Image from "next/image";

const highlights = [
  "Systems Engineer",
  "Business automation",
  "Gemini",
  "Branding",
  "Google DeepMind",
  "AI-assisted engineering",
  "previously",
  "books",
  "Learning JavaScript Design Patterns",
  "Leading Effective Engineering Teams",
  "open-source work",
  "LinkedIn",
  "Twitter",
  "TikTok",
  "blog",
  "Substack",
  "LeadDev",
];

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-[#e4db55]">{children}</span>;
}

export function Hero() {
  return (
    <section
      id="biography"
      className="relative isolate overflow-hidden bg-black text-white"
    >
      <div className="absolute right-0 top-22 z-0 h-[34vh] w-full opacity-60 sm:top-24 sm:h-[42vh] lg:h-[52vh] lg:w-[49vw] lg:opacity-80">
        <Image
          src="/joseph.png"
          alt="A software engineer speaking on a dark conference stage"
          fill
          priority
          sizes="(min-width: 1024px) 49vw, 100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-350 items-start px-5 pt-24 sm:px-8 sm:pb-16 lg:px-12">
        <div className="max-w-250">
          <p className="mt-24 text-3xl font-medium leading-[0.95] tracking-[-0.01em] text-zinc-500 sm:mt-26 sm:text-4xl md:mt-28 md:text-5xl lg:text-4xl">
            Systems engineer
          </p>

         <p className="mt-6 max-w-280 text-lg leading-[1.35] text-zinc-100 sm:text-xl md:text-2xl lg:text-[1.25rem]">
  Joseph Mbuzi is a <Highlight>Systems Engineer</Highlight> focused on building
  scalable digital platforms that help startups and institutions operate with
  clarity and structure.

  <br /><br />

  His work spans product, engineering, and developer relations, with a practical
  interest in <Highlight>business automation</Highlight> and thoughtful developer
  experience.

  <br /><br />

  After years of building web applications — across <Highlight>branding</Highlight>,
  tooling, and reliable product delivery — he now operates at the intersection
  of technical strategy, engineering practice, and product communication.

  <br /><br />

  He shares insights, projects, and thinking through his <Highlight>blog</Highlight>.
</p>
        </div>
      </div>
    </section>
  );
}
