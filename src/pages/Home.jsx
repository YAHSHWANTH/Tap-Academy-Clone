import { motion } from "framer-motion";
import { useState } from "react";
import { pageLoad } from "../animations/variants";
import LoadingScreen from "../components/Common/LoadingScreen";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrustedCompanies from "../components/TrustedCompanies/TrustedCompanies";
import Recognition from "../components/Recognition/Recognition";
import Features from "../components/Features/Features";
import PlatformDemo from "../components/PlatformDemo/PlatformDemo";
import Courses from "../components/Courses/Courses";
import Tools from "../components/Tools/Tools";
import LearningPath from "../components/LearningPath/LearningPath";
import Mentors from "../components/Mentors/Mentors";
import CTABanner from "../components/CTABanner/CTABanner";
import PlacementsTicker from "../components/PlacementsTicker/PlacementsTicker";
import Statistics from "../components/Statistics/Statistics";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import VideoReviews from "../components/VideoReviews/VideoReviews";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <motion.div
        variants={pageLoad}
        initial="hidden"
        animate={loaded ? "visible" : "hidden"}
        className="min-h-screen"
      >
        <Navbar />
        <main>
          <Hero />
          <TrustedCompanies />
          <Recognition />
          <Features />
          <PlatformDemo />
          <Courses />
          <Tools />
          <LearningPath />
          <Mentors />
          <CTABanner />
          <PlacementsTicker />
          <Statistics />
          <WhyChooseUs />
          <Testimonials />
          <VideoReviews />
          <FAQ />
          <CTABanner
            title="Ready to Write Your Success Story?"
            subtitle="Join thousands of students who have successfully transformed their careers with TAP Academy's comprehensive support system."
            buttonText="Start Your Journey Today"
            variant="dark"
          />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
