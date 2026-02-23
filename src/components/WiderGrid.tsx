import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import type { WiderGridBrand } from "@/configs/products";

const WiderGrid: React.FC<{ items: WiderGridBrand[] }> = ({ items }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full overflow-hidden gap-2 p-4">
      {items.map((item) => (
        <motion.div
          onClick={() =>
            navigate(item.title.replaceAll(" ", "-").toLowerCase())
          }
          key={item.id}
          className="relative h-[500px] cursor-pointer overflow-hidden rounded-2xl"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          // Logika Pelebaran: Jika di-hover flex jadi 3, jika tidak 1.
          animate={{
            flex: hoveredId === item.id ? 3 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Cubic-bezier untuk gerakan elegan
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              filter:
                hoveredId === item.id
                  ? "brightness(80%)"
                  : "brightness(30%) grayscale(50%)",
              scale: hoveredId === item.id ? 1.1 : 1,
            }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Overlay Gradient agar teks terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-1" />

          {/* Text Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-8">
            <motion.h2
              className="text-4xl text-white mb-2"
              animate={{
                color: hoveredId === item.id ? "#ffffff" : "#ffffff",
                x: hoveredId === item.id ? 0 : -10,
              }}
            >
              {item.title}
            </motion.h2>

            <AnimatePresence>
              {hoveredId === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <p className="max-w-md text-slate-200 text-sm leading-relaxed">
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
