import Image from "next/image";
import { ReservationForm } from "./reservation-form";

const menu = [
  {
    title: "Antipasti",
    items: [
      { name: "Burrata e pomodoro", desc: "Creamy burrata, heirloom tomatoes, basil oil", price: "16" },
      { name: "Carpaccio di manzo", desc: "Thin-sliced beef, arugula, capers, lemon", price: "18" },
      { name: "Bruschetta mista", desc: "Grilled bread, ricotta, olive tapenade, roasted peppers", price: "14" },
    ],
  },
  {
    title: "Primi",
    items: [
      { name: "Tagliatelle al ragù", desc: "Slow-braised beef ragù, Parmigiano", price: "24" },
      { name: "Risotto ai funghi", desc: "Carnaroli rice, porcini, white wine, thyme", price: "22" },
      { name: "Spaghetti alle vongole", desc: "Manila clams, garlic, parsley, white wine", price: "26" },
    ],
  },
  {
    title: "Secondi",
    items: [
      { name: "Osso buco alla milanese", desc: "Braised veal shank, gremolata, saffron risotto", price: "38" },
      { name: "Branzino in crosta", desc: "Herb-crusted sea bass, citrus fennel salad", price: "34" },
      { name: "Pollo alla cacciatora", desc: "Free-range chicken, olives, tomatoes, rosemary", price: "28" },
    ],
  },
  {
    title: "Dolci",
    items: [
      { name: "Tiramisù della casa", desc: "Espresso-soaked ladyfingers, mascarpone", price: "12" },
      { name: "Panna cotta", desc: "Vanilla cream, seasonal berry compote", price: "11" },
      { name: "Cannoli siciliani", desc: "Crisp shells, ricotta, pistachio, chocolate", price: "13" },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Bella Vita
          </a>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            <a
              href="#menu"
              className="text-sm font-medium tracking-wide text-stone-200 transition hover:text-white"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-sm font-medium tracking-wide text-stone-200 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#reserve"
              className="rounded-full bg-amber-500/90 px-5 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Reserve
            </a>
          </nav>

          <details className="relative md:hidden">
            <summary
              className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40"
              aria-label="Open menu"
            >
              <span className="sr-only">Menu</span>
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-stone-950/95 py-2 shadow-xl backdrop-blur-md">
              <a href="#menu" className="block px-4 py-3 text-sm text-stone-100 hover:bg-white/5">
                Menu
              </a>
              <a href="#about" className="block px-4 py-3 text-sm text-stone-100 hover:bg-white/5">
                About
              </a>
              <a href="#reserve" className="block px-4 py-3 text-sm font-semibold text-amber-400 hover:bg-white/5">
                Reserve
              </a>
              <a href="#contact" className="block px-4 py-3 text-sm text-stone-100 hover:bg-white/5">
                Visit
              </a>
            </div>
          </details>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[100dvh] items-end justify-center overflow-hidden pb-16 pt-32 sm:items-center sm:pb-24 sm:pt-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2400&q=80"
            alt="Italian dishes and wine on a rustic wooden table"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-900/30"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/90 sm:text-sm">
              Authentic Italian · Est. 1998
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              La dolce vita, <span className="text-amber-100">served nightly</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-stone-200 sm:text-lg">
              Handmade pasta, seasonal produce, and wines from small Italian growers—crafted with care in the heart of
              the city.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href="#menu"
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-900/20 transition hover:bg-amber-400 sm:w-auto"
              >
                View the menu
              </a>
              <a
                href="#reserve"
                className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10 sm:w-auto"
              >
                Book a table
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="scroll-mt-24 border-t border-stone-200 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Menu</p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-stone-900 sm:text-5xl">A taste of Italy</h2>
              <p className="mt-4 text-stone-600 sm:text-lg">
                Our kitchen follows the rhythms of the seasons—simple ingredients, bold flavors, and recipes passed down
                through generations.
              </p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              {menu.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-stone-100 bg-stone-50/80 p-8 shadow-sm shadow-stone-200/40"
                >
                  <h3 className="font-display text-2xl font-semibold text-stone-900">{block.title}</h3>
                  <div className="mt-2 h-px w-12 bg-amber-600/80" />
                  <ul className="mt-8 space-y-8">
                    {block.items.map((item) => (
                      <li key={item.name} className="flex flex-col gap-1 border-b border-stone-200/80 pb-8 last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <div>
                          <p className="font-medium text-stone-900">{item.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-stone-600">{item.desc}</p>
                        </div>
                        <p className="shrink-0 font-display text-lg font-semibold text-amber-800">${item.price}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-stone-100 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-stone-900/10">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
                alt="Chef preparing fresh pasta in an open kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Our story</p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-stone-900 sm:text-5xl">Family, fire, and flavor</h2>
              <p className="mt-6 leading-relaxed text-stone-600">
                Bella Vita began as a small trattoria with a wood-fired oven and a handful of tables. Today, we still
                knead our pasta by hand, source olive oil from a single estate in Tuscany, and welcome every guest like
                family.
              </p>
              <p className="mt-4 leading-relaxed text-stone-600">
                Whether you are celebrating something special or sharing a quiet weeknight meal, we invite you to slow
                down, pour a glass, and savor the moment.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-stone-200 pt-10 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500">Covers</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-stone-900">72</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500">Wines</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-stone-900">120+</dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500">Since</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-stone-900">1998</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="reserve" className="scroll-mt-24 border-t border-stone-200 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Reservations</p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-stone-900 sm:text-5xl">
                  Reserve your table
                </h2>
                <p className="mt-4 text-pretty text-stone-600 sm:text-lg">
                  Share an evening with us—tell us when you would like to dine, and our team will follow up to confirm
                  your booking.
                </p>
                <div className="mt-10 hidden h-px w-16 bg-amber-600/80 lg:block" aria-hidden />
                <p className="mt-8 hidden text-sm leading-relaxed text-stone-500 lg:block">
                  For parties over twelve, private dining, or special occasions, please call{" "}
                  <a className="font-medium text-amber-800 underline-offset-4 transition hover:underline" href="tel:+12125550148">
                    +1 (212) 555-0148
                  </a>
                  .
                </p>
              </div>
              <ReservationForm />
            </div>
            <p className="mt-10 text-center text-sm text-stone-500 lg:hidden">
              Parties over twelve or private dining? Call{" "}
              <a className="font-medium text-amber-800" href="tel:+12125550148">
                +1 (212) 555-0148
              </a>
              .
            </p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-stone-950 py-20 text-stone-100 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400/90">Visit</p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">We would love to host you</h2>
                <p className="mt-4 max-w-md text-stone-400">
                  Reservations recommended on weekends. Walk-ins welcome at the bar when space allows.
                </p>
                <address className="mt-10 not-italic">
                  <p className="font-medium text-white">Bella Vita</p>
                  <p className="mt-3 text-stone-300">
                    284 Mercer Street
                    <br />
                    New York, NY 10012
                  </p>
                  <p className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Phone</span>
                    <br />
                    <a className="text-lg text-amber-200 transition hover:text-amber-100" href="tel:+12125550148">
                      +1 (212) 555-0148
                    </a>
                  </p>
                </address>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
                <h3 className="font-display text-2xl font-semibold text-white">Hours</h3>
                <ul className="mt-8 space-y-4 text-stone-300">
                  <li className="flex justify-between gap-4 border-b border-white/10 pb-4">
                    <span>Monday — Thursday</span>
                    <span className="text-right text-white">5:00 pm — 10:00 pm</span>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-white/10 pb-4">
                    <span>Friday — Saturday</span>
                    <span className="text-right text-white">5:00 pm — 11:00 pm</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span className="text-right text-white">4:00 pm — 9:00 pm</span>
                  </li>
                </ul>
                <p className="mt-8 text-sm text-stone-500">
                  Private dining for up to 24 guests. Inquire by phone for availability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 bg-stone-950 py-10 text-center text-sm text-stone-500">
        <p className="font-display text-lg text-stone-400">Bella Vita</p>
        <p className="mt-2">© {new Date().getFullYear()} Bella Vita. A fictional restaurant for demonstration.</p>
      </footer>
    </div>
  );
}
