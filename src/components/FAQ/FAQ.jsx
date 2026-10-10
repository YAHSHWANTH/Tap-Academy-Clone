import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { faqCategories, faqs } from "../../data/faq";
import Button from "../Common/Button";
import GlassCard from "../Common/GlassCard";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";
import { useModal } from "../../context/ModalContext";

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <GlassCard variant="light" hover={false} className="overflow-hidden !rounded-2xl">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/5 sm:px-6"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-white sm:text-base">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 shrink-0 text-pink-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-300 sm:px-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);
  const { openForm } = useModal();

  const currentFaqs = faqs[activeCategory];

  return (
    <SectionWrapper id="faq" variant="light">
      <SectionHeading
        badge="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Need help with something? Here are our most frequently asked questions."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {faqCategories.map((cat) => (
          <motion.button
            key={cat.id}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => {
              setActiveCategory(cat.id);
              setOpenIndex(0);
            }}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5 ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                : "border border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm hover:border-pink-500/30 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat.label}
          </motion.button>
        ))}
      </div>

      <div className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
        {currentFaqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <AccordionItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center shadow-premium backdrop-blur-sm sm:mt-20 sm:p-12"
      >
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          Still Have Questions?
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
          Talk to our career advisor for free and get a personalized roadmap to
          land your dream tech job.
        </p>
        <div className="mt-8">
          <Button onClick={openForm} icon={MessageCircle}>Contact Support</Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
