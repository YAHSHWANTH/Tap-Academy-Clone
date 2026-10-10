import { motion } from "framer-motion";
import { Briefcase, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { mentors } from "../../data/mentors";
import GlassCard from "../Common/GlassCard";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";
import Button from "../Common/Button";
import { useModal } from "../../context/ModalContext";

export default function Mentors() {
  const { openForm } = useModal();
  return (
    <SectionWrapper id="mentors" variant="light">
      <SectionHeading
        badge="Expert Mentors"
        title="Our Mentors Will Guide You"
        highlight="From Day 1"
        subtitle="Learn directly from industry experts with experience at top tech companies"
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="!pb-12"
      >
        {mentors.map((mentor) => (
          <SwiperSlide key={mentor.name} className="!h-auto">
            <GlassCard variant="light" className="group h-full p-6 text-center sm:p-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-xl font-bold text-white shadow-glow-purple"
              >
                {mentor.initials}
              </motion.div>
              <h3 className="text-base font-bold text-white">{mentor.name}</h3>
              <p className="mt-1 text-xs font-medium text-pink-400">{mentor.role}</p>
              <div className="mt-3 flex items-center justify-center gap-1">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-slate-400">{mentor.experience}</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">{mentor.expertise}</p>
            </GlassCard>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 text-center">
        <Button onClick={openForm} icon={Briefcase}>Meet Our Mentors</Button>
      </div>
    </SectionWrapper>
  );
}
