import React, { useState } from "react";
import { Plus, Minus, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Chip from "./Chip";
import { Link } from "react-router";
import OptimizedImage from "./OptimizedImage";
import carpetImg from "../assets/carpet.png?preset=responsive";
import vinylImg from "../assets/vinyl.png?preset=responsive";
import lvtImg from "../assets/lvt.png?preset=responsive";
import laminatedImg from "../assets/laminated.png?preset=responsive";
import mattressImg from "../assets/mattress.png?preset=responsive";

type PictureSource = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

interface Product {
  name: string;
  img: PictureSource;
  text: string;
  link: string;
}

const products: Product[] = [
  {
    name: "Carpet",
    text: "Experience the ultimate in comfort and style with our premium carpet collection. From plush textures to vibrant colors, our carpets are designed to transform your space into a cozy haven.",
    img: carpetImg,
    link: "/carpet",
  },
  {
    name: "Vinyl Flooring",
    text: "Discover the perfect blend of durability and design with our vinyl flooring options. Whether you're looking for a sleek modern look or a classic wood finish, our vinyl flooring is built to withstand the demands of everyday life while elevating your home's aesthetic.",
    img: vinylImg,
    link: "/vinyl",
  },
  {
    name: "Luxury Vinyl Tiles",
    text: "Elevate your space with our luxury vinyl tiles, offering the perfect combination of style and resilience. With a wide range of designs that mimic natural materials, our LVT flooring provides a sophisticated look while being easy to maintain and ideal for high-traffic areas.",
    img: lvtImg,
    link: "/lvt",
  },
  {
    name: "Laminate Flooring",
    text: "Transform your home with our laminate flooring, designed to provide the beauty of hardwood at a fraction of the cost. Our laminate options are not only visually stunning but also durable and easy to install, making them the perfect choice for any room in your house.",
    img: laminatedImg,
    link: "/laminate",
  },
  {
    name: "Mattress & Bed Frame",
    text: "Experience the ultimate in comfort and support with our premium mattress and bed frame collection. Designed to cater to all sleeping styles, our products ensure a restful night's sleep.",
    img: mattressImg,
    link: "/mattress-bed",
  },
];

const Product: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="product"
      className="py-20 px-4 md:px-6 max-w-7xl mx-auto bg-white"
    >
      <div className="text-center mb-10 md:mb-16">
        <Chip>Products</Chip>
        <h2 className="text-4xl md:text-5xl font-medium mt-6 text-[#220905]">
          Explore Our Products
        </h2>
      </div>

      {/* --- MOBILE VIEW: Muncul Langsung Semua --- */}
      <div className="flex flex-col gap-10 md:hidden">
        {products.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/2] shadow-md">
              <OptimizedImage
                source={item.img}
                alt={item.name}
                sizes="100vw"
                pictureClassName="block w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#220905] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {item.text}
              </p>
              <Link to={item.link}>
                <button className="bg-[#660000] text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2">
                  See more <MoveRight size={16} />
                </button>
              </Link>
            </div>
            {idx !== products.length - 1 && (
              <hr className="border-gray-100 mt-4" />
            )}
          </div>
        ))}
      </div>

      {/* --- DESKTOP VIEW: Sticky & Accordion (Hidden on Mobile) --- */}
      <div className="hidden md:flex flex-row gap-12 items-start">
        {/* SISI KIRI: CROSS-FADE IMAGE */}
        <div className="w-1/2 sticky top-24">
          <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg bg-[#660000]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <OptimizedImage
                  source={products[activeIndex].img}
                  alt={products[activeIndex].name}
                  sizes="50vw"
                  eager={activeIndex === 0}
                  pictureClassName="block w-full h-full"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* SISI KANAN: LIST AKORDEON */}
        <div className="w-1/2 border-t border-gray-200">
          {products.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                className="border-b border-gray-200 cursor-pointer"
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="flex justify-between items-center py-6 group">
                  <span
                    className={`text-2xl transition-all duration-300 ${
                      isActive
                        ? "text-[#220905] font-medium"
                        : "text-gray-400 font-light"
                    }`}
                  >
                    {item.name}
                  </span>
                  {isActive ? <Minus size={20} /> : <Plus size={20} />}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-80 pb-8 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed max-w-lg">
                    {item.text}
                  </p>
                  <Link to={item.link}>
                    <button className="cursor-pointer mt-10 bg-[#660000] text-white px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#bd0d11] transition-colors">
                      See more <MoveRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
