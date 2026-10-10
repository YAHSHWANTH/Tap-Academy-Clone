import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "../../animations/variants";
import { whyChooseUs } from "../../data/whyChooseUs";
import GlassCard from "../Common/GlassCard";
import IconCircle from "../Common/IconCircle";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="why-choose-us" variant="light">
      <SectionHeading
        badge="Why Choose Us"
        title="The TAP Academy"
        highlight="Advantage"
        subtitle="What sets us apart from every other coding bootcamp in the market"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {whyChooseUs.map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <GlassCard variant="light" className="h-full p-6 sm:p-8">
              <IconCircle icon={item.icon} className="mb-5" />
              <h3 className="mb-2 text-base font-bold text-white sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
