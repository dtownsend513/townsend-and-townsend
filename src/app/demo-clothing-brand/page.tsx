import Link from "next/link";

const products = [
  { name: "Signature Hoodie", price: "$68" },
  { name: "Graphic Tee", price: "$38" },
  { name: "Essential Joggers", price: "$62" },
  { name: "Limited Drop Hat", price: "$32" },
];

const galleryImages = [
  "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7763150/pexels-photo-7763150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/6311648/pexels-photo-6311648.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

const features = [
  {
    title: "Product Drops",
    text: "Showcase new releases, limited collections, featured items, and seasonal launches.",
  },
  {
    title: "Mobile Shopping",
    text: "Make it easy for customers to browse products, view details, and move toward checkout from their phone.",
  },
  {
    title: "Brand Identity",
    text: "Use strong visuals, lifestyle photos, and clear messaging to make the clothing line feel established.",
  },
];

export default function DemoClothingBrandPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative overflow-hidden px-6 py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.22),_transparent_36%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-indigo-300">
                Demo Clothing Brand Website
              </p>

              <h1 className="mt-8 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
                Drop culture. Clean visuals. Brand-first ecommerce.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
                A premium clothing brand website concept built for apparel
                startups, streetwear drops, product collections, and online
                store launches.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-indigo-100"
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
              <div className="absolute -inset-8 rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative grid gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] shadow-2xl md:col-span-2">
                  <img
                    src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1400"
                    alt="Streetwear fashion brand"
                    className="h-[360px] w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Clothing brand product"
                    className="h-[260px] w-full object-cover"
                  />
                </div>

                <div className="rounded-[2rem] border border-indigo-300/20 bg-black/70 p-8 shadow-2xl backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-indigo-300">
                    Crown District
                  </p>

                  <h2 className="mt-5 text-4xl font-black">
                    New drop live now.
                  </h2>

                  <p className="mt-5 leading-8 text-slate-300">
                    Product drops, size options, lifestyle photos, checkout, and
                    brand storytelling all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-28 rounded-[3rem] border border-indigo-300/20 bg-gradient-to-r from-white/10 via-indigo-400/10 to-purple-400/10 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-indigo-300">
                  Featured Drop
                </p>

                <h2 className="mt-5 text-4xl font-black md:text-6xl">
                  Turn a clothing idea into a real brand experience.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Clothing brands need more than a logo. The website should make
                  the products, photography, sizing, story, and shopping flow
                  feel intentional.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-300">
                    Collection
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Winter Essentials
                  </p>

                  <p className="mt-2 text-slate-400">
                    Hoodies, tees, joggers, hats
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-300">
                    Launch
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Limited Drop
                  </p>

                  <p className="mt-2 text-slate-400">
                    Online ordering ready
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6 md:col-span-2">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-300">
                    Brand Goal
                  </p>

                  <p className="mt-4 text-2xl font-black">
                    Make the clothing line look established before the first sale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-indigo-300">
                Product Highlights
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Showcase products like a real online brand.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A clothing website should make products feel premium, easy to
                browse, and ready for customers to buy from any device.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl transition hover:-translate-y-2 hover:border-indigo-300/40"
                >
                  <h3 className="text-2xl font-black">{item.name}</h3>

                  <p className="mt-5 text-4xl font-black text-indigo-300">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-indigo-300">
                Brand Gallery
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Lifestyle visuals help sell the identity.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Clothing brands need visuals that show the products, fit,
                attitude, lifestyle, and reason customers should connect with
                the brand.
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
                    alt="Clothing brand demo gallery"
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
                className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl transition hover:-translate-y-2 hover:border-indigo-300/40"
              >
                <p className="text-sm font-black uppercase tracking-[0.3em] text-indigo-300">
                  Brand Feature
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

          <section className="mt-28 rounded-[3rem] border border-indigo-300/20 bg-indigo-300/10 p-10 text-center shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-indigo-300">
              Demo Website Concept
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black md:text-6xl">
              This is the type of site that makes a clothing brand feel real.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Demo pages like this help apparel startups, clothing brands, and
              creators visualize how their products could look online.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-indigo-100"
            >
              Start My Website Project
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}