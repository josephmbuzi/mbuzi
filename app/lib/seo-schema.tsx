import { siteConfig } from "./site";
import type { BlogPost } from "./blogs";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

type JsonLdProps = {
  data: JsonLdValue;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function absoluteUrl(path = "") {
  if (!path) {
    return siteConfig.url;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.image),
    jobTitle: "Software Engineer and Consultant",
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.medium,
      siteConfig.links.quora,
    ],
    knowsAbout: [
      "Software engineering",
      "Software consulting",
      "DevOps",
      "Full-stack development",
      "Business automation",
      "Developer experience",
      "Digital platforms",
      "Technical strategy",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/services#professional-service`,
    name: `${siteConfig.name} Services`,
    url: absoluteUrl("/services"),
    image: absoluteUrl(siteConfig.image),
    description:
      "Software engineering, DevOps, and consulting services for web platforms, workflow automation, technical strategy, and maintainable delivery.",
    founder: {
      "@id": `${siteConfig.url}/#person`,
    },
    areaServed: ["Worldwide", "Zambia", "Lusaka"],
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildBlogCollectionSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blogs#blog`,
    name: "Joseph Mbuzi Blogs",
    url: absoluteUrl("/blogs"),
    description:
      "Writing from Joseph Mbuzi on software engineering, DevOps, business automation, product engineering, and developer experience.",
    author: {
      "@id": `${siteConfig.url}/#person`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blogs/${post.slug}`),
      datePublished: post.publishedAt,
      description: post.seoDescription || post.excerpt,
      author: {
        "@id": `${siteConfig.url}/#person`,
      },
    })),
  };
}

export function buildBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blogs/${post.slug}#blog-posting`,
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: absoluteUrl(siteConfig.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@id": `${siteConfig.url}/#person`,
    },
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blogs/${post.slug}`),
    },
  };
}
