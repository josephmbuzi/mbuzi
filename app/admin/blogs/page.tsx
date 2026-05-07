import type { Metadata } from "next";
import { BlogAdminDashboard } from "./blog-admin-dashboard";

export const metadata: Metadata = {
  title: "Blog Admin",
  description: "Create, preview, and prepare blog posts for publishing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminBlogsPage() {
  return <BlogAdminDashboard />;
}
