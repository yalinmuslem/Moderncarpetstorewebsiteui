import React from "react";
import Chip from "./Chip";

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jamie L.",
    role: "Clarity Point",
    text: "Greenleaf membantu kami mengubah keberlanjutan dari sekadar kata kunci menjadi keuntungan bisnis.",
  },
  {
    name: "Priya K.",
    role: "Harkwell",
    text: "Greenleaf menyederhanakan hal yang kompleks. Kami merasa memegang kendali atas dampak karbon kami.",
  },
  {
    name: "Mark D.",
    role: "Avora Foods",
    text: "Panduan mereka memberi kami kepercayaan diri untuk berkomitmen pada target yang berani.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="text-center mb-16">
        <Chip>Testimonial</Chip>
        <h2 className="text-5xl font-medium mt-6 text-[#162a1c]">
          What our clients say
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-10 rounded-[2.5rem] flex flex-col justify-between border border-transparent hover:border-gray-200 transition-all duration-300"
          >
            <div>
              <div className="flex text-black mb-6">★★★★★</div>
              <p className="text-md text-gray-500 leading-relaxed font-normal">
                "{item.text}"
              </p>
            </div>
            <div className="flex items-center mt-10 gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-2xl text-[#162a1c]">{item.name}</p>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
