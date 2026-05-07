import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogTopics } from "../lib/blogs";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Writing from Joseph Mbuzi on systems engineering, business automation, product engineering, and developer experience.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs | Joseph Mbuzi",
    description:
      "Writing from Joseph Mbuzi on systems engineering, business automation, product engineering, and developer experience.",
    url: "/blogs",
    images: [
      {
        url: siteConfig.image,
        width: 1672,
        height: 941,
        alt: "Joseph Mbuzi",
      },
    ],
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Joseph Mbuzi Blogs",
  url: `${siteConfig.url}/blogs`,
  description: metadata.description,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <section className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/60 to-transparent" />
        <div className="absolute right-0 top-20 h-px w-2/3 bg-gradient-to-l from-[#e4db55]/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-350">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-zinc-500 transition-colors hover:text-white"
          >
            Joseph Mbuzi
          </Link>

          <div className="mt-20 max-w-245 sm:mt-24">
            <p className="text-3xl font-medium leading-[0.95] text-zinc-500 sm:text-4xl md:text-5xl lg:text-4xl">
              Blogs
            </p>
            <h1 className="mt-6 text-4xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Writing on systems, products, and practical engineering.
            </h1>
            <p className="mt-8 max-w-210 text-lg leading-[1.45] text-zinc-300 sm:text-xl">
              Notes and essays from Joseph Mbuzi on building scalable digital
              platforms, improving operational workflows, and creating
              developer experiences with structure.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {blogTopics.map((topic) => (
              <article
                key={topic.title}
                className="border border-white/10 bg-zinc-950/70 p-5"
              >
                <p className="text-xs font-semibold uppercase text-[#e4db55]">
                  {topic.eyebrow}
                </p>
                <h2 className="mt-8 text-2xl font-medium leading-tight text-white">
                  {topic.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 border-t border-white/10 pt-10">
            <div className="grid gap-4 md:grid-cols-2">
              {blogPosts.map((post) => (
                <Link
                  key={post.title}
                  href={`/blogs/${post.slug}`}
                  className="group border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#e4db55]/50"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase text-zinc-500">
                    <span className="text-[#e4db55]">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-medium leading-tight text-white transition-colors group-hover:text-[#e4db55]">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
