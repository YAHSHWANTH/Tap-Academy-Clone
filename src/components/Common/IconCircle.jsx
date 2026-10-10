import { motion } from "framer-motion";

export default function IconCircle({ icon: Icon, className = "", size = "md" }) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };
  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-7 w-7",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: 8 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg shadow-purple-500/30 ${sizes[size]} ${className}`}
    >
      <Icon className={`text-white ${iconSizes[size]}`} />
    </motion.div>
  );
}
