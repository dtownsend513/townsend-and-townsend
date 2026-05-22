import Link from "next/link";

const packages = [
  { name: "Express Wash", price: "$65" },
  { name: "Interior Detail", price: "$160" },
  { name: "Paint Correction", price: "$300+" },
  { name: "Wrap / Tint Prep", price: "Quote" },
];

const galleryImages = [
  "https://images.pexels.com/photos/6872144/pexels-photo-6872144.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6872146/pexels-photo-6872146.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6872143/pexels-photo-6872143.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6872147/pexels-photo-6872147.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6872145/pexels-photo-6872145.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

const features = [
  {
    title: "Interior Cleaning",
    text: "Show carpet, seats, dashboards, cupholders, and real everyday cleaning work customers can relate to.",
  },
  {
    title: "Wrap & Tint Services",
    text: "Promote vinyl wraps, tint prep, trim cleanup, and appearance upgrades with clear service sections.",
  },
  {
    title: "Before & After Proof",
    text: "Use believable transformation photos to show real results on normal customer vehicles.",
  },
];

export default function DemoAutoDetailingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <section className="relative overflow-hidden px-6 py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(148,163,184,0.18),_transparent_36%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                Demo Auto Detailing Website
              </p>

              <h1 className="mt-8 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
                Clean interiors. Fresh wraps. Everyday cars looking sharp.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
                A realistic auto detailing website concept built for local
                detailers, mobile cleaners, tint shops, wrap services, and car
                care businesses.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-sky-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-sky-300"
                >
                  Build A Site Like This
                </Link>

                <Link
                  href="/portfolio"
                  className="rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                  Back To Portfolio
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-sky-500/20 blur-3xl" />

              <div className="relative grid gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] shadow-2xl md:col-span-2">
                  <img
                    src="https://images.pexels.com/photos/6872144/pexels-photo-6872144.jpeg?auto=compress&cs=tinysrgb&w=1400"
                    alt="Car interior cleaning"
                    className="h-[380px] w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/6872146/pexels-photo-6872146.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Cleaning a normal car"
                    className="h-[260px] w-full object-cover"
                  />
                </div>

                <div className="rounded-[2rem] border border-sky-300/20 bg-black/70 p-8 shadow-2xl backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                    Fresh Finish Auto Care
                  </p>

                  <h2 className="mt-5 text-4xl font-black">
                    Book your detail.
                  </h2>

                  <p className="mt-5 leading-8 text-slate-300">
                    Interior cleaning, exterior washes, tint prep, wrap
                    services, and everyday vehicle care in one clear booking
                    flow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-28 rounded-[3rem] border border-sky-300/20 bg-gradient-to-r from-sky-500/15 via-white/5 to-slate-400/10 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                  Real Service Presentation
                </p>

                <h2 className="mt-5 text-4xl font-black md:text-6xl">
                  Show services customers actually search for.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Detailers need websites that show real services clearly:
                  interior cleaning, exterior care, wrap work, tint prep,
                  pricing, photos, and booking options.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                    Popular Service
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Interior Deep Clean
                  </p>

                  <p className="mt-2 text-slate-400">
                    Seats, carpet, panels, cupholders
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                    Appearance Upgrade
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Wrap & Tint Prep
                  </p>

                  <p className="mt-2 text-slate-400">
                    Cleaning before customization
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6 md:col-span-2">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-300">
                    Booking Goal
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Turn before-and-after photos into booked appointments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                Service Packages
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Clear packages make booking easier.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Local car care businesses need pricing and package clarity so
                customers understand what they are getting before they book.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {packages.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl transition hover:-translate-y-2 hover:border-sky-300/40"
                >
                  <h3 className="text-2xl font-black">{item.name}</h3>

                  <p className="mt-5 text-4xl font-black text-sky-300">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
                Work Gallery
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Show believable work on normal vehicles.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Auto service websites work best when customers see relatable
                vehicles, interior cleaning, detailing work, tint prep, wrap
                prep, and practical results.
              </p>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl ${
                    index === 0 || index === 3 ? "lg:row-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt="Auto detailing demo gallery"
                    className={`w-full object-cover transition duration-700 hover:scale-105 ${
                      index === 0 || index === 3
                        ? "h-full min-h-[580px]"
                        : "h-[280px]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mt-28 grid gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl transition hover:-translate-y-2 hover:border-sky-300/40"
              >
                <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-300">
                  Auto Service Feature
                </p>

                <h3 className="mt-5 text-3xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {feature.text}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-28 rounded-[3rem] border border-sky-300/20 bg-sky-300/10 p-10 text-center shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-300">
              Demo Website Concept
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black md:text-6xl">
              This is the type of site that makes a local detailer look legit.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Demo pages like this help auto detailers, tint shops, wrap shops,
              and mobile cleaners visualize a more professional online presence.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-sky-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-sky-300"
            >
              Start My Website Project
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}