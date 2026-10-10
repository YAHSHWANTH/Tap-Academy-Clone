import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "../../animations/variants";
import { tools } from "../../data/tools";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";

export default function Tools() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const doubled = [...tools, ...tools];

  return (
    <SectionWrapper id="tools" variant="dark">
      <SectionHeading
        dark
        badge="Tech Stack"
        title="Master"
        highlight="Industry Tools"
        subtitle="Build real-world projects with the most in-demand technologies"
      />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-950 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-950 to-transparent sm:w-24" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex animate-marquee gap-4 sm:gap-6"
          style={{ width: "max-content" }}
        >
          {doubled.map((tool, i) => (
            <motion.div
              key={`${tool.name}-${i}`}
              whileHover={{ scale: 1.08, y: -4 }}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 hover:shadow-glow-purple sm:px-6 sm:py-4"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color} text-xs font-bold text-white`}>
                {tool.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-sm font-semibold text-white">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
