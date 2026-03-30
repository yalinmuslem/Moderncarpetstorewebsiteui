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
    // Tentukan rootMargin berdasarkan lebar layar saat komponen dimuat
    const isMobile = window.innerWidth < 768; // 768px adalah breakpoint 'md' Tailwind

    const observerOptions = {
      root: null,
      /**
       * Perbaikan Utama:
       * Di mobile: Deteksi di area tengah (40% atas/bawah diabaikan).
       * Di desktop: Deteksi di area atas hingga tengah (0% atas, 50% bawah diabaikan).
       * Ini memastikan tile pertama langsung terdeteksi saat di paling atas pada desktop.
       */
      rootMargin: isMobile ? "-40% 0px -40% 0px" : "0px 0px -50% 0px",
      threshold: [0.1, 0.5], // Menambahkan threshold ekstra untuk presisi
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Pada desktop, kita pakai 'isIntersecting' yang standar
        // Pada mobile, kita pastikan rasio persinggungannya cukup tinggi
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
    // Masukkan activeId ke dependency agar callback selalu mendapat state terbaru
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
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={item.roomImg}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradasi untuk mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>

      {/* KIRI (Scrollable Content) */}
      <div className="w-full md:w-1/3 order-2 md:order-1 relative z-10 bg-white md:bg-transparent">
        {productsList.map((item, index) => (
          <div
            key={item.id}
            data-id={item.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            /**
             * Perbaikan Layout Desktop:
             * 'md:pt-20': Memberikan sedikit jarak dari atas di desktop.
             * 'md:min-h-screen': Di desktop, satu tile memenuhi satu layar agar preview
             * menempel pas dengan konten teks.
             */
            className="min-h-[80vh] md:min-h-screen flex flex-col items-center md:items-start justify-center px-6 md:px-12 py-20 md:py-0 md:pt-20"
          >
            {/* Tile Image (Product Thumbnail) */}
            <motion.div
              className="w-full max-w-[280px] md:max-w-none mb-10"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Aspect ratio square di desktop (md:aspect-square) */}
              <div className="aspect-[3/4] md:aspect-square overflow-hidden shadow-xl rounded-sm ring-1 ring-black/5">
                <img
                  src={item.tileImg}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Deskripsi Teks */}
            <motion.div
              className="text-center md:text-left space-y-4 max-w-xs md:max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-[#660000] font-bold uppercase">
                  Collection {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-[1px] w-6 bg-[#660000]/30" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#220905] leading-tight italic">
                {item.title}
              </h3>

              <div className="pt-2">
                <p className="text-[10px] text-gray-500 font-medium tracking-[0.2em] uppercase">
                  Scroll to explore
                </p>
                {/* Indikator scroll hanya muncul di tile pertama untuk petunjuk awal */}
                {index === 0 && (
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="h-8 w-[1px] bg-gray-300 mx-auto md:mx-0 mt-2"
                  />
                )}
              </div>
            </motion.div>
          </div>
        ))}

        {/* Bottom Spacer dikurangi agar pas di desktop */}
        <div className="h-[20vh] md:h-[10vh]" />
      </div>
    </div>
  );
}
