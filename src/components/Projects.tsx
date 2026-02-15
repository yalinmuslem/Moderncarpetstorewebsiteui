import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Chip from "./Chip";

interface Product {
  name: string;
  img: string;
  text: string;
}

const products: Product[] = [
  {
    name: "Kitchens",
    text: "Expand your living space with a seamless home extension. Whether you need a bigger kitchen, a new living area, or a multi-purpose space, Refit provides expertly crafted extensions.",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Loft Conversions",
    text: "Turn your unused attic into a functional room. Our loft conversions are designed to maximize space and add significant value to your home.",
    img: "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Bathrooms",
    text: "Transform your bathroom into a personal sanctuary. From modern minimalist designs to classic luxury, we handle every detail of your renovation.",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Extensions",
    text: "Expand your living space with a seamless home extension. Refit provides expertly crafted extensions designed to enhance your home's flow and usability.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
  },
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <Chip>Projects</Chip>
        <h2 className="text-5xl font-medium mt-6 text-[#220905]">
          What we offer
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* SISI KIRI: CROSS-FADE IMAGE */}
        <div className="w-full md:w-1/2 sticky top-10">
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg bg-[#162a1c]">
             {/* Background gelap/brand agar tidak ada putih saat transisi pertama kali */}
            <AnimatePresence initial={false}>
              <motion.img
                key={activeIndex}
                src={products[activeIndex].img}
                alt={products[activeIndex].name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* SISI KANAN: LIST AKORDEON */}
        <div className="w-full md:w-1/2 border-t border-gray-200">
          {products.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-gray-200 cursor-pointer"
                onClick={() => setActiveIndex(idx)}
              >
                <div className="flex justify-between items-center py-6 group">
                  <span 
                    className={`text-2xl transition-all duration-300 ${
                      isActive ? "text-[#220905] font-medium" : "text-gray-400 font-light"
                    }`}
                  >
                    {item.name}
                  </span>
                  {isActive ? <Minus size={20} /> : <Plus size={20} />}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed max-w-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;