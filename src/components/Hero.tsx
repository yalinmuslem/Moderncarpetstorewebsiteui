import React from "react";
import { MoveRight } from "lucide-react";
import AnimatedContent from "./AnimatedContent";
import Chip from "./Chip";

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
        <div className="inline-block bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-xs font-medium mb-8">
          <span className="text-gray-500 mr-2">●</span>
          <Chip>1 spot left this month</Chip>
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
        <h1 className="text-5xl md:text-7xl  tracking-tight leading-[1.1] mb-8 text-[#162a1c]">
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
        <button className="bg-[#162a1c] text-white px-8 py-4 rounded-full font-medium hover:bg-[#23422c] transition-all shadow-xl shadow-green-900/10 flex items-center gap-2">
          Book my free consultation <MoveRight size={20} />
        </button>
      </AnimatedContent>
    </section>
  );
};

export default Hero;
