import { motion } from "framer-motion";
import { cardHover } from "../../animations/variants";

const variants = {
  light: "glass-card-dark hover-glow",
  dark: "glass-card-dark hover-glow",
  solid: "glass-card-dark hover-glow",
};

export default function GlassCard({
  children,
  variant = "light",
  className = "",
  hover = true,
  ...props
}) {
  const base = variants[variant] || variants.light;

  if (!hover) {
    return <div className={`${base} ${className}`} {...props}>{children}</div>;
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className={`${base} transition-colors duration-500 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
