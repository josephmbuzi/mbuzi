import { ArticleCard } from "./article-card";
import { articles } from "../data/articles";

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
            <ArticleCard
              key={article.slug}
              href={`/articles/${article.slug}`}
              {...article}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
