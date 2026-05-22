import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const services = [
  {
    title: "Starter Business Websites",
    price: "From $499",
    description:
      "Clean, professional websites for startups, solo entrepreneurs, and local businesses that need to get online fast.",
    href: "/pricing",
    items: [
      "Up to 5 pages",
      "Mobile-friendly layout",
      "Contact form",
      "Basic SEO",
      "Launch support",
    ],
  },
  {
    title: "Website Redesigns",
    price: "Custom Quote",
    description:
      "Upgrade an outdated website into a modern experience that looks trustworthy and works better on mobile.",
    href: "/contact",
    items: [
      "Modern redesign",
      "Improved layout",
      "Better messaging",
      "Stronger CTAs",
      "Mobile polish",
    ],
  },
  {
    title: "Ecommerce Websites",
    price: "From $999+",
    description:
      "Professional online stores for beauty brands, clothing brands, product sellers, and local entrepreneurs.",
    href: "/pricing",
    items: [
      "Product pages",
      "Cart setup",
      "Checkout flow",
      "Brand sections",
      "Launch support",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-600">
              What We Build
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Website solutions built around real small-business needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you need a simple starter site, a full redesign, or an
              ecommerce-ready build, the goal is the same: make your business
              look more professional and easier to trust online.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 0.15}>
              <div className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-6 inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-sky-700">
                  {service.price}
                </div>

                <h3 className="text-3xl font-black transition group-hover:text-sky-700">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm font-semibold text-slate-700"
                    >
                      <span className="text-sky-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-10 inline-flex rounded-full bg-slate-950 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-sky-600"
                >
                  Learn More
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}