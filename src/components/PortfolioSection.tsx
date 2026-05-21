import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Komposition Beauty",
    category: "Ecommerce Website",
    image: "/images/komposition-preview.jpg",
    description:
      "A polished skincare ecommerce site focused on premium branding, product presentation, mobile experience, and customer trust.",
    link: "https://komposition.com",
    tags: ["Ecommerce", "Beauty Brand", "Mobile UX"],
  },
  {
    title: "Bartender With A Smile",
    category: "Service Business Website",
    image: "/images/bartender-preview.jpg",
    description:
      "A modern event-service website redesign built around stronger visuals, clearer messaging, and easier customer inquiries.",
    link: "https://www.bartenderwithasmile.com",
    tags: ["Service Business", "Lead Capture", "Redesign"],
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-sky-400">
              Proof of Work
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Real websites. Real business presentation.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            Your website should look like your business is active, trustworthy,
            and ready for customers. These projects show the type of modern
            digital presence we build for local brands.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div
                className={`relative flex min-h-[420px] items-center justify-center bg-slate-950 p-6 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} website preview`}
                  width={1400}
                  height={900}
                  className="max-h-[380px] w-full rounded-2xl object-contain"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-400">
                  {item.category}
                </p>

                <h3 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  target="_blank"
                  className="mt-9 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-sky-100"
                >
                  View Live Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}