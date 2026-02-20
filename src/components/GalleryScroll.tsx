import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CARPET_DATA = [
  {
    id: 1,
    title: "Classic Velvet",
    tileImg: "/tiles/carpet/ebony.jpg",
    roomImg: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Modern Grey Loop",
    tileImg: "/tiles/carpet/ivory.jpg",
    roomImg: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Deep Ocean Blue",
    tileImg: "/tiles/carpet/marble.jpg",
    roomImg: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Nordic Wool",
    tileImg: "/tiles/carpet/sheffield.jpg",
    roomImg: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function CarpetShowcase() {
  const [activeId, setActiveId] = useState(CARPET_DATA[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          setActiveId(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      {/* BAGIAN KIRI: Image 1 (Tile List) */}
      <div className="w-1/3">
        {CARPET_DATA.map((item, index) => (
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
          {CARPET_DATA.map((item) => (
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
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}