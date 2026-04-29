import type { Metadata } from "next";
import { Navbar } from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mbuzi.com",
  description: "Software engineer, builder, and engineering leader.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
