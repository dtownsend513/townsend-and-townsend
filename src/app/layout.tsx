import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://townsendsq.com"),
  title: {
    default: "Townsend & Townsend | Cincinnati Web Design for Small Businesses",
    template: "%s | Townsend & Townsend",
  },
  description:
    "Townsend & Townsend builds modern websites for small businesses in Cincinnati and beyond. Web design, website redesigns, ecommerce setup, hosting, and digital solutions.",
  keywords: [
    "Cincinnati web design",
    "Cincinnati website designer",
    "small business websites",
    "website redesign Cincinnati",
    "ecommerce web design",
    "local business websites",
    "Netlify website design",
    "Next.js web design",
    "Townsend and Townsend",
    "Townsend SQ",
  ],
  authors: [{ name: "Townsend & Townsend" }],
  creator: "Townsend & Townsend",
  publisher: "Townsend & Townsend",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Townsend & Townsend | Cincinnati Web Design",
    description:
      "Modern websites, redesigns, ecommerce setup, hosting, and digital solutions for small businesses.",
    url: "https://townsendsq.com",
    siteName: "Townsend & Townsend",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Townsend & Townsend | Cincinnati Web Design",
    description:
      "Modern websites and digital solutions for small businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}