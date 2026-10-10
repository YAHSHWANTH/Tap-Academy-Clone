import { motion } from "framer-motion";
import { ArrowRight, Clock, Download } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "../../animations/variants";
import { courses } from "../../data/courses";
import Button from "../Common/Button";
import GlassCard from "../Common/GlassCard";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";
import { useModal } from "../../context/ModalContext";

export default function Courses() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { openForm } = useModal();

  return (
    <SectionWrapper id="courses" variant="white">
      <SectionHeading
        badge="Our Programs"
        title="Choose Your"
        highlight="Career Path"
        subtitle="Industry-aligned programs designed to get you job-ready in months, not years"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-6 sm:gap-8 lg:grid-cols-3"
      >
        {courses.map((course) => (
          <motion.div key={course.id} variants={fadeUp}>
            <GlassCard variant="solid" hover className="group flex h-full flex-col overflow-hidden !p-0">
              <div className={`bg-gradient-to-r ${course.color} px-5 py-5 sm:px-6 sm:py-6`}>
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {course.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                  {course.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-5 text-sm leading-relaxed text-slate-300">
                  {course.description}
                </p>

                <div className="mb-5 flex items-center gap-2 text-sm text-slate-400">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span>{course.duration}</span>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-t border-white/10 pt-5">
                  <div className="flex flex-col gap-3">
                    <Button onClick={openForm} className="w-full justify-center">
                      Book Free Demo
                    </Button>
                    <motion.button
                      onClick={openForm}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-pink-400/50 hover:bg-white/10 hover:shadow-glow-purple"
                    >
                      <Download className="h-4 w-4" />
                      Download Syllabus
                    </motion.button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14 text-center sm:mt-16"
      >
        <motion.button
          onClick={openForm}
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 transition-colors hover:text-purple-400"
        >
          View All Programs
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </SectionWrapper>
  );
}
