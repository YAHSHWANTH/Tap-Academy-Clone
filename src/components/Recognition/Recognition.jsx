import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "../../animations/variants";
import { awards } from "../../data/recognition";
import GlassCard from "../Common/GlassCard";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";

export default function Recognition() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="recognition" variant="light">
      <SectionHeading
        badge="Accreditations"
        title="Recognized by"
        highlight="Industry Leaders"
        subtitle="Certified and recognized by international bodies and government of India"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6"
      >
        {awards.map((award) => (
          <motion.div key={award.name} variants={fadeUp}>
            <GlassCard variant="light" className="flex flex-col items-center gap-4 p-5 text-center sm:p-6 justify-between h-full">
              <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white p-2.5 transition-all duration-300">
                <img
                  src={award.logo}
                  alt={award.name}
                  className="h-full w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="mt-2">
                <p className="text-sm font-bold text-white">{award.name}</p>
                <p className="mt-0.5 text-xs text-slate-400">{award.label}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
