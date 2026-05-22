import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.townsendsq.com"),

  title: {
    default: "Townsend & Townsend | Cincinnati Web Design",
    template: "%s | Townsend & Townsend",
  },

  description:
    "Modern web design for small businesses, startups, local brands, and ecommerce businesses.",

  keywords: [
    "Cincinnati web design",
    "small business websites",
    "modern website design",
    "web designer Cincinnati",
    "ecommerce websites",
    "website redesign",
    "responsive websites",
  ],

  openGraph: {
    title: "Townsend & Townsend",
    description:
      "Modern websites for small businesses, entrepreneurs, and local brands.",
    url: "https://www.townsendsq.com",
    siteName: "Townsend & Townsend",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Townsend & Townsend Web Design",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Townsend & Townsend",
    description:
      "Modern websites for small businesses, entrepreneurs, and local brands.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-slate-950 antialiased">
        <Navbar />
        {children}
        <MobileCTA />
      </body>
    </html>
  );
}