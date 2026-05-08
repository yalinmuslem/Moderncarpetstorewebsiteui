import React, { useEffect, useState } from "react";
import OptimizedImage from "./OptimizedImage";
import hero1 from "../assets/home/image-1.png?preset=responsive";
import hero2 from "../assets/home/image-2.png?preset=responsive";
import hero3 from "../assets/home/image-3.png?preset=responsive";

const HERO_IMAGES = [hero1, hero2, hero3];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="text-center flex items-center flex-col">
      <h2 className="sr-only">Hero</h2>
      <div className="w-full mx-auto">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[600px] overflow-hidden">
          {HERO_IMAGES.map((source, i) => {
            const active = i === index;
            return (
              <OptimizedImage
                key={i}
                source={source}
                alt={`slide-${i}`}
                eager={i === 0}
                sizes="100vw"
                pictureClassName="absolute inset-0 w-full h-full"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                  active
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ willChange: "opacity, transform" }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
