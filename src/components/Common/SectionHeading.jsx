import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "../../animations/variants";
import GradientText from "./GradientText";

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  dark = true,
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={`mb-16 max-w-3xl sm:mb-20 ${alignClass}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1 }}
          className={`mb-5 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
            dark
              ? "border-pink-500/30 bg-pink-500/10 text-pink-300"
              : "border-pink-500/30 bg-pink-500/10 text-pink-500"
          }`}
        >
          {badge}
        </motion.span>
      )}
      <h2
        className={`text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl xl:text-[3.25rem] ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}{" "}
        {highlight && <GradientText>{highlight}</GradientText>}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg lg:text-xl ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
