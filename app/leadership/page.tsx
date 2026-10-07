const founders = [
  {
    name: "Founder Name",
    role: "Founder",
    image: "/leadership/founder1.jpg",
    bio: "Helped establish MKA Tennis and shape the organization’s original mission around tennis, service, and community impact.",
  },
];

const presidents = [
  {
    name: "Omkar Vasa",
    role: "Co-President",
    image: "/leadership/Omkar.jpeg",
    bio: "Leads organizational strategy, fundraising, partnerships, tournament operations, and long-term growth for MKA Tennis.",
  },
  {
    name: "Co-President Name",
    role: "Co-President",
    image: "/leadership/copresident2.jpg",
    bio: "Supports organization-wide leadership, event planning, outreach, partnerships, and volunteer coordination.",
  },
];

const cabinet = [
  {
    name: "Cabinet Member",
    role: "Treasurer",
    image: "/leadership/treasurer.jpg",
  },
  {
    name: "Cabinet Member",
    role: "Outreach Chair",
    image: "/leadership/outreach.jpg",
  },
  {
    name: "Cabinet Member",
    role: "Tournament Director",
    image: "/leadership/tournament-director.jpg",
  },
  {
    name: "Cabinet Member",
    role: "Operations Chair",
    image: "/leadership/operations.jpg",
  },
];

const members = [
  {
    name: "Member Name",
    image: "/leadership/member1.jpg",
  },
  {
    name: "Member Name",
    image: "/leadership/member2.jpg",
  },
  {
    name: "Member Name",
    image: "/leadership/member3.jpg",
  },
  {
    name: "Member Name",
    image: "/leadership/member4.jpg",
  },
];

export default function LeadershipPage() {
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
            <a href="/about" className="transition hover:text-green-700">
              About
            </a>

            <a href="/leadership" className="font-semibold text-green-700">
              Leadership
            </a>

            <a href="/events" className="transition hover:text-green-700">
              Events
            </a>

            <a href="/partners" className="transition hover:text-green-700">
              Partners
            </a>

            <a href="/contact" className="transition hover:text-green-700">
              Contact
            </a>

            <a
              href="/register"
              className="rounded-full bg-green-700 px-5 py-2.5 text-white transition hover:bg-green-800"
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
            Our Team
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            The people behind MKA Tennis.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MKA Tennis is led by students who organize tournaments, manage
            partnerships, coordinate volunteers, support fundraising, and help
            expand access to tennis throughout the community.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
            Founders
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Where MKA started.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {founders.map((person) => (
            <article
              key={`${person.name}-${person.image}`}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={person.image}
                alt={person.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold">{person.name}</h3>

                <p className="mt-1 font-semibold text-green-700">
                  {person.role}
                </p>

                <p className="mt-4 leading-7 text-slate-600">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CO-PRESIDENTS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Executive Leadership
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Co-Presidents
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {presidents.map((person) => (
              <article
                key={`${person.name}-${person.image}`}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-96 w-full object-cover"
                />

                <div className="p-7">
                  <h3 className="text-2xl font-bold">{person.name}</h3>

                  <p className="mt-1 font-semibold text-green-700">
                    {person.role}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CABINET */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
            Cabinet
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Organizational leadership.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Our cabinet supports the day-to-day operation of MKA Tennis across
            events, fundraising, outreach, partnerships, and internal
            organization.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cabinet.map((person) => (
            <article
              key={`${person.name}-${person.role}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={person.image}
                alt={person.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="mt-1 font-medium text-green-700">{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MEMBERS */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
              Members & Volunteers
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              The team that makes it happen.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              MKA Tennis is supported by volunteers and members who help coach
              players, run events, support fundraising, and grow community
              outreach.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {members.map((person) => (
              <article
                key={`${person.name}-${person.image}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    MKA Tennis Member
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section className="bg-green-700">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 text-center text-white sm:grid-cols-2 lg:grid-cols-4">
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