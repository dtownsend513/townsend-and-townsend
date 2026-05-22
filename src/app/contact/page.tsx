"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const projectTypes = [
  "Starter Website",
  "Website Redesign",
  "Ecommerce Website",
  "Monthly Website Support",
];

const expectations = [
  "Clear project review",
  "Simple pricing conversation",
  "Mobile-first recommendations",
  "No-pressure next steps",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      businessName: String(formData.get("businessName") || ""),
      projectType: String(formData.get("projectType") || ""),
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

      const result = await response.json();

      if (!response.ok || result.error) {
        console.error("Contact form failed:", result);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form client error:", error);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative px-6 pb-28 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.14),_transparent_30%)]" />

        <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-sky-500/20 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-700/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-slate-300 backdrop-blur transition hover:bg-white hover:text-slate-950"
            >
              ← Back Home
            </Link>

            <p className="mt-14 text-sm font-black uppercase tracking-[0.3em] text-sky-300">
              Free Website Review
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.92] tracking-tight md:text-7xl">
              Let’s build a website that actually feels premium.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Whether you need a brand new website, a redesign, or a more
              modern online presence, we’ll review your current setup and help
              map out the best next step.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {expectations.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                    ✓
                  </div>

                  <p className="mt-4 font-bold text-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                Average Response Time
              </p>

              <h3 className="mt-4 text-4xl font-black">Within 24 Hours</h3>

              <p className="mt-4 leading-7 text-slate-300">
                We review every inquiry personally and provide straightforward
                recommendations based on your goals, industry, and current
                website.
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
            <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-950 md:p-10">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-sky-600">
                Project Inquiry
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Tell us about your website.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                The more details you provide, the better recommendations we can
                give.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                      Name
                    </label>

                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-sky-500 focus:bg-white focus:shadow-lg"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                      Email
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-sky-500 focus:bg-white focus:shadow-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                    Business Name
                  </label>

                  <input
                    name="businessName"
                    type="text"
                    placeholder="Your business name"
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-sky-500 focus:bg-white focus:shadow-lg"
                  />
                </div>

                <div>
                  <label className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                    Project Type
                  </label>

                  <select
                    name="projectType"
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-sky-500 focus:bg-white focus:shadow-lg"
                  >
                    <option>Select a project type</option>

                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                    Current Website
                  </label>

                  <input
                    name="website"
                    type="text"
                    placeholder="yourwebsite.com or https://yourwebsite.com"
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-sky-500 focus:bg-white focus:shadow-lg"
                  />
                </div>

                <div>
                  <label className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                    Project Details
                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us what you want improved..."
                    className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition duration-300 focus:border-sky-500 focus:bg-white focus:shadow-lg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-slate-950 px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:scale-[1.02] hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Sending Request..."
                    : "Request Website Review"}
                </button>

                {status === "success" && (
                  <p className="rounded-2xl bg-green-50 px-5 py-4 text-center text-sm font-bold text-green-700">
                    Your request was sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="rounded-2xl bg-red-50 px-5 py-4 text-center text-sm font-bold text-red-700">
                    Something went wrong. Check the browser console or terminal
                    for the exact response.
                  </p>
                )}

                <p className="text-center text-sm leading-7 text-slate-500">
                  No pressure. No complicated process. Just clear
                  recommendations and next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}