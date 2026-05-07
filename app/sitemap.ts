import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";
import { getBlogPostsFromSupabase } from "./lib/supabase-blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPostsFromSupabase({
    fallbackToStatic: true,
  });
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteConfig.url}${siteConfig.image}`],
    },
    {
      url: `${siteConfig.url}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteConfig.url}${siteConfig.image}`],
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteConfig.url}${siteConfig.image}`],
    },
  ];

  return [
    ...routes,
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blogs/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${siteConfig.url}${siteConfig.image}`],
    })),
  ];
}
