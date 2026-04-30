import Image from "next/image";
import { AnimatedHeroContent } from "./animated-hero-content";

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
        <AnimatedHeroContent />
      </div>
    </section>
  );
}
