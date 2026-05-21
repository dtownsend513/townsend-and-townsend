import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Townsend & Townsend | Modern Websites for Small Businesses",
  description:
    "Townsend & Townsend builds modern, responsive websites for local businesses. Web design, branding, hosting, and digital solutions.",
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