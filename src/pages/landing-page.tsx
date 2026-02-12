import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import BentoGrid from "@/components/BentoGrid";
import GradualBlurMemo from "@/components/GradualBlur";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";

const GreenleafLanding: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-[#162a1c] font-sans selection:bg-[#162a1c] selection:text-white">
        {/* 1. HEADER & NAVIGATION */}
        <Navbar />

        <main>
          {/* 2. HERO SECTION */}
          <Hero />

          {/* 3. BENTO GRID IMAGES */}
          <BentoGrid />

          {/* 4. ABOUT SECTION (With BlurText Animation) */}
          <About />

          {/* 5. SERVICES SECTION */}
          <Services />

          {/* 6. TESTIMONIALS SECTION */}
          <Testimonials />

          {/* 7. FAQ SECTION */}
          <FAQ />

          {/* 8. CTA SECTION */}
          <CTA />
        </main>

        {/* 9. FOOTER SECTION */}
        <Footer />
      </div>

      <GradualBlurMemo
        target="page"
        position="bottom"
        height="6rem"
        strength={0.5}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </>
  );
};

export default GreenleafLanding;
