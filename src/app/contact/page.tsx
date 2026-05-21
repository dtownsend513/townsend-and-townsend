"use client";

import Link from "next/link";
import { useState } from "react";

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
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
            Contact Townsend & Townsend
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Let’s talk about your website.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Tell us what kind of website your business needs, what is not
            working with your current site, or what you want to launch next.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-400">
              Start Here
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight">
              Need a new site or a better one?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Send a quick message with your business name, current website if
              you have one, and what you want improved.
            </p>

            <div className="mt-10 space-y-5 text-sm font-semibold text-slate-300">
              <p>Website design</p>
              <p>Website redesign</p>
              <p>Ecommerce setup</p>
              <p>Hosting and domain support</p>
              <p>Mobile-friendly business websites</p>
            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-5">
              <p className="text-sm leading-6 text-slate-300">
                Based in Cincinnati, Ohio. Built for local businesses that want
                a cleaner, more professional online presence.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Name
                </label>

                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-sky-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Email
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-sky-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-black text-slate-700">
                Business Name
              </label>

              <input
                type="text"
                name="business"
                placeholder="Your business name"
                className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-black text-slate-700">
                Current Website
              </label>

              <input
                type="text"
                name="website"
                placeholder="https://example.com or leave blank"
                className="w-full rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-black text-slate-700">
                What do you need?
              </label>

              <textarea
                required
                name="message"
                rows={6}
                placeholder="Tell us what you need built, redesigned, or improved."
                className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-4 outline-none transition focus:border-sky-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 w-full rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent"
                  : "Send Website Inquiry"}
            </button>

            {status === "success" && (
              <p className="mt-5 text-center text-sm font-semibold text-green-600">
                Message sent successfully. I’ll follow up as soon as possible.
              </p>
            )}

            {status === "error" && (
              <p className="mt-5 text-center text-sm font-semibold text-red-600">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black">New Website</h3>

              <p className="mt-4 leading-7 text-slate-600">
                For businesses starting fresh with a clean, professional online
                presence.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black">Website Redesign</h3>

              <p className="mt-4 leading-7 text-slate-600">
                For outdated websites that need stronger branding, better
                layout, and mobile cleanup.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black">Online Store</h3>

              <p className="mt-4 leading-7 text-slate-600">
                For businesses ready to sell products online with checkout and
                payment setup.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-sky-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}