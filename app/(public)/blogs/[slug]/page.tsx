import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContent } from "../../../components/blog-content";
import { siteConfig } from "../../../lib/site";
import {
  getBlogPostFromSupabase,
  getBlogPostsFromSupabase,
} from "../../../lib/supabase-blogs";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const blogPosts = await getBlogPostsFromSupabase();

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostFromSupabase(slug);

  if (!post) {
    return {
      title: "Blog not found",
    };
  }

  const description = post.seoDescription || post.excerpt;

  return {
    title: post.title,
    description,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description,
      type: "article",
      url: `/blogs/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [siteConfig.name],
      images: [
        {
          url: siteConfig.image,
          width: 1672,
          height: 941,
          alt: siteConfig.name,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostFromSupabase(slug);

  if (!post) {
    notFound();
  }

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blogs/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />

      <article className="relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/60 to-transparent" />
        <div className="absolute right-0 top-20 h-px w-2/3 bg-gradient-to-l from-[#e4db55]/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-245">
          <Link
            href="/blogs"
            className="inline-flex text-sm font-medium text-zinc-500 transition-colors hover:text-white"
          >
            Blogs
          </Link>

          <header className="mt-16 border-b border-white/10 pb-12 sm:mt-20">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase text-zinc-500">
              <span className="text-[#e4db55]">{post.category}</span>
              <time dateTime={post.publishedAt}>{post.date}</time>
              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-6 text-4xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl">
              {post.title}
            </h1>

            <p className="mt-8 max-w-210 text-lg leading-[1.45] text-zinc-300 sm:text-xl">
              {post.excerpt}
            </p>
          </header>

          <BlogContent
            content={post.content}
            className="mt-14 max-w-200 space-y-9 text-[1.05rem] leading-8 text-zinc-300 sm:text-lg sm:leading-9"
          />

          <footer className="mt-16 border-t border-white/10 pt-8">
            <Link
              href="/blogs"
              className="inline-flex text-sm font-medium text-[#e4db55] transition-colors hover:text-white"
            >
              Back to blogs
            </Link>
          </footer>
        </div>
      </article>
    </main>
  );
}
