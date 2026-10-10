import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { platformTabs } from "../../data/platformDemo";
import GlassCard from "../Common/GlassCard";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";
import dashboardImg from "../../assets/dashboard.png";
import assignmentsImg from "../../assets/assignments.png";
import editorImg from "../../assets/editor.png";
import companyQsImg from "../../assets/company_qs.png";
import aiBotImg from "../../assets/ai_bot.png";
import testsImg from "../../assets/tests.png";

const tabImages = {
  dashboard: dashboardImg,
  assignments: assignmentsImg,
  editor: editorImg,
  questions: companyQsImg,
  bot: aiBotImg,
  tests: testsImg,
};

export default function PlatformDemo() {
  const [activeTab, setActiveTab] = useState(platformTabs[0].id);
  const current = platformTabs.find((t) => t.id === activeTab) || platformTabs[0];

  return (
    <SectionWrapper id="platform" variant="white">
      <SectionHeading
        badge="Learning Platform"
        title="Experience the"
        highlight="TAP Academy Platform"
        subtitle="Explore our features through interactive tabs and discover how our platform transforms students into industry-ready professionals"
      />

      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {platformTabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-4 sm:text-sm ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                  : "border border-white/10 bg-white/5 text-slate-300 backdrop-blur-sm hover:border-pink-500/30 hover:bg-white/10 hover:text-white"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard variant="light" hover={false} className="overflow-hidden !p-0">
              <div className="grid lg:grid-cols-2">
                <div className="flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-5 sm:p-6 lg:p-8">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl"
                  >
                    {/* Browser Mockup Header */}
                    <div className="flex items-center gap-1.5 border-b border-white/5 bg-slate-900/50 px-4 py-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
                    </div>
                    <img
                      src={tabImages[current.id]}
                      alt={current.title}
                      className="w-full h-auto object-cover max-h-[220px] md:max-h-[300px] transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </motion.div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {current.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {current.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {current.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
