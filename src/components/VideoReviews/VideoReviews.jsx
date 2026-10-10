import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeUp } from "../../animations/variants";
import { videoReviews } from "../../data/videoReviews";
import GlassCard from "../Common/GlassCard";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";
import { useModal } from "../../context/ModalContext";

export default function VideoReviews() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { openVideo } = useModal();

  return (
    <SectionWrapper id="video-reviews" variant="dark">
      <SectionHeading
        dark
        badge="Video Reviews"
        title="Student"
        highlight="Video Reviews"
        subtitle="Hear directly from our students about their journey and success with TAP Academy"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {videoReviews.map((video) => (
          <motion.div key={video.title} variants={fadeUp}>
            <GlassCard onClick={() => openVideo(video.videoId)} variant="dark" className="group cursor-pointer overflow-hidden !p-0">
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-500/30">
                  <Play className="h-7 w-7 fill-white text-white" />
                </div>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/50 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
                  {video.duration}
                </span>
                <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-xs font-bold text-white">
                  {video.initials}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-bold text-white sm:text-base">
                  {video.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {video.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
