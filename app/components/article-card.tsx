import Image from "next/image";

type ArticleCardProps = {
  title: string;
  imageTitle: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  featured?: boolean;
  visual?: "headline" | "diagram";
};

export function ArticleCard({
  title,
  imageTitle,
  imageSrc,
  imageAlt,
  href = "#",
  featured = false,
  visual = "headline",
}: ArticleCardProps) {
  return (
    <a
      href={href}
      className="group block focus:outline-none"
      aria-label={`Read ${title}`}
    >
      <div
        className={`relative aspect-[1.42] overflow-hidden rounded-[4px] bg-black ${
          featured
            ? "ring-[5px] ring-[#4965bf]"
            : "ring-1 ring-black/10 group-hover:ring-2 group-hover:ring-[#4965bf]/70"
        }`}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? imageTitle}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : visual === "diagram" ? (
          <ArticleDiagram />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)] px-6 text-center">
            <p className="font-serif text-[clamp(2rem,5vw,4.7rem)] font-bold leading-[0.86] text-white">
              {imageTitle}
            </p>
          </div>
        )}
      </div>

      <h3 className="mt-5 max-w-[19rem] text-[1.22rem] font-bold leading-[1.16] text-zinc-800 transition-colors group-hover:text-[#4965bf] sm:text-[1.38rem]">
        {title}
      </h3>
    </a>
  );
}

function ArticleDiagram() {
  const nodes = [
    "Chatbot",
    "AI refactors",
    "Design",
    "Docs",
    "Build",
    "Testing",
    "Review",
    "Telemetry",
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center bg-white px-4 text-center">
      <p className="mb-4 font-sans text-[clamp(1rem,2vw,1.6rem)] font-black uppercase leading-none text-black">
        Where can AI improve <span className="text-[#4965bf]">DX?</span>
      </p>
      <div className="grid w-full max-w-[16rem] grid-cols-3 gap-2">
        {nodes.map((node, index) => (
          <span
            key={node}
            className={`rounded-sm px-2 py-1 text-[0.48rem] font-bold leading-tight ${
              index % 3 === 0
                ? "bg-[#2563eb] text-white"
                : "bg-[#dbeafe] text-[#4965bf]"
            }`}
          >
            {node}
          </span>
        ))}
      </div>
    </div>
  );
}
