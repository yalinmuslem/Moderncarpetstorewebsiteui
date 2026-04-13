import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowLeft,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chip from "@/components/Chip";
import { Link, useNavigate } from "react-router";

const DetailService: React.FC = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="min-h-screen bg-white text-[#220905] selection:bg-[#660000] selection:text-white">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-4xl">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-400 hover:text-[#660000] transition-colors mb-8 md:mb-12 group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-xs md:text-sm font-medium uppercase tracking-widest">
                Back to Overview
              </span>
            </button>

            <motion.div {...fadeIn}>
              <Chip>Premium Solutions</Chip>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium mt-6 mb-8 leading-[1.1] tracking-tight text-[#220905]">
                Elevating Spaces with <br className="hidden md:block" />
                <span className="italic font-serif text-[#660000]">
                  Master Craftsmanship.
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Hero Image - Ukuran tinggi disesuaikan untuk mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden my-10 md:my-16 shadow-2xl"
          >
            <img
              src="/tiles/lvt/abingdon/antique-walnut-preview.png"
              alt="Luxury Interior Flooring"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3s]"
            />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Service 01: Survey */}
            <motion.section
              {...fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-12 md:py-20 border-b border-gray-100"
            >
              <div className="order-2 md:order-1">
                <span className="text-5xl md:text-6xl font-serif italic text-gray-100 block mb-4">
                  01
                </span>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#220905]">
                  Free Home Survey & Measurement
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  The perfect floor starts with a perfect plan. We bring the
                  showroom to your doorstep, allowing you to match textures and
                  colors with your existing decor and lighting.
                </p>
                <div className="space-y-4">
                  {[
                    "Expert advice on-site",
                    "No hidden measurement fees",
                    "Direct sample matching",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm md:text-base"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#660000]/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#660000]" />
                      </div>
                      <span className="text-gray-700 font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-[250px] md:h-[400px]">
                <img
                  src="/home/service-1.png"
                  alt="Measurement Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.section>

            {/* Service 02: Installation */}
            <motion.section
              {...fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-12 md:py-20 border-b border-gray-100"
            >
              <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-[250px] md:h-[400px]">
                <img
                  src="/home/service-2.png"
                  alt="Professional Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-5xl md:text-6xl font-serif italic text-gray-100 block mb-4">
                  02
                </span>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#220905]">
                  Professional Installation
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  Our installation team consists of master fitters who treat
                  every home like their own. Precision cutting, seamless
                  joining, and immaculate tidying are our standards.
                </p>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                    <Clock className="mx-auto mb-2 text-[#660000]" size={20} />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">
                      On-Time Service
                    </span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                    <Star className="mx-auto mb-2 text-[#660000]" size={20} />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">
                      Guaranteed Finish
                    </span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Commitment Banner - Diubah padding dan arah flex pada mobile */}
            <motion.div
              {...fadeIn}
              className="bg-[#660000] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 my-16 md:my-20 text-white flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left"
            >
              <div className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-medium mb-4 text-white">
                  Our Commitment
                </h2>
                <p className="text-white/70 text-sm md:text-base">
                  Much of our business comes from repeat clients and referrals—a
                  testament to the trust we’ve built over the years in London.
                </p>
              </div>
              <div className="flex -space-x-3 md:-space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#660000] bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="Client"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#660000] bg-white flex items-center justify-center text-[#660000] font-bold text-[10px] md:text-xs">
                  +2k
                </div>
              </div>
            </motion.div>

            {/* Location & CTA Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 mb-20">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium mb-4 italic">
                    Visit Our Showroom
                  </h3>
                  <p className="text-gray-500 mb-6 text-sm md:text-base">
                    Experience our collection in person. Our experts are ready
                    to guide you through our premium selection.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#660000] shrink-0">
                        <MapPin size={20} />
                      </div>
                      <span className="font-medium text-sm md:text-base text-[#220905]">
                        Leyton, London, E10
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#660000] shrink-0">
                        <Phone size={20} />
                      </div>
                      <span className="font-medium text-sm md:text-base text-[#220905]">
                        +44 20 1234 5678
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  target="_blank"
                  to={`https://wa.me/6281234567890?text=${encodeURIComponent("Hello! I am interested in your product.")}`}
                  className="w-full py-4 md:py-5 bg-[#220905] text-white rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-[#660000] transition-all group text-sm md:text-base"
                >
                  <Calendar
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Book Free Survey
                </Link>
              </div>

              {/* Google Maps Embed - Tinggi dikurangi di mobile */}
              <div className="h-[300px] md:h-[400px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.252062534062!2d-0.015241423405785041!3d51.56360697182583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d7639556857%3A0xc0747447477382d3!2sLeyton%2C%20London!5e0!3m2!1sen!2suk!4v1711234567890!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standard Carpets Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetailService;
