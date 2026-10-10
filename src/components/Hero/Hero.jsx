import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle2,
  Play,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { fadeLeft, fadeRight, staggerContainer } from "../../animations/variants";
import Button from "../Common/Button";
import FloatingBlobs from "../Common/FloatingBlobs";
import GlassCard from "../Common/GlassCard";
import GradientText from "../Common/GradientText";
import { useModal } from "../../context/ModalContext";

const highlights = [
  "Experts-led live classes",
  "3000+ Hiring Partners",
  "Unlimited interview opportunities",
];

const floatingCards = [
  {
    icon: TrendingUp,
    label: "35 LPA",
    sub: "Highest Package",
    position: "top-4 left-0 sm:top-8 sm:-left-4 lg:-left-8",
    delay: 0,
  },
  {
    icon: Users,
    label: "15,000+",
    sub: "Students Placed",
    position: "top-1/3 right-0 sm:-right-4 lg:-right-8",
    delay: 0.5,
  },
  {
    icon: Star,
    label: "4.9/5",
    sub: "Student Rating",
    position: "bottom-12 left-2 sm:bottom-16 sm:-left-2 lg:-left-6",
    delay: 1,
  },
];

const profiles = [
  {
    name: "Devansh Gupta",
    role: "Software Engineer",
    company: "Amazon",
    package: "₹16.5 LPA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Sneha Reddy",
    role: "Full Stack Developer",
    company: "Microsoft",
    package: "₹14.0 LPA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Rohit Deshmukh",
    role: "Data Analyst",
    company: "Google",
    package: "₹12.5 LPA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Anjali Sen",
    role: "Backend Developer",
    company: "Goldman Sachs",
    package: "₹15.0 LPA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openForm, openVideo } = useModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % profiles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="aurora-bg-dark absolute inset-0" />
      <FloatingBlobs variant="dark" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pt-36">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div
              variants={fadeLeft}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-pink-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-300 sm:text-sm">
                Job Guarantee Program
              </span>
            </motion.div>

            <motion.h1
              variants={fadeLeft}
              className="text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Land a{" "}
              <GradientText>₹5 – 35 LPA</GradientText>
              <br />
              Job in{" "}
              <GradientText>120 Days</GradientText>
            </motion.h1>

            <motion.p
              variants={fadeLeft}
              className="mt-5 text-base text-slate-400 sm:text-lg"
            >
              or we keep training you{" "}
              <span className="font-semibold text-white">free</span>
              <span className="text-sm text-slate-500"> — terms apply</span>
            </motion.p>

            <motion.ul variants={fadeLeft} className="mt-8 space-y-3.5">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                    <CheckCircle2 className="h-4 w-4 text-pink-400" />
                  </div>
                  <span className="text-sm sm:text-base">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeLeft}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button onClick={openForm} icon={CalendarCheck} className="w-full px-6 py-3.5 text-base sm:w-auto">
                Book Your Seat
              </Button>
              <Button
                onClick={openVideo}
                variant="ghost"
                icon={Play}
                className="w-full border-pink-400/40 px-6 py-3.5 text-base sm:w-auto"
              >
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={fadeLeft}
              className="mt-8 flex flex-wrap items-center gap-2 text-sm text-slate-400"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span>
                <strong className="text-white">4.9/5</strong> from 15,000+ students
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative mx-auto aspect-square max-w-sm sm:max-w-md lg:max-w-lg">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-pink-500/20"
              />

              <div className="relative flex h-full items-center justify-center">
                <motion.div
                  animate={{ boxShadow: [
                    "0 0 60px rgba(168,85,247,0.2)",
                    "0 0 80px rgba(236,72,153,0.3)",
                    "0 0 60px rgba(168,85,247,0.2)",
                  ]}}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white/10 bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm sm:h-72 sm:w-72 lg:h-96 lg:w-96"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={profiles[activeIndex].image}
                        alt={profiles[activeIndex].name}
                        className="h-full w-full object-cover brightness-[0.85] contrast-[1.05]"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      <div className="absolute bottom-6 inset-x-0 mx-auto w-[85%] text-center sm:bottom-10 lg:bottom-12">
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="rounded-2xl border border-white/10 bg-slate-900/60 p-2.5 backdrop-blur-md shadow-lg sm:p-4"
                        >
                          <p className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                            {profiles[activeIndex].company}
                          </p>
                          <h4 className="mt-0.5 text-sm font-extrabold text-white sm:text-base">
                            {profiles[activeIndex].name}
                          </h4>
                          <p className="text-[10px] text-slate-300 sm:text-xs">
                            {profiles[activeIndex].role}
                          </p>
                          <div className="mt-1.5 inline-block rounded-lg bg-pink-500/20 px-2 py-0.5 text-[10px] font-bold text-pink-300">
                            {profiles[activeIndex].package}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>

              {floatingCards.map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8 + card.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute ${card.position} z-10 hidden sm:block`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4 + card.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <GlassCard variant="dark" className="flex items-center gap-3 px-4 py-3 shadow-glow-purple">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
                        <card.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{card.label}</p>
                        <p className="text-xs text-slate-400">{card.sub}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 grid grid-cols-3 gap-3 sm:hidden"
        >
          {floatingCards.map((card) => (
            <GlassCard key={card.label} variant="dark" hover={false} className="flex flex-col items-center gap-2 p-3 text-center">
              <card.icon className="h-4 w-4 text-pink-400" />
              <p className="text-xs font-bold text-white">{card.label}</p>
              <p className="text-[10px] text-slate-400">{card.sub}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
