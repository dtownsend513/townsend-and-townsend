import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Townsend & Townsend | Cincinnati Web Design",
  description:
    "Modern web design for small businesses, startups, local brands, and ecommerce businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased bg-slate-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}