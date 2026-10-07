export default function AboutPage() {
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
            <a href="/about" className="font-semibold text-green-700">
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
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            About MKA Tennis
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Using tennis to create impact beyond the court.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            MKA Tennis is a student-led organization focused on combining
            coaching, competition, community outreach, and charitable
            initiatives to make tennis more accessible while supporting causes
            that matter.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Built around tennis, service, and community.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              MKA Tennis was created with the goal of using tennis as more than
              just a competitive sport. Through coaching, tournaments,
              fundraising, and community partnerships, the organization gives
              players opportunities to improve while contributing to charitable
              initiatives.
            </p>

            <p>
              Over the years, MKA Tennis has grown into a broader community
              program supported by student leaders and volunteers who help run
              events, provide instruction, manage partnerships, and expand
              outreach.
            </p>

            <p>
              Our programs serve players across a wide range of ages and skill
              levels, from young beginners to experienced adult competitors.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Our Mission
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight">
              Make tennis more accessible while using the sport to support the
              community.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Develop Players</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Provide accessible instruction for players of different ages,
                backgrounds, and skill levels.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Build Community</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Bring players together through tournaments, clinics, volunteer
                opportunities, and community events.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Give Back</h3>

              <p className="mt-4 leading-7 text-slate-600">
                Use coaching, partnerships, and fundraising to support
                charitable causes and meaningful community initiatives.
              </p>
            </div>
          </div>
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

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            From lessons to tournaments.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">Tennis Instruction</h3>

            <p className="mt-4 leading-7 text-slate-300">
              Coaching for players from ages 5 to 70, focused on technique,
              confidence, accessibility, and long-term development.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">Charity Tournaments</h3>

            <p className="mt-4 leading-7 text-slate-300">
              Competitive and community-based events that combine tennis with
              fundraising and charitable outreach.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">Youth Outreach</h3>

            <p className="mt-4 leading-7 text-slate-300">
              Programs designed to introduce younger players to tennis and make
              quality instruction more accessible.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">Community Partnerships</h3>

            <p className="mt-4 leading-7 text-slate-300">
              Collaborations with nonprofit and corporate partners including
              ACEing Autism Dallas, Wingstop, Sprouts Farmers Market, and Costco
              Wholesale.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Want to get involved with MKA Tennis?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Join an event, support our programs, or reach out to learn more
            about volunteering and partnerships.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white hover:bg-green-800"
            >
              Register for an Event
            </a>

            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-7 py-3.5 font-semibold hover:border-slate-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-400">
          <p className="font-semibold text-white">MKA Tennis</p>
          <p className="mt-1">© 2026 MKA Tennis</p>
        </div>
      </footer>
    </main>
  );
}