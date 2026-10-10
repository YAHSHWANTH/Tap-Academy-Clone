import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { features } from "../../data/features";
import GlassCard from "../Common/GlassCard";
import IconCircle from "../Common/IconCircle";
import SectionHeading from "../Common/SectionHeading";
import SectionWrapper from "../Common/SectionWrapper";

export default function Features() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <SectionWrapper id="features" variant="light">
      <SectionHeading
        badge="Why TAP Academy"
        title="We Don't Just Teach Code."
        highlight="We Build Careers."
        subtitle="Everything you need to go from beginner to industry-ready developer"
      />

      <div className="relative px-2 sm:px-8">
        <button
          ref={prevRef}
          type="button"
          aria-label="Previous feature"
          className="absolute -left-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 shadow-premium backdrop-blur-sm transition-all hover:border-pink-500/30 hover:bg-white/10 hover:text-white sm:flex sm:-left-4"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          ref={nextRef}
          type="button"
          aria-label="Next feature"
          className="absolute -right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 shadow-premium backdrop-blur-sm transition-all hover:border-pink-500/30 hover:bg-white/10 hover:text-white sm:flex sm:-right-4"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="!pb-12"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.title} className="!h-auto">
              <GlassCard variant="light" className="h-full p-6 sm:p-8">
                <IconCircle icon={feature.icon} className="mb-5" />
                <h3 className="mb-2 text-base font-bold text-white sm:text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </GlassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
