import { ArticleCard } from "./article-card";

const articles = [
  {
    title: "The Factory Model: How Coding Agents Changed Software Engineering",
    imageTitle: "The Factory Model",
    imageSrc: "/joseph.png",
  },
  {
    title: "Stop Using /init for AGENTS.md",
    imageTitle: "Stop Using /init for AGENTS.md",
    imageSrc: "/joseph.png",
  },
  {
    title: "Claude Code Swarms",
    imageTitle: "Claude Code Swarms",
    imageSrc: "/joseph.png",
    featured: true,
  },
  {
    title: "Agentic Engineering",
    imageTitle: "Agentic Engineering",
    imageSrc: "/joseph.png",
  },
  {
    title: "Self-Improving Coding Agents",
    imageTitle: "Self-Improving Coding Agents",
    imageSrc: "/joseph.png",
  },
  {
    title: "Writing a good spec for AI Agents",
    imageTitle: "Writing a good spec for AI Agents",
    imageSrc: "/joseph.png",
  },
  {
    title: "Your AI coding agents need a manager",
    imageTitle: "Your AI coding agents need a manager",
    imageSrc: "/joseph.png",
  },
  {
    title: "Code Review in the age of AI",
    imageTitle: "Code Review in the age of AI",
    imageSrc: "/joseph.png",
  },
  {
    title: "The Next Two Years of Software Engineering",
    imageTitle: "The Next Two Years of Software Engineering",
    imageSrc: "/joseph.png",
  },
  {
    title: "Where can AI improve developer experience?",
    imageTitle: "Where can AI improve DX?",
    imageSrc: "/joseph.png",
  },
];

export function Articles() {
  return (
    <section
      id="articles"
      className="bg-white px-5 py-16 text-zinc-950 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto w-full max-w-360">
        <h2 className="text-center font-serif text-3xl font-semibold italic leading-none text-zinc-300 sm:text-3xl">
          Featured articles
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
