import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { loaderVariants } from "../../animations/variants";

export default function LoadingScreen({ onComplete }) {
  const [show, setShow] = useState(true);
  const handleComplete = useCallback(() => onComplete(), [onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) {
      const timer = setTimeout(handleComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [show, handleComplete]);

  if (!show) return null;

  return (
    <motion.div
      variants={loaderVariants}
      initial="hidden"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="aurora-bg-dark absolute inset-0" />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 30px rgba(236,72,153,0.3)",
              "0 0 60px rgba(168,85,247,0.5)",
              "0 0 30px rgba(236,72,153,0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500"
        >
          <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.7 3.3 3 6 3s6-1.3 6-3v-5" />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold tracking-tight text-white"
        >
          TAP
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-pink-300"
        >
          Academy
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-1 overflow-hidden rounded-full bg-white/10"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full bg-gradient-to-r from-pink-500 to-purple-500"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
