"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  "New Website",
  "Website Redesign",
  "Ecommerce Store",
  "Mobile Optimization",
  "Website Support",
  "Brand Refresh",
];

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      business: String(formData.get("business") || ""),
      website: String(formData.get("website") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");

      form.reset();
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }
  }

  return (
    <main className="overflow-hidden bg-[#050b16] text-white">
      <section className="relative overflow-hidden px-6 pb-28 pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.12),_transparent_36%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-sky-300 backdrop-blur">
            Contact Townsend & Townsend
          </div>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Let’s build a website your business is proud to show people.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Whether you need a redesign, ecommerce setup, or a completely new
            website, Townsend & Townsend helps businesses create a stronger
            online presence.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                Start Here
              </p>

              <h2 className="mt-6 text-4xl font-black tracking-[-0.03em]">
                Need a new website or a better one?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Send a quick message about your business, your current website,
                and what you want improved.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-bold text-slate-300"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                Based In
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Cincinnati, Ohio
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                Helping businesses improve their online presentation with modern
                responsive websites, cleaner branding, and stronger customer
                trust.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                Typical Projects
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="font-black text-white">
                    New Business Websites
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="font-black text-white">
                    Website Redesigns
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="font-black text-white">
                    Ecommerce Stores
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2.5rem] border border-white/10 bg-white p-8 text-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-sm font-black uppercase tracking-wide text-slate-700">
                  Name
                </label>

                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-black uppercase tracking-wide text-slate-700">
                  Email
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-sm font-black uppercase tracking-wide text-slate-700">
                Business Name
              </label>

              <input
                type="text"
                name="business"
                placeholder="Your business name"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-sm font-black uppercase tracking-wide text-slate-700">
                Current Website
              </label>

              <input
                type="text"
                name="website"
                placeholder="https://example.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-sm font-black uppercase tracking-wide text-slate-700">
                Project Details
              </label>

              <textarea
                required
                name="message"
                rows={7}
                placeholder="Tell us what you need built, redesigned, or improved."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 w-full rounded-full bg-slate-950 px-8 py-5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent"
                  : "Send Website Inquiry"}
            </button>

            {status === "success" && (
              <p className="mt-5 text-center text-sm font-bold text-green-600">
                Message sent successfully. We’ll follow up as soon as possible.
              </p>
            )}

            {status === "error" && (
              <p className="mt-5 text-center text-sm font-bold text-red-600">
                {errorMessage}
              </p>
            )}

            <div className="mt-8 rounded-2xl bg-slate-100 p-5">
              <p className="text-sm leading-7 text-slate-600">
                Transparent pricing, modern responsive design, and optional
                support plans available after launch.
              </p>
            </div>
          </form>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 text-sm font-black text-white transition hover:bg-white/10"
          >
            View Recent Work
          </Link>
        </div>
      </section>
    </main>
  );
}