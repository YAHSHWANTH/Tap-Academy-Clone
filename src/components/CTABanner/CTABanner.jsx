import { motion } from "framer-motion";
import Button from "../Common/Button";
import { useModal } from "../../context/ModalContext";

export default function CTABanner({
  title = "Ready to Start Your Tech Career Journey?",
  subtitle = "Talk to our career advisor for FREE and get a personalized roadmap to land your dream tech job.",
  buttonText = "Book Free Demo",
  variant = "gradient",
}) {
  const { openForm } = useModal();
  const styles = {
    gradient:
      "bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-shimmer-bg border-0",
    dark: "bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10",
  };

  return (
    <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`overflow-hidden rounded-3xl p-8 text-center shadow-premium-lg sm:p-12 ${styles[variant]}`}
        >
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={openForm} className="w-full sm:w-auto">{buttonText}</Button>
            <motion.button
              onClick={openForm}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              className="w-full rounded-xl border-2 border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
            >
              Request a Call Back
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
