import { blogPosts, type BlogPost } from "../../lib/blogs";

export type EditablePost = BlogPost & {
  status: "Published" | "Draft";
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
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
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
