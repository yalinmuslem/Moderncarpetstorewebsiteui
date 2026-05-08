import React from "react";
import Chip from "./Chip";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import OptimizedImage from "./OptimizedImage";
import service1 from "../assets/home/service-1.png?preset=responsive";
import service2 from "../assets/home/service-2.png?preset=responsive";

type PictureSource = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

interface ServiceItem {
  title: string;
  description: string;
  image: PictureSource;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Free Home Survey & Measurement",
    description:
      "Our experts will visit your home to assess your flooring needs, take precise measurements, and provide personalized recommendations for the best carpet solutions.",
    image: service1,
  },
  {
    title: "Professional Carpet & Flooring Installation",
    description:
      "Our skilled team ensures a seamless installation process, transforming your space with precision and care.",
    image: service2,
  },
];

const ServiceCard: React.FC<ServiceItem> = ({ title, description, image }) => {
  return (
    <div className="group">
      {/* Container Gambar: Tinggi dikurangi di mobile agar lebih proporsional */}
      <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-6 h-64 md:h-80 cursor-pointer relative shadow-sm transition-shadow hover:shadow-xl">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.4 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        >
          <OptimizedImage
            source={image}
            alt={title}
            sizes="(min-width: 768px) 50vw, 100vw"
            pictureClassName="block w-full h-full"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <h3 className="text-xl md:text-2xl font-medium mb-3 text-[#220905] group-hover:text-[#660000] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 relative"
    >
      {/* Kiri: Deskripsi Utama */}
      <div className="md:sticky md:top-24 h-fit">
        <Chip>Services</Chip>

        <h2 className="text-3xl md:text-5xl font-medium mt-6 mb-6 md:mb-8 text-[#220905] leading-[1.2] md:leading-[1.1]">
          Comprehensive Flooring Solutions Tailored to Your Needs
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-md">
          From consultation to installation, we provide comprehensive services
          to ensure your flooring project is a success. Our team is here to
          guide you every step of the way.
        </p>

        <Link to="/services" className="inline-block">
          <button className="mt-8 md:mt-10 w-full sm:w-auto bg-[#660000] text-white px-8 py-4 md:py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#bd0d11] transition-all active:scale-95 shadow-lg shadow-[#660000]/10">
            Learn more <MoveRight size={16} />
          </button>
        </Link>
      </div>

      {/* Kanan: List Card Service */}
      <div className="space-y-12 md:space-y-20">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
