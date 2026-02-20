import React from "react";
import BlurText from "@/components/BlurText"; // Pastikan path ini benar
import { MoveRight } from "lucide-react";
import Chip from "./Chip";

const About: React.FC = () => {
  const lines = [
    "✔️Over 20 years of industry experience",
    "✔️Family-run business with a personal approach",
    "✔️High-quality flooring at competitive prices",
  ];

  return (
    <section id="about" className="text-center py-32 bg-white flex flex-col items-center">
      <Chip>Why Choose Standard Carpets?</Chip>
      <div className="text-3xl md:text-3xl font-normal max-w-4xl mx-auto mt-8 leading-tight text-[#220905]">
        {lines.map((line, idx) => (
          <BlurText
            key={idx}
            text={line}
            delay={idx * 200}
            animateBy="words"
            direction="top"
            className="flex justify-center"
          />
        ))}
      </div>
      <button className="mt-10 bg-[#660000] text-white px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#bd0d11] transition-colors">
        Learn more <MoveRight size={16} />
      </button>
    </section>
  );
};

export default About;
