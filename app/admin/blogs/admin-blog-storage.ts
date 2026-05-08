import { blogPosts, type BlogPost } from "../../lib/blogs";
import type { BlogPostStatus } from "../../lib/supabase-blogs";

export type EditablePost = BlogPost & {
  status: BlogPostStatus;
};

export const storageKey = "mbuzi-blog-admin-posts";

export const emptyPost = {
  title: "",
  category: "Systems",
  excerpt: "",
  seoDescription: "",
  content: "",
};

export function createSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatDisplayDate(value: string) {
  const date = new Date(`${value.slice(0, 10)}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function estimateReadTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export function getInitialPosts(): EditablePost[] {
  return blogPosts.map((post) => ({
    ...post,
    status: "Published",
  }));
}
