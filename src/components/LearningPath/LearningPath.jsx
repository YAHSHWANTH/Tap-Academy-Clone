import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeLeft, fadeRight } from "../../animations/variants";
import { learningSteps } from "../../data/learningPath";
import GlassCard from "../Common/GlassCard";
import IconCircle from "../Common/IconCircle";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";

export default function LearningPath() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionWrapper id="learning-path" variant="dark">
      <SectionHeading
        dark
        badge="Your Journey"
        title="Structured"
        highlight="Learning Path"
        subtitle="A proven 120-day roadmap from fundamentals to your first tech job"
      />

      <div ref={ref} className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 sm:left-8" />

        <div className="space-y-6 sm:space-y-8">
          {learningSteps.map((step, index) => {
            const Variant = index % 2 === 0 ? fadeLeft : fadeRight;

            return (
              <motion.div
                key={step.step}
                variants={Variant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-4 sm:gap-6 md:gap-8"
              >
                <div className="relative z-10 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-sm font-bold text-white shadow-glow-purple sm:h-14 sm:w-14 sm:text-base"
                  >
                    {step.step}
                  </motion.div>
                </div>

                <GlassCard variant="dark" className="flex-1 p-5 sm:p-8">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <IconCircle icon={step.icon} size="sm" />
                      <h3 className="text-base font-bold text-white sm:text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-semibold text-pink-300">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>

                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? { width: `${((index + 1) / learningSteps.length) * 100}%` }
                          : { width: 0 }
                      }
                      transition={{ delay: 0.5 + index * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                    />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
