import type { Metadata } from "next";
import { BlogCreateDashboard } from "./blog-create-dashboard";

export const metadata: Metadata = {
  title: "Create Blog",
  description: "Create and preview a blog post before publishing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CreateBlogPage() {
  return <BlogCreateDashboard />;
}
