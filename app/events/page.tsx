const events = [
  {
    title: "Paddles with Purpose",
    date: "April 27, 2024",
    location: "High Point Tennis Center, Plano, TX",
    image: "/events/paddles-with-purpose/courts-wide.jpeg",
    description:
      "MKA Tennis partnered with ACEing Autism Dallas to host the first annual Paddles with Purpose charity pickleball tournament, bringing together players, families, and community partners while raising funds for ACEing Autism.",
    status: "Past Event",
  },
];

const otherEvents = [
  {
    title: "Youth Tennis Clinic",
    date: "Summer 2026",
    location: "Plano, TX",
    description:
      "A community clinic focused on accessible tennis instruction, fundamentals, confidence, and player development.",
    status: "Past Event",
  },
  {
    title: "MKA Fundraising Tournament",
    date: "2025",
    location: "Plano, TX",
    description:
      "A community tennis fundraiser supporting MKA Tennis charitable initiatives and local outreach.",
    status: "Past Event",
  },
  {
    title: "Upcoming MKA Tournament",
    date: "Coming Soon",
    location: "Plano, TX",
    description:
      "An upcoming community tournament supporting MKA Tennis programming, fundraising, and outreach efforts.",
    status: "Upcoming",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/">
            <p className="text-xl font-bold">MKA Tennis</p>
            <p className="text-xs text-slate-500">Tennis With Impact</p>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="/about" className="hover:text-green-700">
              About
            </a>

            <a href="/leadership" className="hover:text-green-700">
              Leadership
            </a>

            <a href="/events" className="font-semibold text-green-700">
              Events
            </a>

            <a href="/partners" className="hover:text-green-700">
              Partners
            </a>

            <a href="/contact" className="hover:text-green-700">
              Contact
            </a>

            <a
              href="/register"
              className="rounded-full bg-green-700 px-5 py-2.5 text-white hover:bg-green-800"
            >
              Register
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Events
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Compete, connect, and give back.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MKA Tennis events bring players and families together through
            competition, community outreach, and charitable partnerships.
          </p>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        {events.map((event) => (
          <article
            key={event.title}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-[460px] w-full object-cover"
            />

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700">
                  {event.status}
                </span>

                <p className="text-sm text-slate-500">{event.date}</p>
              </div>

              <h2 className="mt-5 text-4xl font-bold">{event.title}</h2>

              <p className="mt-2 text-base font-medium text-green-700">
                {event.location}
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {event.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* EVENT GALLERY */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Event Gallery
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Paddles with Purpose
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A look back at the players, volunteers, community partners, and
              families who helped make the event possible.
            </p>
          </div>

          {/* LARGE LANDSCAPE PHOTO */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/events/paddles-with-purpose/courts-action.jpeg"
              alt="Players competing during Paddles with Purpose"
              className="max-h-[520px] w-full object-cover"
            />
          </div>

          {/* SMALLER PHOTO GRID */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <img
                src="/events/paddles-with-purpose/participants.png"
                alt="Participants at Paddles with Purpose"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <img
                src="/events/paddles-with-purpose/aceing-table-1.jpeg"
                alt="ACEing Autism representatives at the event"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <img
                src="/events/paddles-with-purpose/aceing-table-2.jpeg"
                alt="ACEing Autism partnership at Paddles with Purpose"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <img
                src="/events/paddles-with-purpose/crowd.jpeg"
                alt="Spectators at Paddles with Purpose"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* POSTER */}
          <div className="mx-auto mt-8 max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <img
              src="/events/paddles-with-purpose/poster.jpeg"
              alt="Paddles with Purpose event poster"
              className="w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* MORE EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
            More Events
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Past and upcoming events.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore more MKA Tennis clinics, tournaments, fundraisers, and
            upcoming opportunities to get involved.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {otherEvents.map((event) => (
            <article
              key={`${event.title}-${event.date}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700">
                  {event.status}
                </span>

                <p className="text-sm text-slate-500">{event.date}</p>
              </div>

              <h3 className="mt-5 text-2xl font-bold">{event.title}</h3>

              <p className="mt-2 text-sm font-medium text-green-700">
                {event.location}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {event.description}
              </p>

              {event.status === "Upcoming" && (
                <a
                  href="/register"
                  className="mt-6 inline-block rounded-full bg-green-700 px-5 py-2.5 font-semibold text-white hover:bg-green-800"
                >
                  Register
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-green-700">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 text-center text-white sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-4xl font-bold">$11K+</p>
            <p className="mt-2 text-green-100">Raised</p>
          </div>

          <div>
            <p className="text-4xl font-bold">50+</p>
            <p className="mt-2 text-green-100">Children Taught</p>
          </div>

          <div>
            <p className="text-4xl font-bold">15</p>
            <p className="mt-2 text-green-100">Volunteers</p>
          </div>

          <div>
            <p className="text-4xl font-bold">7+</p>
            <p className="mt-2 text-green-100">Partners</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold">Join our next event.</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Register for upcoming tournaments, clinics, and community events
            through the MKA Tennis platform.
          </p>

          <a
            href="/register"
            className="mt-8 inline-block rounded-full bg-green-500 px-7 py-3.5 font-semibold text-slate-950 hover:bg-green-400"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-400">
          <p className="font-semibold text-white">MKA Tennis</p>
          <p className="mt-1">© 2026 MKA Tennis</p>
        </div>
      </footer>
    </main>
  );
}