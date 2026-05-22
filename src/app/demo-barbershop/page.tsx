import Link from "next/link";

const services = [
  { name: "Classic Cut", price: "$35" },
  { name: "Fade & Lineup", price: "$45" },
  { name: "Beard Trim", price: "$20" },
  { name: "Cut + Beard", price: "$60" },
];

const galleryImages = [
  "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7697285/pexels-photo-7697285.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/7697319/pexels-photo-7697319.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export default function DemoBarbershopPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <section className="relative overflow-hidden px-6 py-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(120,113,108,0.18),_transparent_36%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-amber-300">
                Demo Barbershop Website
              </p>

              <h1 className="mt-8 max-w-5xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
                Premium cuts. Sharp fades. Clean confidence.
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-stone-300">
                A modern barbershop website concept built to showcase services,
                pricing, booking, location, style, and brand personality.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-amber-300 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-amber-200"
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

            <div className="relative grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Barber cutting hair"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>

              <div className="grid gap-5">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/7697285/pexels-photo-7697285.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Barbershop client"
                    className="h-[250px] w-full object-cover"
                  />
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/70 p-8 shadow-2xl backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">
                    The Chair Club
                  </p>

                  <h2 className="mt-5 text-4xl font-black">
                    Book your next cut today.
                  </h2>

                  <p className="mt-5 leading-8 text-stone-300">
                    Walk-ins welcome. Appointments recommended. Professional
                    grooming for everyday confidence.
                  </p>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                      <p className="font-black">Open Tuesday - Saturday</p>
                      <p className="mt-2 text-sm text-stone-400">
                        10:00 AM - 7:00 PM
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                      <p className="font-black">Located In Cincinnati</p>
                      <p className="mt-2 text-sm text-stone-400">
                        Demo location only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-amber-300">
                Gallery
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Show the work before customers ever walk in.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-300">
                A strong gallery helps every customer see the quality, style,
                atmosphere, and professionalism of the shop before booking.
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
                    alt="Diverse barbershop demo gallery"
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

          <section className="mt-28">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-amber-300">
                Services
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Simple pricing customers can understand.
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl"
                >
                  <h3 className="text-2xl font-black">{service.name}</h3>

                  <p className="mt-5 text-4xl font-black text-amber-300">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-28 grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">
                Booking
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Appointment-ready layout
              </h3>

              <p className="mt-5 leading-8 text-stone-300">
                A barbershop website can connect customers directly to booking,
                phone, Instagram, or contact options.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">
                Gallery
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Show the quality of the work
              </h3>

              <p className="mt-5 leading-8 text-stone-300">
                Showcase fades, beard work, transformations, shop photos, and
                client results.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">
                Trust
              </p>

              <h3 className="mt-5 text-3xl font-black">
                Make the shop look established
              </h3>

              <p className="mt-5 leading-8 text-stone-300">
                A polished website helps a barbershop look organized,
                professional, and easier to book.
              </p>
            </div>
          </section>

          <section className="mt-28 rounded-[3rem] border border-amber-300/20 bg-amber-300/10 p-10 text-center shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-amber-300">
              Demo Website Concept
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black md:text-6xl">
              This is the type of page that helps a local barbershop stand out.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              Demo pages like this help business owners visualize what their own
              website could look like before starting a project.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-amber-300 px-8 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-amber-200"
            >
              Start My Website Project
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}