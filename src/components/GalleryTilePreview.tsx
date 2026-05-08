import type { Product } from "@/configs/products";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TileImage from "./TileImage";

interface GalleryTilePreviewProps {
  title: string;
  description: string;
  heroImage: string;
  productsList: Product[];
}

const GalleryTilePreview: React.FC<GalleryTilePreviewProps> = ({
  title,
  description,
  heroImage,
  productsList,
}) => {
  // State untuk melacak produk mana yang sedang di-hover (untuk desktop)
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-4 md:px-6 pb-20 pt-10">
      {/* Header */}
      <header className="mb-6 md:mb-10 text-center">
        <h1 className="text-2xl md:text-5xl font-serif text-[#220905] tracking-tight mb-2 md:mb-4 italic">
          {title}
        </h1>
        <p className="text-xs md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed tracking-wide">
          {description}
        </p>
      </header>

      {/* Hero Image */}
      <div className="relative w-full h-[200px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-lg mb-8 md:mb-16">
        <TileImage
          src={heroImage}
          alt={`Preview of ${title}`}
          eager
          pictureClassName="block w-full h-full"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
        {productsList.map((product) => (
          <div
            key={product.id}
            className="relative"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <button className="group w-full flex flex-col items-center pb-4 rounded-2xl transition-all duration-500 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-95 overflow-hidden">
              <div className="w-full aspect-square overflow-hidden mb-3">
                <TileImage
                  src={product.tileImg}
                  alt={product.title}
                  pictureClassName="block w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-center text-[#220905] px-3 line-clamp-1">
                {product.title}
              </span>
            </button>

            {/* Hover Tooltip / Spec Preview (Hanya muncul di desktop/hover) */}
            <AnimatePresence>
              {hoveredId === product.id && product.specs && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-5 border border-gray-100 pointer-events-none hidden lg:block"
                >
                  {/* Small Arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100" />

                  <div className="relative z-10">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#660000] font-black mb-3">
                      Technical Details
                    </p>
                    <div className="space-y-3">
                      {product.specs.slice(0, 4).map((spec, index) => (
                        <div
                          key={index}
                          className="flex flex-col border-b border-gray-50 pb-1.5 last:border-0"
                        >
                          <span className="text-[8px] uppercase text-gray-400 tracking-wider">
                            {spec.label}
                          </span>
                          <span className="text-[11px] text-[#220905] font-medium leading-tight">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryTilePreview;
