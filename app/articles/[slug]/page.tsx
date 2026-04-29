import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "../../data/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article not found | Mbuzi.com",
    };
  }

  return {
    title: `${article.title} | Mbuzi.com`,
    description: article.sections[0]?.paragraphs[0],
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-5 pb-24 pt-10 text-[#202124] sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1376px]">
        <Link
          href="/#articles"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-[#4965bf]"
        >
          Back to articles
        </Link>

        <article className="mx-auto mt-24 max-w-[1210px] sm:mt-28">
          <header className="mx-auto max-w-[1180px] text-center">
            <h1 className="mx-auto max-w-[1160px] text-balance font-extralight leading-[1.14] tracking-normal text-zinc-900 text-[clamp(2.75rem,5vw,5rem)]">
              {article.title}
            </h1>
            <time
              dateTime={toDateTime(article.date)}
              className="mt-11 block text-[1.35rem] font-medium uppercase tracking-[0.28em] text-zinc-400"
            >
              {article.date}
            </time>
          </header>

          <div className="mt-16 text-[clamp(1.35rem,2vw,2rem)] leading-[1.65] text-zinc-800 sm:mt-20">
            {article.sections.map((section, sectionIndex) => (
              <section
                key={section.heading ?? `intro-${sectionIndex}`}
                className={
                  sectionIndex === 0
                    ? ""
                    : "mt-20 border-t border-zinc-200 pt-20"
                }
              >
                {section.heading ? (
                  <h2 className="mb-8 text-[clamp(2rem,3vw,3rem)] font-bold leading-tight text-zinc-900">
                    {section.heading}
                  </h2>
                ) : null}
                <div className="space-y-10">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${sectionIndex}-${paragraphIndex}`}>
                      {highlightParagraph(paragraph)}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}

function highlightParagraph(paragraph: string) {
  const highlightedPhrases = [
    "agentic engineering",
    "Coding has changed dramatically. Software engineering, at its core, has not.",
    "Michael Truell's thoughts",
    "The history of software engineering is the history of raising abstraction.",
  ];

  const phrase = highlightedPhrases.find((item) => paragraph.includes(item));

  if (!phrase) {
    return paragraph;
  }

  const [before, after] = paragraph.split(phrase);
  const isStrong = phrase.endsWith("abstraction.") || phrase.startsWith("Coding");

  return (
    <>
      {before}
      {isStrong ? (
        <strong className="font-bold text-zinc-900">{phrase}</strong>
      ) : (
        <span className="text-[#3b73d9]">{phrase}</span>
      )}
      {after}
    </>
  );
}

function toDateTime(date: string) {
  return new Date(date).toISOString().split("T")[0];
}
