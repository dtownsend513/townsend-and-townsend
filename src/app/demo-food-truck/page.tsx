import Link from "next/link";

const menuItems = [
  { name: "Loaded Fries", price: "$11" },
  { name: "Street Tacos", price: "$12" },
  { name: "Smash Burger", price: "$13" },
  { name: "Hot Wings Basket", price: "$14" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606755962773-d324e2d8be36?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=1200&q=80",
];

const streetFeatures = [
  {
    title: "Daily Truck Locations",
    text: "Show customers exactly where the truck is parked today, where it will be tomorrow, and what events are coming up.",
  },
  {
    title: "Fast Mobile Menu",
    text: "Make your best combos, baskets, specials, and prices easy to scan from a phone while customers are hungry.",
  },
  {
    title: "Catering Requests",
    text: "Turn parties, pop-ups, school events, private events, and work lunches into direct inquiries.",
  },
];

export default function DemoFoodTruckPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#120606] text-white">
      <section className="relative overflow-hidden px-6 py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,113,113,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.24),_transparent_36%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
                Demo Food Truck Website
              </p>

              <h1 className="mt-8 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
                Pull-up food. Street flavor. Easy mobile ordering.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-orange-100/80">
                A bold food truck website concept built to show the truck, menu,
                handheld food, today’s location, catering options, and social
                media energy.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-yellow-300 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-yellow-200"
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
              <div className="absolute -inset-8 rounded-full bg-red-500/20 blur-3xl" />

              <div className="relative grid gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] shadow-2xl md:col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=1400&q=80"
                    alt="Food truck street service"
                    className="h-[360px] w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80"
                    alt="Street burger"
                    className="h-[260px] w-full object-cover"
                  />
                </div>

                <div className="rounded-[2rem] border border-yellow-300/20 bg-black/70 p-8 shadow-2xl backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-300">
                    Flame Street Eats
                  </p>

                  <h2 className="mt-5 text-4xl font-black">
                    Pull up hungry.
                  </h2>

                  <p className="mt-5 leading-8 text-orange-100/75">
                    Daily menu drops, pop-up locations, catering requests, and
                    social media all connected in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-28 rounded-[3rem] border border-red-300/20 bg-gradient-to-r from-red-500/20 via-orange-400/10 to-yellow-300/10 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
                  Today’s Truck Stop
                </p>

                <h2 className="mt-5 text-4xl font-black md:text-6xl">
                  Make locations and specials impossible to miss.
                </h2>

                <p className="mt-6 text-lg leading-8 text-orange-100/75">
                  Food truck customers need quick answers: where you are, what
                  you’re serving, when you’re open, and how to book you for
                  events.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
                    Location
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Downtown Cincinnati
                  </p>

                  <p className="mt-2 text-orange-100/60">
                    11 AM - 3 PM
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
                    Special
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Loaded Street Combo
                  </p>

                  <p className="mt-2 text-orange-100/60">
                    Fries + Wings + Drink
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6 md:col-span-2">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
                    Catering
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Private events, parties, pop-ups, and lunch service.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
                Menu Highlights
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Make the menu easy to scan and crave.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100/75">
                Street food websites need big readable menu cards, fast pricing,
                bold photos, and simple calls to action for hungry customers.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl transition hover:-translate-y-2 hover:border-yellow-300/40"
                >
                  <h3 className="text-2xl font-black">{item.name}</h3>

                  <p className="mt-5 text-4xl font-black text-yellow-300">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
                Food Truck Gallery
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Big visuals sell the flavor fast.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100/75">
                Food truck sites should show the truck, the food, the crowd, the
                vibe, and the reason people should pull up.
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
                    alt="Food truck street food gallery"
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
            {streetFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl transition hover:-translate-y-2 hover:border-red-300/40"
              >
                <p className="text-sm font-black uppercase tracking-[0.3em] text-red-300">
                  Food Truck Feature
                </p>

                <h3 className="mt-5 text-3xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-orange-100/75">
                  {feature.text}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-28 rounded-[3rem] border border-yellow-300/20 bg-yellow-300/10 p-10 text-center shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
              Demo Website Concept
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black md:text-6xl">
              This is the type of site that helps food trucks look official.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100/75">
              Demo pages like this help food truck owners, caterers, plate
              sellers, and food entrepreneurs visualize their business online.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-yellow-300 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-yellow-200"
            >
              Start My Website Project
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}