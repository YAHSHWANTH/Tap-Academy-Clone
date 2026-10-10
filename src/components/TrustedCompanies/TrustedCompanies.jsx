import { companies } from "../../data/companies";

function LogoCard({ company }) {
  return (
    <div className="mx-3 flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 hover:shadow-glow-purple sm:mx-4 sm:px-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-sm font-bold text-white">
        {company.initials}
      </div>
      <span className="whitespace-nowrap text-sm font-semibold text-slate-300">
        {company.name}
      </span>
    </div>
  );
}

export default function TrustedCompanies() {
  const doubled = [...companies, ...companies];

  return (
    <section id="trusted" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20">
      <div className="aurora-bg-dark absolute inset-0" />

      <div className="relative z-10 mb-10 text-center px-4">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
          Our Students Are Placed In{" "}
          <span className="gradient-text">Top Companies</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
          Join the ranks of our successful alumni working as industry leaders
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent sm:w-28" />

        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((company, i) => (
            <LogoCard key={`${company.name}-${i}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
