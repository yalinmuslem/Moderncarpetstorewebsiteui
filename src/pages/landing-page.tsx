import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
// import BentoGrid from "@/components/BentoGrid";
import GradualBlurMemo from "@/components/GradualBlur";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import Products from "@/components/Product";
// import Chip from "@/components/Chip";
import WhatsAppButton from "@/components/WhatsAppButton";

const GreenleafLanding: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-[#220905] font-sans selection:bg-[#660000] selection:text-white">
        {/* 1. HEADER & NAVIGATION */}
        <Navbar />

        <main>
          {/* 2. HERO SECTION */}
          <Hero />

          <Products />

          {/* 3. BENTO GRID IMAGES */}
          {/* <BentoGrid /> */}

          {/* 4. ABOUT SECTION (With BlurText Animation) */}
          <About />


          {/* 5. SERVICES SECTION */}
          <Services />

          {/* 6. TESTIMONIALS SECTION */}
          <Testimonials />

          {/* <Portofolio /> */}

          {/* 7. FAQ SECTION */}
          {/* Floating WhatsApp button (phone number optional) */}
          <WhatsAppButton phone="6281234567890" />
          {/* <FAQ /> */}

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
