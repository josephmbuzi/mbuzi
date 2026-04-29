import Image from "next/image";

const logos = [
  { src: "/logos/yamfumu.png", alt: "yamfumu" },
  { src: "/logos/yamfumu.png", alt: "yamfumu" },
  { src: "/logos/yamfumu.png", alt: "yamfumu" },
  { src: "/logos/yamfumu.png", alt: "yamfumu" },
  { src: "/logos/yamfumu.png", alt: "yamfumu" },
  { src: "/logos/yamfumu.png", alt: "yamfumu" },
  { src: "/logos/yamfumu.png", alt: "yamfumu" },
  { src: "/logos/yamfumu.png", alt: "yamfumu" },
];

export function CaseStudies() {
  return (
    <section className="flex flex-col items-start bg-black px-5 text-white sm:px-12 lg:px-12">
      <div className="w-full max-w-280 px-5 sm:px-8 sm:pb-16 lg:px-12">
        {/* Title */}
        <h2 className="text-2xl font-bold leading-none text-zinc-400 sm:text-2xl">
          Case Studies
        </h2>

        {/* Logos Grid */}
        <div className="mt-8 grid grid-cols-2 gap-y-16 gap-x-10 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}