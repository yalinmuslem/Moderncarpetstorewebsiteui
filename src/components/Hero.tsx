import React from "react";
import { MoveRight } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import Magnet from "./Magnet";

const Hero: React.FC = () => {
  return (
    <section className="text-center pt-6 pb-28 px-6 flex items-center flex-col">
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse
        duration={2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-xs font-medium mb-8">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bd0d11] opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-[#bd0d11]"></span>
          </span>
          1 spot left this month
        </div>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse
        duration={2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.2}
      >
        <h1 className="text-5xl md:text-7xl  tracking-tight leading-[1.1] mb-8 text-[#220905]">
          Carbon consultants <br /> for savvy SMEs
        </h1>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse
        duration={2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.4}
      >
        <p className="text-gray-500 font-light text-md md:text-lg max-w-2xl mx-auto mb-12">
          We help small and growing businesses cut carbon, boost credibility,
          and move forward with confidence. Your low-carbon journey starts here.
        </p>
      </AnimatedContent>

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse
        duration={2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.6}
      >
        <Magnet padding={10} disabled={false} magnetStrength={2}>
          <button className="cursor-pointer bg-[#162a1c] text-white px-8 py-4 rounded-full font-medium hover:bg-[#bd0d11] transition-all shadow-xl shadow-green-900/10 flex items-center gap-2">
            Book my free consultation <MoveRight size={20} />
          </button>
        </Magnet>
      </AnimatedContent>
    </section>
  );
};

export default Hero;
