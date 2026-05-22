import Link from "next/link";

const services = [
  {
    title: "Barbershops & Grooming",
    label: "Local Businesses",
    description:
      "Modern websites for barbershops and grooming brands looking to showcase services, pricing, booking links, and customer trust.",
    features: [
      "Service pricing",
      "Booking integration",
      "Gallery sections",
      "Mobile-friendly design",
    ],
  },
  {
    title: "Food Trucks & Food Businesses",
    label: "Most Popular",
    description:
      "Professional websites for food trucks, caterers, plate businesses, and local food brands that need menus, business hours, and online visibility.",
    features: [
      "Menu sections",
      "Location & hours",
      "Social media integration",
      "Customer contact flow",
    ],
    featured: true,
  },
  {
    title: "Clothing Brands & Ecommerce",
    label: "Online Stores",
    description:
      "Custom ecommerce-ready websites for apparel brands, creators, and startups looking to grow a professional online presence.",
    features: [
      "Product pages",
      "Shopping cart setup",
      "Brand-focused layouts",
      "Launch assistance",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] px-6 py-32 text-white lg:px-8">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.12),_transparent_35%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.035)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.035)_1px,_transparent_1px)] bg-[size:90px_90px] opacity-20" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              Businesses We Help
            </p>

            <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
              Modern websites built for entrepreneurs and growing brands.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            We help local businesses and entrepreneurs create professional
            online experiences that build trust, attract customers, and make
            their business stand out online.
          </p>

        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-[2.5rem] border p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition hover:-translate-y-2 ${
                service.featured
                  ? "border-sky-300/40 bg-white text-slate-950"
                  : "border-white/10 bg-white/[0.06] text-white backdrop-blur"
              }`}
            >

              {/* Top Border */}
              <div
                className={`absolute inset-x-0 top-0 h-1 ${
                  service.featured
                    ? "bg-gradient-to-r from-sky-400 via-blue-500 to-slate-950"
                    : "bg-gradient-to-r from-sky-400/60 via-blue-500/30 to-transparent"
                }`}
              />

              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute right-8 top-8 rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                  Most Popular
                </div>
              )}

              {/* Label */}
              <p
                className={`text-sm font-black uppercase tracking-[0.3em] ${
                  service.featured ? "text-sky-600" : "text-sky-300"
                }`}
              >
                {service.label}
              </p>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-black tracking-[-0.03em] md:text-4xl">
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`mt-6 leading-8 ${
                  service.featured ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {service.description}
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">

                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                        service.featured
                          ? "bg-slate-950 text-white"
                          : "bg-sky-400/15 text-sky-300"
                      }`}
                    >
                      ✓
                    </span>

                    <span
                      className={`font-bold ${
                        service.featured ? "text-slate-800" : "text-slate-200"
                      }`}
                    >
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

              {/* Button */}
              <Link
                href="/contact"
                className={`mt-10 inline-flex w-full justify-center rounded-full px-6 py-4 text-sm font-black transition ${
                  service.featured
                    ? "bg-slate-950 text-white hover:bg-sky-700"
                    : "bg-white text-slate-950 hover:bg-sky-100"
                }`}
              >
                Start This Project
              </Link>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl backdrop-blur">
          
          <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
            Built For Real Businesses
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-2xl font-black tracking-[-0.03em] md:text-4xl">
            From startups and food businesses to clothing brands and local
            services, we help entrepreneurs launch modern websites that make
            their business look professional online.
          </p>

        </div>

      </div>
    </section>
  );
}