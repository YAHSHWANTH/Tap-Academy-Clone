import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "../../animations/variants";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
