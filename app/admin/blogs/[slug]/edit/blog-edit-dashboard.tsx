"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  BlogContent,
  splitBlogContent,
} from "../../../../components/blog-content";
import {
  fallbackBlogCategories,
  getAdminBlogPostFromSupabase,
  getBlogCategoriesFromSupabase,
  updateBlogPostInSupabase,
  type BlogCategory,
} from "../../../../lib/supabase-blogs";
import {
  getStoredAdminSession,
  type SupabaseAuthSession,
} from "../../../../lib/supabase-auth";
import {
  createSlug,
  emptyPost,
  estimateReadTime,
  formatDisplayDate,
} from "../../admin-blog-storage";

type BlogEditDashboardProps = {
  slug: string;
};

export function BlogEditDashboard({ slug }: BlogEditDashboardProps) {
  const router = useRouter();
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const [session, setSession] = useState<SupabaseAuthSession | null>(null);
  const [categories, setCategories] = useState<BlogCategory[]>(
    fallbackBlogCategories,
  );
  const [status, setStatus] = useState<"Published" | "Draft">("Published");
  const [loadError, setLoadError] = useState("");
  const [saveError, setSaveError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [form, setForm] = useState({
    ...emptyPost,
    publishedAt: new Date().toISOString().slice(0, 10),
  });

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const storedSession = getStoredAdminSession();

      if (!storedSession) {
        router.replace("/admin/login");
        return;
      }

      setSession(storedSession);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [router]);

  useEffect(() => {
    if (!session) {
      return;
    }

    const activeSession = session;
    let isCurrent = true;

    async function loadPost() {
      setLoadError("");

      const [post, supabaseCategories] = await Promise.all([
        getAdminBlogPostFromSupabase(slug, activeSession.accessToken),
        getBlogCategoriesFromSupabase(activeSession.accessToken),
      ]);

      if (!isCurrent) {
        return;
      }

      setCategories(supabaseCategories);

      if (!post) {
        setLoadError("Blog post was not found.");
        return;
      }

      setStatus(post.status);
      setForm({
        title: post.title,
        category: post.category,
        excerpt: post.excerpt,
        seoDescription: post.seoDescription ?? "",
        content: post.content.join("\n\n"),
        publishedAt: post.publishedAt,
      });
    }

    loadPost();

    return () => {
      isCurrent = false;
    };
  }, [session, slug]);

  const previewPost = useMemo(() => {
    const content = splitBlogContent(form.content);
    const seoDescription =
      form.seoDescription.trim() ||
      form.excerpt.trim() ||
      "Add a focused SEO description for search results.";

    return {
      slug: createSlug(form.title),
      title: form.title || "Untitled blog post",
      category: form.category,
      excerpt: form.excerpt || "Add a short excerpt for the blog list.",
      seoDescription,
      date: formatDisplayDate(form.publishedAt),
      publishedAt: form.publishedAt,
      readTime: estimateReadTime(form.content),
      content,
      status,
    };
  }, [form, status]);

  function insertMarkdown(before: string, after = "", fallback = "") {
    const editor = editorRef.current;
    const selectedText =
      editor?.value.slice(editor.selectionStart, editor.selectionEnd) ??
      fallback;
    const nextText = `${before}${selectedText || fallback}${after}`;

    if (!editor) {
      setForm((currentForm) => ({
        ...currentForm,
        content: `${currentForm.content}${nextText}`,
      }));
      return;
    }

    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const nextContent = `${form.content.slice(0, start)}${nextText}${form.content.slice(end)}`;

    setForm((currentForm) => ({
      ...currentForm,
      content: nextContent,
    }));

    window.setTimeout(() => {
      editor.focus();
      editor.selectionStart = start + before.length;
      editor.selectionEnd =
        start + before.length + (selectedText || fallback).length;
    }, 0);
  }

  function insertBlock(markdown: string) {
    const separator = form.content.trim() ? "\n\n" : "";
    setForm((currentForm) => ({
      ...currentForm,
      content: `${currentForm.content}${separator}${markdown}`,
    }));
    window.setTimeout(() => editorRef.current?.focus(), 0);
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaveError("");

    if (
      !previewPost.slug ||
      !previewPost.excerpt ||
      previewPost.content.length === 0
    ) {
      return;
    }

    setIsSaving(true);

    try {
      if (!session) {
        router.replace("/admin/login");
        return;
      }

      const savedPost = await updateBlogPostInSupabase(
        slug,
        previewPost,
        session.accessToken,
      );

      router.push(`/admin/blogs?updated=${savedPost.slug}`);
    } catch (error) {
      setSaveError(
        error instanceof Error
          ? error.message
          : "Failed to update blog post in Supabase.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-zinc-900/60 to-transparent" />
        <div className="absolute right-0 top-20 h-px w-2/3 bg-gradient-to-l from-[#e4db55]/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-350">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/admin/blogs"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-white"
            >
              Blog admin
            </Link>
            <Link
              href={`/blogs/${previewPost.slug || slug}`}
              className="border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
            >
              Public post
            </Link>
          </div>

          <header className="mt-14 max-w-245">
            <p className="text-3xl font-medium leading-[0.95] text-zinc-500 sm:text-4xl">
              Edit
            </p>
            <h1 className="mt-5 text-4xl font-medium leading-[0.95] text-white sm:text-6xl md:text-7xl">
              Update this blog post.
            </h1>
          </header>

          {loadError ? (
            <p className="mt-12 border border-red-500/20 bg-red-500/10 p-5 text-sm leading-6 text-red-200">
              {loadError}
            </p>
          ) : (
            <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
              <form
                onSubmit={handleSave}
                className="border border-white/10 bg-zinc-950/70 p-5"
              >
                <p className="text-xs font-semibold uppercase text-[#e4db55]">
                  Editor
                </p>
                <h2 className="mt-3 text-2xl font-medium">Post details</h2>

                <label className="mt-6 block text-sm font-medium text-zinc-300">
                  Title
                  <input
                    value={form.title}
                    onChange={(event) =>
                      setForm((currentForm) => ({
                        ...currentForm,
                        title: event.target.value,
                      }))
                    }
                    className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                    required
                  />
                </label>

                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <label className="block text-sm font-medium text-zinc-300">
                    Category
                    <select
                      value={form.category}
                      onChange={(event) =>
                        setForm((currentForm) => ({
                          ...currentForm,
                          category: event.target.value,
                        }))
                      }
                      className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                    >
                      {categories.map((category) => (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm font-medium text-zinc-300">
                    Status
                    <select
                      value={status}
                      onChange={(event) =>
                        setStatus(event.target.value as "Published" | "Draft")
                      }
                      className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                    >
                      <option>Published</option>
                      <option>Draft</option>
                    </select>
                  </label>

                  <label className="block text-sm font-medium text-zinc-300">
                    Publish date
                    <input
                      type="date"
                      value={form.publishedAt}
                      onChange={(event) =>
                        setForm((currentForm) => ({
                          ...currentForm,
                          publishedAt: event.target.value,
                        }))
                      }
                      className="mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                      required
                    />
                  </label>
                </div>

                <label className="mt-4 block text-sm font-medium text-zinc-300">
                  Excerpt
                  <textarea
                    value={form.excerpt}
                    onChange={(event) =>
                      setForm((currentForm) => ({
                        ...currentForm,
                        excerpt: event.target.value,
                      }))
                    }
                    className="mt-2 min-h-28 w-full resize-y border border-white/10 bg-black px-4 py-3 leading-6 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                    required
                  />
                </label>

                <label className="mt-4 block text-sm font-medium text-zinc-300">
                  SEO meta description
                  <textarea
                    value={form.seoDescription}
                    onChange={(event) =>
                      setForm((currentForm) => ({
                        ...currentForm,
                        seoDescription: event.target.value,
                      }))
                    }
                    maxLength={180}
                    className="mt-2 min-h-24 w-full resize-y border border-white/10 bg-black px-4 py-3 leading-6 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                    placeholder="Write a clear 140-160 character search description."
                  />
                  <span className="mt-2 block text-xs text-zinc-500">
                    {previewPost.seoDescription.length}/160 recommended, 180 max
                  </span>
                </label>

                <div className="mt-4">
                  <label
                    htmlFor="blog-body"
                    className="block text-sm font-medium text-zinc-300"
                  >
                    Body
                  </label>

                  <div className="mt-2 flex flex-wrap gap-2 border border-white/10 bg-black p-2">
                    <button
                      type="button"
                      title="Heading"
                      onClick={() =>
                        insertMarkdown("## ", "", "Section title")
                      }
                      className="min-h-9 min-w-9 border border-white/10 px-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      title="Bold"
                      onClick={() => insertMarkdown("**", "**", "bold text")}
                      className="min-h-9 min-w-9 border border-white/10 px-3 text-sm font-bold text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      title="Italic"
                      onClick={() => insertMarkdown("*", "*", "italic text")}
                      className="min-h-9 min-w-9 border border-white/10 px-3 text-sm italic text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
                    >
                      I
                    </button>
                    <button
                      type="button"
                      title="Link"
                      onClick={() =>
                        insertMarkdown(
                          "[",
                          "](https://example.com)",
                          "link text",
                        )
                      }
                      className="min-h-9 min-w-9 border border-white/10 px-3 text-sm text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
                    >
                      Link
                    </button>
                    <button
                      type="button"
                      title="Image"
                      onClick={() =>
                        insertBlock("![Image description](/joseph.png)")
                      }
                      className="min-h-9 min-w-9 border border-white/10 px-3 text-sm text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
                    >
                      Img
                    </button>
                    <button
                      type="button"
                      title="List"
                      onClick={() =>
                        insertBlock("- First point\n- Second point")
                      }
                      className="min-h-9 min-w-9 border border-white/10 px-3 text-sm text-zinc-300 transition-colors hover:border-[#e4db55]/50 hover:text-white"
                    >
                      List
                    </button>
                  </div>

                  <textarea
                    id="blog-body"
                    ref={editorRef}
                    value={form.content}
                    onChange={(event) =>
                      setForm((currentForm) => ({
                        ...currentForm,
                        content: event.target.value,
                      }))
                    }
                    className="min-h-96 w-full resize-y border-x border-b border-white/10 bg-black px-4 py-3 font-mono text-sm leading-7 text-white outline-none transition-colors focus:border-[#e4db55]/60"
                    placeholder="Write Markdown. Use blank lines between paragraphs."
                    required
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="bg-[#e4db55] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSaving ? "Saving..." : "Save changes"}
                  </button>
                  <span className="text-sm text-zinc-500">
                    Slug: {previewPost.slug || slug}
                  </span>
                </div>
                {saveError ? (
                  <p className="mt-4 text-sm leading-6 text-red-300">
                    {saveError}
                  </p>
                ) : null}
              </form>

              <article className="border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase text-[#e4db55]">
                  Preview
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase text-zinc-500">
                  <span className="text-[#e4db55]">
                    {previewPost.category}
                  </span>
                  <span>{previewPost.status}</span>
                  <span>{previewPost.date}</span>
                  <span>{previewPost.readTime}</span>
                </div>
                <h2 className="mt-5 text-3xl font-medium leading-tight text-white">
                  {previewPost.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {previewPost.excerpt}
                </p>
                <div className="mt-6 border border-white/10 bg-black p-4">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    Search preview
                  </p>
                  <p className="mt-3 text-lg font-medium leading-tight text-[#8ab4f8]">
                    {previewPost.title}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">
                    mbuzi.bio/blogs/{previewPost.slug || slug}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {previewPost.seoDescription}
                  </p>
                </div>
                {previewPost.content.length > 0 ? (
                  <BlogContent
                    content={previewPost.content}
                    className="mt-8 space-y-6 text-[0.95rem] leading-7 text-zinc-300"
                  />
                ) : (
                  <p className="mt-8 text-sm leading-6 text-zinc-300">
                    Body preview appears here as you write.
                  </p>
                )}
              </article>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
