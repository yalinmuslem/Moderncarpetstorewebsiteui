import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/configs/products";

export default function CarpetShowcase({
  productsList,
}: {
  productsList: Product[];
}) {
  const [activeId, setActiveId] = useState(productsList[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute("data-id"));
          setActiveId(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      {/* BAGIAN KIRI: Image 1 (Tile List) */}
      <div className="w-1/3">
        {productsList.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="h-screen relative"
          >
            {/* Image 1: Sticky Tile */}
            <div className="sticky top-0 z-20 w-full h-1/2">
              <img
                src={item.tileImg}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Label Informasi */}
            <div className="p-10 relative z-10">
              <h3 className="text-lg tracking-[0.2em] uppercase font-medium text-gray-500">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
        <div className="h-[50vh]" />
      </div>

      {/* BAGIAN KANAN: Image 2 (Room Preview) */}
      <div className="w-2/3 sticky top-0 h-screen overflow-hidden bg-white">
        {/* Tanpa mode="wait" agar terjadi Cross-Fade */}
        <AnimatePresence>
          {productsList.map(
            (item) =>
              item.id === activeId && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={item.roomImg}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
