const partners = [
  "ACEing Autism Dallas",
  "Wingstop",
  "Sprouts Farmers Market",
  "Costco Wholesale",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="block">
            <p className="text-xl font-bold tracking-tight">MKA Tennis</p>
            <p className="text-xs text-slate-500">Tennis With Impact</p>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="/about" className="hover:text-green-700">
              About
            </a>

            <a href="/leadership" className="hover:text-green-700">
              Leadership
            </a>

            <a href="/events" className="hover:text-green-700">
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
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Tennis With Impact
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Building better players.
              <span className="block text-green-400">
                Strengthening communities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              MKA Tennis combines coaching, tournaments, community outreach,
              and charitable initiatives to make tennis more accessible while
              creating meaningful impact beyond the court.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/register"
                className="rounded-full bg-green-500 px-7 py-3.5 font-semibold text-slate-950 hover:bg-green-400"
              >
                Register for an Event
              </a>

              <a
                href="/about"
                className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold hover:border-white"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="/home/mka-hero.jpeg"
              alt="MKA Tennis"
              className="h-[460px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-4xl font-bold">$11K+</p>
            <p className="mt-2 text-slate-600">Raised</p>
          </div>

          <div>
            <p className="text-4xl font-bold">50+</p>
            <p className="mt-2 text-slate-600">Children Taught</p>
          </div>

          <div>
            <p className="text-4xl font-bold">15</p>
            <p className="mt-2 text-slate-600">Volunteers</p>
          </div>

          <div>
            <p className="text-4xl font-bold">7+</p>
            <p className="mt-2 text-slate-600">Partners</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              About MKA
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              More than a tennis program.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              MKA Tennis is a student-led organization that uses tennis as a
              platform for mentorship, accessibility, community engagement, and
              charitable giving.
            </p>

            <p>
              Our programs serve players across a wide range of ages and skill
              levels while supporting youth coaching, fundraising initiatives,
              tournaments, and community partnerships.
            </p>

            <a
              href="/about"
              className="inline-block font-semibold text-green-700 hover:text-green-800"
            >
              Learn more about MKA →
            </a>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP PLACEHOLDERS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex h-72 items-center justify-center rounded-3xl border border-slate-200 bg-white text-center text-slate-400 shadow-sm">
              Event photo coming soon
            </div>

            <div className="flex h-72 items-center justify-center rounded-3xl border border-slate-200 bg-white text-center text-slate-400 shadow-sm">
              Community photo coming soon
            </div>

            <div className="flex h-72 items-center justify-center rounded-3xl border border-slate-200 bg-white text-center text-slate-400 shadow-sm">
              Partnership photo coming soon
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PREVIEW */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                Our Team
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Led by students. Built for the community.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                MKA Tennis is driven by student leaders and volunteers who
                coordinate coaching, fundraising, events, sponsorships, and
                community outreach.
              </p>

              <a
                href="/leadership"
                className="mt-8 inline-block rounded-full bg-green-500 px-6 py-3 font-semibold text-slate-950 hover:bg-green-400"
              >
                Meet Our Leadership
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-7">
                <p className="text-3xl font-bold">Co-Presidents</p>
                <p className="mt-2 text-sm text-slate-300">
                  Leading organizational strategy and growth
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-7">
                <p className="text-3xl font-bold">Cabinet</p>
                <p className="mt-2 text-sm text-slate-300">
                  Managing outreach, events, and operations
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-7">
                <p className="text-3xl font-bold">Members</p>
                <p className="mt-2 text-sm text-slate-300">
                  Supporting coaching and community initiatives
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-7">
                <p className="text-3xl font-bold">Founders</p>
                <p className="mt-2 text-sm text-slate-300">
                  Building MKA from the ground up
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src="/events/paddles-with-purpose/courts-action.jpeg"
                alt="Paddles with Purpose"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
                Featured Event
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Paddles with Purpose
              </h2>

              <p className="mt-3 font-semibold text-green-700">
                April 27, 2024 • High Point Tennis Center
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                MKA Tennis partnered with ACEing Autism Dallas to bring
                together players, families, volunteers, and community partners
                through a charity pickleball tournament supporting ACEing
                Autism.
              </p>

              <a
                href="/events"
                className="mt-8 inline-block w-fit rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
              >
                View Event Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Community Partners
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Impact built through collaboration.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center font-semibold shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/partners"
              className="font-semibold text-green-700 hover:text-green-800"
            >
              View our partners →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white">
            Help us make an impact through tennis.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-green-50">
            Join an upcoming event, support our mission, or get involved with
            MKA Tennis.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-green-800"
            >
              Register for an Event
            </a>

            <a
              href="/contact"
              className="rounded-full border border-green-300 px-7 py-3.5 font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">MKA Tennis</p>
            <p className="mt-1">Tennis With Impact</p>
          </div>

          <p>© 2026 MKA Tennis</p>
        </div>
      </footer>
    </main>
  );
}