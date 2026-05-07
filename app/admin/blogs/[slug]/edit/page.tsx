import type { Metadata } from "next";
import { BlogEditDashboard } from "./blog-edit-dashboard";

type EditBlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const metadata: Metadata = {
  title: "Edit Blog",
  description: "Edit an existing blog post.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { slug } = await params;

  return <BlogEditDashboard slug={slug} />;
}
