import React from "react";
import Chip from "./Chip";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Free Home Survey & Measurement",
    description:
      "Our experts will visit your home to assess your flooring needs, take precise measurements, and provide personalized recommendations for the best carpet solutions.",
    image: "home/service-1.png",
  },
  {
    title: "Professional Carpet & Flooring Installation",
    description:
      "Our skilled team ensures a seamless installation process, transforming your space with precision and care.",
    image: "home/service-2.png",
  },
];

const ServiceCard: React.FC<ServiceItem> = ({ title, description, image }) => {
  return (
    <div>
      <div className="rounded-[2.5rem] overflow-hidden mb-6 h-80 group cursor-pointer relative">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.4 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <h3 className="text-2xl font-medium mb-3 text-[#220905]">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 relative">
      <div className="md:sticky md:top-20 h-fit">
        <Chip>Services</Chip>

        <h2 className="text-5xl font-medium mt-6 mb-8 text-[#220905] leading-[1.1]">
          Comprehensive Flooring Solutions Tailored to Your Needs
        </h2>
        <p className="text-gray-500 text-lg max-w-md">
          From consultation to installation, we provide comprehensive services
          to ensure your flooring project is a success. Our team of experts is
          here to guide you every step of the way, making the process seamless
          and stress-free.
        </p>
        <button className="mt-10 bg-[#660000] text-white px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#bd0d11] transition-colors">
          Learn more <MoveRight size={16} />
        </button>
      </div>

      <div className="space-y-20">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
