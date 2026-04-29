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
        <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/35 to-transparent lg:from-black/20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-350 items-start px-5 pt-24 sm:px-8 sm:pb-16 lg:px-12">
        <div className="max-w-250">
          <p className="mt-24 text-3xl font-medium leading-[0.95] tracking-[-0.01em] text-zinc-500 sm:mt-26 sm:text-4xl md:mt-28 md:text-5xl lg:text-4xl">
            Systems engineer
          </p>

          <p className="mt-5 max-w-300 text-lg leading-[1.3] text-zinc-100 sm:mt-6 sm:text-xl sm:leading-[1.26] md:text-2xl md:leading-[1.22] lg:text-[1.3rem] lg:leading-[1.2]">
            Joseph Mbuzi is a <Highlight>{highlights[0]}</Highlight> and
            a business man focused on helping startups and businesses ship useful
            products with modern web platforms, mobile apps, cloud systems, and AI tools. He
            works across product, engineering, and developer relations, with a
            practical interest in <Highlight>{highlights[1]}</Highlight>, and thoughtful developer
            experience. After years of building web apps, including work around{" "}
            <Highlight>{highlights[3]}</Highlight>,
            tooling, and reliable product delivery, he now bridges technical
            strategy, engineering practice, and product communication.
            He shares writing, projects, and talks through his{" "}
            <Highlight>{highlights[14]}</Highlight>,{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
