const partners = [
  {
    name: "ACEing Autism Dallas",
    type: "Community Partner",
    description:
      "Partnered on tennis programming and community initiatives supporting athletes with autism.",
  },
  {
    name: "Wingstop",
    type: "Corporate Partner",
    description:
      "Supported fundraising efforts and community events through sponsorship and organizational collaboration.",
  },
  {
    name: "Sprouts Farmers Market",
    type: "Corporate Partner",
    description:
      "Contributed to community fundraising initiatives and event support for MKA Tennis programming.",
  },
  {
    name: "Costco Wholesale",
    type: "Corporate Partner",
    description:
      "Supported fundraising and community outreach initiatives through donations and collaborative engagement.",
  },
];

export default function PartnersPage() {
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

            <a href="/partners" className="font-semibold text-green-700">
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
            Partnerships
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Building impact together.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MKA Tennis has worked with nonprofit and corporate organizations to
            expand community programming, support fundraising initiatives, and
            increase access to tennis.
          </p>
        </div>
      </section>

      {/* PARTNERS GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                {partner.type}
              </p>

              <h2 className="mt-3 text-3xl font-bold">{partner.name}</h2>

              <p className="mt-4 leading-7 text-slate-600">
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-4xl font-bold">7+</p>
              <p className="mt-2 text-slate-600">Partner Organizations</p>
            </div>

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
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-green-700">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-100">
            Work With Us
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Interested in partnering with MKA Tennis?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-green-50">
            We collaborate with organizations that want to support youth
            athletics, community programming, charitable initiatives, and
            accessible tennis.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-green-800"
          >
            Contact Us
          </a>
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