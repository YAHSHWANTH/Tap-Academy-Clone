import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { placements } from "../../data/placements";

export default function PlacementsTicker() {
  const doubled = [...placements, ...placements];

  return (
    <section id="placements" className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-6">
      <div className="mb-4 flex items-center justify-center gap-2 px-4">
        <TrendingUp className="h-4 w-4 text-pink-400" />
        <span className="text-xs font-semibold uppercase tracking-widest text-pink-300 sm:text-sm">
          Recent Placements
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-slate-950 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-slate-950 to-transparent sm:w-20" />

        <div className="flex animate-marquee-slow gap-4 sm:gap-6" style={{ width: "max-content" }}>
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm sm:px-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-xs font-bold text-white">
                {item.name.split(" ")[0][0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-slate-400">
                  {item.role} @ {item.company}
                </p>
              </div>
              <span className="ml-2 rounded-full bg-pink-500/20 px-2.5 py-1 text-xs font-bold text-pink-300">
                {item.package}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
