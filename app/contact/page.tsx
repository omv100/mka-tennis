export default function ContactPage() {
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

            <a href="/events" className="hover:text-green-700">
              Events
            </a>

            <a href="/partners" className="hover:text-green-700">
              Partners
            </a>

            <a href="/contact" className="font-semibold text-green-700">
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
            Contact Us
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Connect with MKA Tennis.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Reach out about tournaments, tennis lessons, volunteering,
            sponsorships, partnerships, or community events.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* CONTACT METHODS */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              We'd love to hear from you.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Whether you want to play, volunteer, sponsor an event, or partner
              with MKA Tennis, reach out through any of the methods below.
            </p>

            <div className="mt-10 space-y-5">
              {/* EMAIL */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                  Email
                </p>

                <a
                  href="mailto:mkatennis@example.com"
                  className="mt-2 block text-xl font-semibold hover:text-green-700"
                >
                  mkatennis@example.com
                </a>

                <p className="mt-2 text-sm text-slate-500">
                  General questions, partnerships, volunteering, and event
                  inquiries.
                </p>
              </div>

              {/* INSTAGRAM */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                  Instagram
                </p>

                <a
                  href="https://instagram.com/YOUR_HANDLE"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-xl font-semibold hover:text-green-700"
                >
                  @YOUR_HANDLE
                </a>

                <p className="mt-2 text-sm text-slate-500">
                  Follow MKA Tennis for tournament updates, event photos, and
                  announcements.
                </p>
              </div>

              {/* LOCATION */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                  Location
                </p>

                <p className="mt-2 text-xl font-semibold">Plano, Texas</p>

                <p className="mt-2 text-sm text-slate-500">
                  Serving players and communities throughout the North Dallas
                  area.
                </p>
              </div>

              {/* OPPORTUNITIES */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                  Opportunities
                </p>

                <p className="mt-2 font-semibold">
                  Tournaments • Lessons • Volunteering • Sponsorships •
                  Partnerships
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
              Send a Message
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Tell us how we can help.
            </h2>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  What are you contacting us about?
                </label>

                <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700">
                  <option>General Question</option>
                  <option>Tournament</option>
                  <option>Tennis Lessons</option>
                  <option>Volunteer</option>
                  <option>Partnership</option>
                  <option>Sponsorship</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800"
              >
                Send Message
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-slate-500">
              Online message submission will be connected soon.
            </p>
          </div>
        </div>
      </section>

      {/* REGISTER CTA */}
      <section className="bg-green-700">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to get on the court?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-green-50">
            View upcoming tournaments and register directly through the MKA
            Tennis platform.
          </p>

          <a
            href="/register"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-green-800 hover:bg-green-50"
          >
            Register for an Event
          </a>
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