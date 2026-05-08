import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/configs/products";
import TileImage from "./TileImage";

export default function GalleryScroll({
  productsList,
}: {
  productsList: Product[];
}) {
  const [activeId, setActiveId] = useState(productsList[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const observerOptions = {
      root: null,
      rootMargin: isMobile ? "-40% 0px -40% 0px" : "0px 0px -50% 0px",
      threshold: [0.1, 0.5],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute("data-id"));
          if (id !== activeId) {
            setActiveId(id);
          }
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
  }, [productsList, activeId]);

  return (
    <div className="relative flex flex-col md:flex-row bg-white w-full">
      {/* KANAN (Visual Preview - Sticky) */}
      <div className="w-full md:w-2/3 order-1 md:order-2 sticky top-0 h-[50vh] md:h-screen overflow-hidden bg-[#f4f4f4] z-20 md:z-0">
        <AnimatePresence mode="wait">
          {productsList.map(
            (item) =>
              item.id === activeId && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute inset-0"
                >
                  <TileImage
                    src={item.roomImg ?? ""}
                    alt={item.title}
                    pictureClassName="block w-full h-full"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* KIRI (Scrollable Content) */}
      <div className="w-full md:w-1/3 order-2 md:order-1 relative z-10 bg-white">
        {productsList.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="min-h-[90vh] md:min-h-screen flex flex-col items-center md:items-start justify-center px-8 md:px-14 py-24 md:py-20"
          >
            {/* Tile Image */}
            <motion.div
              className="w-full max-w-[300px] md:max-w-none mb-12"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl rounded-sm ring-1 ring-black/5">
                <TileImage
                  src={item.tileImg}
                  alt={item.title}
                  pictureClassName="block w-full h-full"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Deskripsi & Spesifikasi */}
            <div className="w-full space-y-8 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-[10px] tracking-[0.4em] text-[#660000] font-bold uppercase">
                    Variant {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-[1px] w-8 bg-[#660000]/20" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-[#220905] leading-tight italic">
                  {item.title}
                </h3>
              </motion.div>

              {/* SPECIFICATION GRID (Conditional Rendering) */}
              {item.specs && item.specs.length > 0 && (
                <motion.div
                  className="grid grid-cols-2 gap-x-6 gap-y-6 pt-6 border-t border-gray-100"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  {item.specs.map((spec, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="flex flex-col gap-1"
                    >
                      <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                        {spec.label}
                      </span>
                      <span className="text-sm text-[#220905] font-medium">
                        {spec.value}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Footer Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                {index === 0 ? (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <p className="text-[10px] text-gray-400 font-medium tracking-[0.2em] uppercase">
                      Scroll to explore
                    </p>
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="h-10 w-[1px] bg-gradient-to-b from-[#660000] to-transparent"
                    />
                  </div>
                ) : (
                  <div className="h-[1px] w-12 bg-gray-100 mx-auto md:mx-0" />
                )}
              </motion.div>
            </div>
          </div>
        ))}
        <div className="h-[10vh]" />
      </div>
    </div>
  );
}
