import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "../../animations/variants";
import { statistics } from "../../data/statistics";
import GlassCard from "../Common/GlassCard";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";

const SafeCountUp = typeof CountUp === "function" ? CountUp : (CountUp.default || CountUp);

function StatCard({ stat, inView, index }) {
  return (
    <motion.div variants={fadeUp}>
      <GlassCard variant="dark" className="p-6 text-center sm:p-8">
        <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {inView ? (
            <SafeCountUp
              start={0}
              end={stat.value}
              duration={2.5}
              delay={index * 0.15}
              suffix={stat.suffix}
              separator=","
              useEasing
            />
          ) : (
            <span>0{stat.suffix}</span>
          )}
        </p>
        <p className="mt-3 text-xs font-medium text-slate-400 sm:text-sm">
          {stat.label}
        </p>
      </GlassCard>
    </motion.div>
  );
}

export default function Statistics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionWrapper id="statistics" variant="dark">
      <SectionHeading
        dark
        badge="Our Impact"
        title="Numbers That"
        highlight="Speak"
        subtitle="Real outcomes from real students — backed by data, not promises"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
      >
        {statistics.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} inView={inView} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
