"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-500 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <div className="rounded-full border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl">
        <Link
          href="/contact"
          className="flex items-center justify-center rounded-full bg-sky-400 px-6 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300"
        >
          Request Website Review
        </Link>
      </div>
    </div>
  );
}