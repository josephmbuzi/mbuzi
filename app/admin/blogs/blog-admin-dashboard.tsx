"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BlogContent } from "../../components/blog-content";
import {
  type EditablePost,
  getInitialPosts,
  storageKey,
} from "./admin-blog-storage";

export function BlogAdminDashboard() {
  const [posts, setPosts] = useState<EditablePost[]>(getInitialPosts);
  const [selectedSlug, setSelectedSlug] = useState(
    getInitialPosts()[0]?.slug ?? "",
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const savedPosts = window.localStorage.getItem(storageKey);

      if (savedPosts) {
        const parsedPosts = JSON.parse(savedPosts) as EditablePost[];
        setPosts(parsedPosts);
        setSelectedSlug(parsedPosts[0]?.slug ?? "");
      }
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const selectedPost = useMemo(
    () => posts.find((post) => post.slug === selectedSlug) ?? posts[0],
    [posts, selectedSlug],
  );

  function handleReset() {
    const initialPosts = getInitialPosts();
    setPosts(initialPosts);
    setSelectedSlug(initialPosts[0]?.slug ?? "");
    window.localStorage.removeItem(storageKey);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/60 to-transparent" />
        <div className="absolute right-0 top-20 h-px w-2/3 bg-gradient-to-l from-[#e4db55]/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-350">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blogs"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
            >
              Blogs
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
              >
                Reset local posts
              </button>
              <Link
                href="/admin/blogs/create"
                className="bg-[#e4db55] px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-white"
              >
                Create blog
              </Link>
            </div>
          </div>

          <header className="mt-14 max-w-245">
            <p className="text-3xl font-medium leading-[0.95] text-zinc-500 sm:text-4xl">
              Admin
            </p>
            <h1 className="mt-5 text-4xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl">
              Publish and manage blog posts.
            </h1>
          </header>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="border border-white/10 bg-white/[0.03]">
              <div className="border-b border-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-[#e4db55]">
                  Library
                </p>
                <h2 className="mt-3 text-2xl font-medium">Posts</h2>
              </div>

              <div className="grid">
                {posts.map((post) => (
                  <button
                    key={post.slug}
                    type="button"
                    onClick={() => setSelectedSlug(post.slug)}
                    className={`border-b border-white/10 p-5 text-left transition-colors hover:bg-white/[0.05] ${
                      selectedPost?.slug === post.slug ? "bg-white/[0.06]" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase text-zinc-500">
                      <span className="text-[#e4db55]">{post.category}</span>
                      <span>{post.status}</span>
                    </div>
                    <p className="mt-3 text-lg font-medium leading-tight text-white">
                      {post.title}
                    </p>
                    <p className="mt-2 text-sm text-zinc-500">{post.date}</p>
                  </button>
                ))}
              </div>
            </aside>

            {selectedPost ? (
              <section className="border border-white/10 bg-white/[0.03] p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[#e4db55]">
                      Selected
                    </p>
                    <h2 className="mt-3 text-2xl font-medium">
                      {selectedPost.title}
                    </h2>
                  </div>
                  <Link
                    href={`/blogs/${selectedPost.slug}`}
                    className="border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
                  >
                    View post
                  </Link>
                </div>
                <p className="mt-4 max-w-245 text-sm leading-6 text-zinc-400">
                  {selectedPost.excerpt}
                </p>
                <BlogContent
                  content={selectedPost.content}
                  className="mt-8 space-y-6 text-[0.95rem] leading-7 text-zinc-300"
                />
              </section>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
