import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/configs/products";

export default function GalleryScroll({
  productsList,
}: {
  productsList: Product[];
}) {
  const [activeId, setActiveId] = useState(productsList[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Root margin diperketat agar pergantian gambar terjadi tepat di tengah jeda antar tile
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.1,
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
    <div className="relative flex flex-col md:flex-row min-h-screen bg-white">
      {/* KANAN (Background Room Preview) */}
      <div className="md:w-2/3 order-1 md:order-2 sticky top-0 h-[60vh] md:h-screen overflow-hidden bg-[#f9f9f9]">
        <AnimatePresence mode="popLayout">
          {productsList.map(
            (item) =>
              item.id === activeId && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={item.roomImg}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay elegan untuk mobile agar teks kontras */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white/90 md:hidden" />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* KIRI (Floating Content & Tile) */}
      <div className="md:w-1/3 order-2 md:order-1 relative z-10">
        {productsList.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            /* JARAK ANTAR TILE: Diatur di sini (min-h-[120vh] untuk desktop, 100vh untuk mobile) */
            className="min-h-[100vh] md:min-h-[150vh] flex flex-col items-center md:items-start justify-center px-8 md:px-12"
          >
            {/* Tile Image Container */}
            <motion.div
              className="w-full max-w-sm md:max-w-none mb-8 md:mb-12"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="aspect-[3/4] md:aspect-square overflow-hidden shadow-2xl rounded-sm">
                <img
                  src={item.tileImg}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Typography Content */}
            <motion.div
              className="text-center md:text-left space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-[10px] tracking-[0.4em] text-[#660000] font-bold uppercase">
                  Collection {index + 1}
                </span>
                <div className="h-[1px] w-8 bg-[#660000]/30" />
              </div>

              <h3 className="text-3xl md:text-2xl font-serif text-[#220905] leading-tight">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 font-light tracking-widest uppercase">
                Explore Detail — Scroll
              </p>
            </motion.div>
          </div>
        ))}

        {/* Spacer ekstra di bagian paling bawah agar item terakhir tidak langsung terpotong footer */}
        <div className="h-[40vh]" />
      </div>
    </div>
  );
}
