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
    name: "Carpet",
    text: "Experience the ultimate in comfort and style with our premium carpet collection. From plush textures to vibrant colors, our carpets are designed to transform your space into a cozy haven.",
    img: "carpet.png",
  },
  {
    name: "Vinyl Flooring",
    text: "Discover the perfect blend of durability and design with our vinyl flooring options. Whether you're looking for a sleek modern look or a classic wood finish, our vinyl flooring is built to withstand the demands of everyday life while elevating your home's aesthetic.",
    img: "vinyl.png",
  },
  {
    name: "Luxury Vinyl Tiles",
    text: "Elevate your space with our luxury vinyl tiles, offering the perfect combination of style and resilience. With a wide range of designs that mimic natural materials, our LVT flooring provides a sophisticated look while being easy to maintain and ideal for high-traffic areas.",
    img: "lvt.png",
  },
  {
    name: "Laminate Flooring",
    text: "Transform your home with our laminate flooring, designed to provide the beauty of hardwood at a fraction of the cost. Our laminate options are not only visually stunning but also durable and easy to install, making them the perfect choice for any room in your house.",
    img: "laminated.png",
  },
  {
    name: "Mattress & Bed Frame",
    text: "Experience the ultimate in comfort and support with our premium mattress and bed frame collection. Designed to cater to all sleeping styles, our products ensure a restful night's sleep.",
    img: "mattress.png",
  },
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <Chip>Products</Chip>
        <h2 className="text-5xl font-medium mt-6 text-[#220905]">
          Explore Our Products
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