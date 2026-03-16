import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import type { WiderGridBrand } from "@/configs/products";

const WiderGrid: React.FC<{ items: WiderGridBrand[] }> = ({ items }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    // Tambahkan flex-col untuk mobile, flex-row untuk desktop
    <div className="flex flex-col md:flex-row w-full overflow-hidden gap-4 md:gap-2 p-4">
      {items.map((item) => (
        <motion.div
          onClick={() => navigate(item.path)}
          key={item.id}
          className="relative h-[300px] md:h-[500px] cursor-pointer overflow-hidden rounded-2xl w-full"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          // Animasi: Di mobile tetap flex-1, di desktop baru main flex-grow
          animate={{
            flex: hoveredId === item.id ? 3 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              filter:
                hoveredId === item.id
                  ? "brightness(100%)"
                  : "brightness(80%) grayscale(10%)",
              scale: hoveredId === item.id ? 1.05 : 1,
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-1" />

          {/* Text Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
            <motion.h2
              className="text-2xl md:text-4xl text-white font-bold mb-2"
              animate={{
                x: hoveredId === item.id ? 0 : -5,
              }}
            >
              {item.title}
            </motion.h2>

            {/* Di Mobile, deskripsi bisa tampil tipis atau saat di-tap */}
            <AnimatePresence>
              {hoveredId === item.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="max-w-md text-slate-200 text-xs md:text-sm leading-relaxed mb-2">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WiderGrid;
