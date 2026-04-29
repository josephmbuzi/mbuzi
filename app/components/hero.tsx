import Image from "next/image";
import { Karla } from "next/font/google";

const highlights = [
  "Software Engineer",
  "Google Cloud AI",
  "Gemini",
  "Chrome",
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

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-[#e4db55]">{children}</span>;
}

export function Hero() {
  return (
    <section
      id="biography"
      className="relative isolate min-h-screen overflow-hidden bg-black text-white"
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

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-460 items-start px-5 pb-12 pt-48 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="max-w-250">
         <h1 className={`${karla.className} text-[clamp(4.5rem,8vw,12rem)] font-black text-white`}>
  Joseph Mbuzi
</h1>

          <p className="mt-28 text-[clamp(1.7rem,2.1vw,3rem)] font-medium leading-none text-zinc-500">
            Software engineer
          </p>

          <p className="mt-6 max-w-300 text-[clamp(1.12rem,1.35vw,1.65rem)] font-medium leading-[1.12] text-zinc-100">
            Joseph Mbuzi is a <Highlight>{highlights[0]}</Highlight> and
            a business man focused on helping startups and businesses ship useful
            products with modern web platforms, cloud systems, and AI tools. He
            works across product, engineering, and developer relations, with a
            practical interest in <Highlight>{highlights[1]}</Highlight>,{" "}
            <Highlight>{highlights[2]}</Highlight>, and thoughtful developer
            experience. After years building for the web, including work around{" "}
            <Highlight>{highlights[3]}</Highlight>-style performance,
            tooling, and reliable product delivery, he now bridges technical
            strategy, engineering practice, and product communication.
            Passionate about <Highlight>{highlights[5]}</Highlight> and
            developer tools, he shares writing, projects, and talks through his{" "}
            <Highlight>{highlights[10]}</Highlight>,{" "}
            <Highlight>{highlights[11]}</Highlight>,{" "}
            <Highlight>{highlights[12]}</Highlight>, and{" "}
            <Highlight>{highlights[14]}</Highlight>.
          </p>
        </div>
      </div>
    </section>
  );
}
