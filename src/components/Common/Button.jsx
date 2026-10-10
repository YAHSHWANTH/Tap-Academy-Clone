import { motion } from "framer-motion";

const variants = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50",
  secondary:
    "bg-white/80 text-purple-700 border-2 border-pink-400/60 backdrop-blur-sm hover:border-purple-500 hover:bg-purple-50 hover:text-purple-800 hover:shadow-premium",
  ghost:
    "bg-white/5 text-white border border-white/20 backdrop-blur-sm hover:border-pink-400/50 hover:bg-white/10 hover:shadow-glow-purple",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {variant === "primary" && (
        <motion.span
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
      {Icon && <Icon className="relative h-4 w-4" />}
      <span className="relative">{children}</span>
    </motion.button>
  );
}
