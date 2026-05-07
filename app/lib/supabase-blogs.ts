import { blogPosts, type BlogPost } from "./blogs";

export type BlogPostStatus = "Published" | "Draft";

export type StoredBlogPost = BlogPost & {
  status: BlogPostStatus;
};

type SupabaseBlogRow = {
  slug: string;
  title: string;
  published_at: string;
  read_time: string;
  category: string;
  excerpt: string;
  seo_description: string | null;
  content: string[];
  status: BlogPostStatus;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const blogColumns =
  "slug,title,published_at,read_time,category,excerpt,seo_description,content,status";

function getSupabaseHeaders(accessToken?: string) {
  if (!supabasePublishableKey) {
    return null;
  }

  return {
    apikey: supabasePublishableKey,
    Authorization: `Bearer ${accessToken ?? supabasePublishableKey}`,
    "Content-Type": "application/json",
  };
}

function getSupabaseEndpoint(path: string) {
  if (!supabaseUrl) {
    return null;
  }

  return `${supabaseUrl.replace(/\/$/, "")}/rest/v1/${path}`;
}

function mapRowToPost(row: SupabaseBlogRow): StoredBlogPost {
  return {
    slug: row.slug,
    title: row.title,
    date: new Intl.DateTimeFormat("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(`${row.published_at}T00:00:00`)),
    publishedAt: row.published_at,
    readTime: row.read_time,
    category: row.category,
    excerpt: row.excerpt,
    seoDescription: row.seo_description ?? undefined,
    content: row.content,
    status: row.status,
  };
}

function mapPostToRow(post: StoredBlogPost): SupabaseBlogRow {
  return {
    slug: post.slug,
    title: post.title,
    published_at: post.publishedAt,
    read_time: post.readTime,
    category: post.category,
    excerpt: post.excerpt,
    seo_description: post.seoDescription ?? null,
    content: post.content,
    status: post.status,
  };
}

function fallbackPosts(): StoredBlogPost[] {
  return blogPosts.map((post) => ({
    ...post,
    status: "Published",
  }));
}

export async function getBlogPostsFromSupabase(options?: {
  includeDrafts?: boolean;
  accessToken?: string;
}) {
  const endpoint = getSupabaseEndpoint(
    `blogs?select=${blogColumns}${
      options?.includeDrafts ? "" : "&status=eq.Published"
    }&order=published_at.desc`,
  );
  const headers = getSupabaseHeaders(options?.accessToken);

  if (!endpoint || !headers) {
    return fallbackPosts();
  }

  try {
    const response = await fetch(endpoint, {
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      return fallbackPosts();
    }

    const rows = (await response.json()) as SupabaseBlogRow[];
    return rows.length > 0 ? rows.map(mapRowToPost) : fallbackPosts();
  } catch {
    return fallbackPosts();
  }
}

export async function getBlogPostFromSupabase(slug: string) {
  const endpoint = getSupabaseEndpoint(
    `blogs?select=${blogColumns}&slug=eq.${encodeURIComponent(
      slug,
    )}&status=eq.Published&limit=1`,
  );
  const headers = getSupabaseHeaders();

  if (!endpoint || !headers) {
    return fallbackPosts().find((post) => post.slug === slug);
  }

  try {
    const response = await fetch(endpoint, {
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      return fallbackPosts().find((post) => post.slug === slug);
    }

    const rows = (await response.json()) as SupabaseBlogRow[];
    return rows[0] ? mapRowToPost(rows[0]) : undefined;
  } catch {
    return fallbackPosts().find((post) => post.slug === slug);
  }
}

export async function saveBlogPostToSupabase(
  post: StoredBlogPost,
  accessToken: string,
) {
  const endpoint = getSupabaseEndpoint("blogs?on_conflict=slug");
  const headers = getSupabaseHeaders(accessToken);

  if (!endpoint || !headers) {
    throw new Error("Supabase environment variables are not configured.");
  }

  if (!accessToken) {
    throw new Error("Sign in before publishing a blog post.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      ...headers,
      Prefer: "resolution=merge-duplicates,return=representation",
    },
    body: JSON.stringify(mapPostToRow(post)),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to save blog post to Supabase.");
  }

  const rows = (await response.json()) as SupabaseBlogRow[];
  return mapRowToPost(rows[0]);
}
