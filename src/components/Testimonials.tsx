import React from "react";
import { motion } from "framer-motion";
import Chip from "./Chip";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  { name: "Jamie L.", role: "Clarity Point", text: "Greenleaf membantu kami mengubah keberlanjutan dari sekadar kata kunci menjadi keuntungan bisnis." },
  { name: "Priya K.", role: "Harkwell", text: "Greenleaf menyederhanakan hal yang kompleks. Kami merasa memegang kendali atas dampak karbon kami." },
  { name: "Mark D.", role: "Avora Foods", text: "Panduan mereka memberi kami kepercayaan diri untuk berkomitmen pada target yang berani." },
  { name: "Sarah W.", role: "EcoStream", text: "Implementasi strategi mereka sangat luar biasa dan berdampak langsung pada efisiensi kami." },
  { name: "Alex M.", role: "Terra Corp", text: "Partner terbaik untuk urusan ESG dan kepatuhan lingkungan di industri saat ini." },
  { name: "Budi H.", role: "Lestari Group", text: "Solusi yang diberikan sangat aplikatif dan mudah dimengerti oleh tim operasional kami." },
];

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div className="w-[400px] shrink-0 bg-gray-50 p-10 rounded-[2.5rem] flex flex-col justify-between border border-transparent hover:border-gray-200 transition-all duration-300">
    <div>
      <div className="flex text-black mb-6">★★★★★</div>
      <p className="text-md text-gray-500 leading-relaxed font-normal italic">
        "{item.text}"
      </p>
    </div>
    <div className="flex items-center mt-10 gap-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div>
        <p className="text-2xl text-[#220905]">{item.name}</p>
        <p className="text-xs text-gray-400">{item.role}</p>
      </div>
    </div>
  </div>
);

const ScrollingRow = ({ items, direction = "left" }: { items: Testimonial[], direction?: "left" | "right" }) => {
  const isLeft = direction === "left";
  
  // Tips: Ulangi array 4 kali untuk memastikan layar lebar (Ultrawide) tetap terisi penuh
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden mb-8 relative">
      <motion.div
        className="flex gap-8 px-4"
        initial={{ x: isLeft ? "0%" : "-50%" }}
        animate={{
          x: isLeft ? "-50%" : "0%",
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const half = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, half);
  const secondRow = testimonials.slice(half);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <Chip>Testimonial</Chip>
        <h2 className="text-5xl font-medium mt-6 text-[#220905]">
          What our clients say
        </h2>
      </div>

      <div className="relative flex flex-col">
        {/* Row 1: Ke Kanan */}
        <ScrollingRow items={firstRow} direction="right" />
        
        {/* Row 2: Ke Kiri */}
        <ScrollingRow items={secondRow} direction="left" />

        {/* Optional: Overlay Gradient agar pinggiran terlihat halus (mencegah item terpotong tajam) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Testimonials;