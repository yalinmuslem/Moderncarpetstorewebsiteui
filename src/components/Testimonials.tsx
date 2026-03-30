import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import Chip from "./Chip";

interface Testimonial {
  link: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    link: "https://maps.app.goo.gl/L3Y4a53Gi599q9kT9",
    name: "Sayful Islam.",
    role: "",
    text: "Honestly couldn’t ask for better. Customer service is on point. Good quality carpet, really comfortable to walk on. Fitted the carpet on my stairs really well and has 35 years of experience can’t go wrong with that. No mess and doesn’t damage anything whilst fitting. I’ve seen other shops and I see a lot of complaints about damages but this one is really professional. Highly recommend.",
  },
  {
    link: "https://maps.app.goo.gl/qgXtHV3gWqsyT3V27",
    name: "Susanne Lydia Maguire.",
    role: "",
    text: "Excellent service and workmanship. Incredibly fast fitting and high quality finish - I am delighted with both the carpets and new kitchen floor! Thank you.",
  },
  {
    link: "https://maps.app.goo.gl/KJ21Hc5W7KK18RuB6",
    name: "Lynsey Waugh",
    role: "",
    text: "Went above and beyond to help me with finding a carpet fitter, and then great quality carpet when I was in a pickle. Fitters were brill too",
  },
  {
    link: "https://maps.app.goo.gl/hrNupR9n3ss1hn2i6",
    name: "Sara Pouri",
    role: "",
    text: "Amazing service. Yasir was very personable and went out of his way to order and fit our carpet in a very short timeframe of 48 hours where others were quoting weeks. Really knowledgeable, super reliable and the final result looks great. Brilliant local business, and one to fully support over the big names",
  },
  {
    link: "https://maps.app.goo.gl/LphBhn8wvjJfCZyF9",
    name: "Bedford&Lindley",
    role: "",
    text: "I have been using standard carpets as a landlord for over 20 years. Their pricing for carpets and beds is unbeatable. They provide a polite service. Would thoroughly recommend!",
  },
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={item.link}
          className="text-xs text-gray-400"
        >
          Details
        </a>
      </div>
    </div>
  </div>
);

const ScrollingRow = ({
  items,
  direction = "left",
}: {
  items: Testimonial[];
  direction?: "left" | "right";
}) => {
  const isLeft = direction === "left";
  // Tips: Ulangi array 4 kali untuk memastikan layar lebar (Ultrawide) tetap terisi penuh
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const controls = useAnimationControls();

  const startAnimation = () => {
    controls.start({
      x: isLeft ? "-50%" : "0%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  React.useEffect(() => {
    // kick off the continuous animation when component mounts
    // initial position depends on direction so we set it first then start
    controls.set({ x: isLeft ? "0%" : "-50%" });
    startAnimation();
    // cleanup: stop animations on unmount
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLeft]);

  return (
    <div className="flex overflow-hidden mb-8 relative">
      <motion.div
        className="flex gap-8 px-4"
        // start from the set position and then rely on controls
        animate={controls}
        initial={false}
        onMouseEnter={() => {
          // pause the animation when mouse hovers anywhere on the row
          controls.stop();
        }}
        onMouseLeave={() => {
          // resume the animation when mouse leaves
          startAnimation();
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
