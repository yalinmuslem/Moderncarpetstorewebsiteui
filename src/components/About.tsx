import React from "react";
import BlurText from "@/components/BlurText"; // Pastikan path ini benar
import { MoveRight } from "lucide-react";
import Chip from "./Chip";

const About: React.FC = () => {
  const lines = [
    "We're a small team of passionate",
    "carbon experts helping forward-thinking companies",
    "prepare for the future.",
  ];

  return (
    <section className="text-center py-32 bg-white flex flex-col items-center">
      <Chip>About</Chip>
      <div className="text-4xl md:text-5xl font-normal max-w-4xl mx-auto mt-8 leading-tight text-[#162a1c]">
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
      <button className="mt-10 bg-[#162a1c] text-white px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#23422c] transition-colors">
        Learn more <MoveRight size={16} />
      </button>
    </section>
  );
};

export default About;
