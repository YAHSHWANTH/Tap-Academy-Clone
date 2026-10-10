import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";
import GlassCard from "../Common/GlassCard";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <SectionWrapper id="testimonials" variant="white">
      <SectionHeading
        badge="Success Stories"
        title="What Our"
        highlight="Students Say"
        subtitle="Real stories from learners who transformed their careers with TAP Academy"
      />

      <div className="relative px-2 sm:px-8">
        <motion.button
          ref={prevRef}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Previous testimonial"
          className="absolute -left-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 shadow-premium backdrop-blur-sm transition-all hover:border-pink-500/30 hover:bg-white/10 hover:text-white sm:flex sm:-left-5"
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        <motion.button
          ref={nextRef}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          aria-label="Next testimonial"
          className="absolute -right-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 shadow-premium backdrop-blur-sm transition-all hover:border-pink-500/30 hover:bg-white/10 hover:text-white sm:flex sm:-right-5"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="!pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name} className="!h-auto">
              <GlassCard variant="light" className="flex h-full flex-col p-6 sm:p-8">
                <Quote className="mb-4 h-7 w-7 text-pink-400 sm:h-8 sm:w-8" />

                <div className="mb-4 flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 text-sm font-bold text-white shadow-glow-purple">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>
              </GlassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
