import type { Metadata } from "next";
import Link from "next/link";
import { blogTopics } from "../../lib/blogs";
import { siteConfig } from "../../lib/site";
import { getBlogPostsFromSupabase } from "../../lib/supabase-blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Writing from Joseph Mbuzi on software engineering, DevOps, business automation, product engineering, and developer experience.",
  keywords: [
    "software engineering blog",
    "DevOps blog",
    "business automation",
    "developer experience",
    "technical strategy",
    "Joseph Mbuzi",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs | Joseph Mbuzi",
    description:
      "Writing from Joseph Mbuzi on software engineering, DevOps, business automation, product engineering, and developer experience.",
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

export default async function BlogsPage() {
  const blogPosts = await getBlogPostsFromSupabase();

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

          <section className="mt-20 border-t border-white/10 pt-10">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase text-[#e4db55]">
                  Writing
                </p>
                <h1 className="mt-5 max-w-170 text-4xl font-medium leading-tight text-white sm:text-5xl">
                  Notes on software engineering, automation, and delivery.
                </h1>
              </div>

              <div className="max-w-190 lg:pt-12">
                <p className="text-lg leading-8 text-zinc-300">
                  Practical writing for founders, engineers, and teams working
                  through product builds, DevOps decisions, workflow automation,
                  and maintainable software delivery.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {blogTopics.map((topic) => (
                    <span
                      key={topic.title}
                      className="border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold uppercase text-zinc-400"
                    >
                      {topic.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {blogPosts.length > 0 ? (
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
            ) : (
              <p className="max-w-180 text-sm leading-6 text-zinc-500">
                No published blog posts are available yet.
              </p>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
