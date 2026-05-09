import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Heart,
  ShieldCheck,
  ArrowRight,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chip from "@/components/Chip";
import TileImage from "@/components/TileImage";
import { Link } from "react-router";
import { siteContact } from "@/configs/contact";

const AboutPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  };

  const stats = [
    {
      label: "Years Experience",
      value: "20+",
      icon: <Award className="text-[#660000]" />,
    },
    {
      label: "Happy Families",
      value: "2,000+",
      icon: <Users className="text-[#660000]" />,
    },
    {
      label: "Project Completed",
      value: "5,000+",
      icon: <ShieldCheck className="text-[#660000]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#220905] selection:bg-[#660000] selection:text-white">
      <Navbar />

      <main className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 mb-12 md:mb-20">
          <motion.div {...fadeIn} className="max-w-3xl">
            <Chip>About Us</Chip>
            <h1 className="text-4xl md:text-7xl font-medium mt-6 mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Standard Carpets: <br />
              <span className="text-[#660000] italic font-serif">
                A Legacy of Quality.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Based in {siteContact.address}, we are a family-owned business proudly
              serving homes and businesses across East London for over two
              decades.
            </p>
          </motion.div>
        </section>

        {/* IMAGE GRID - Responsive Fix */}
        <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
          <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[600px]">
            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 h-[300px] md:h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group"
            >
              <TileImage
                src="/tiles/carpet/lewis-abbott/herringbone/copper-preview.png"
                alt="Modern Flooring"
                eager
                pictureClassName="block w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            </motion.div>

            {/* Side Images/Content */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-[200px] md:h-1/2 rounded-[2rem] overflow-hidden shadow-lg"
              >
                <TileImage
                  src="/tiles/lvt/abingdon/smokey-oak-preview.png"
                  alt="Craftsmanship"
                  pictureClassName="block w-full h-full"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-auto md:h-1/2 bg-[#660000] rounded-[2rem] p-8 flex flex-col justify-end text-white"
              >
                <Quote size={32} className="mb-4 opacity-50" />
                <p className="text-lg font-medium leading-snug">
                  "Flooring that looks beautiful, lasts longer, and feels
                  right."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSION & EXPERIENCE SECTION */}
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 md:mb-8 leading-tight">
                Built on Trust, <br className="hidden md:block" />
                Driven by Excellence
              </h2>
              <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Standard Carpets was built on experience, craftsmanship, and
                  trust. We have helped thousands of customers transform their
                  spaces with solutions tailored for everyday living.
                </p>
                <p>
                  From the first consultation to the final installation, our
                  promise is simple:
                  <strong className="text-[#220905]">
                    {" "}
                    honest advice, quality products, and service that exceeds
                    expectations.
                  </strong>
                </p>
              </div>

              {/* Stats Grid - Responsive Fix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 md:mt-12">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-row sm:flex-col items-center sm:text-center p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-sm gap-4 sm:gap-0"
                  >
                    <div className="flex justify-center sm:mb-3">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-[#220905]">
                        {stat.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-xl shadow-gray-200/50 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-medium mb-6 md:mb-8 flex items-center gap-3 text-[#220905]">
                  <Heart className="text-[#660000]" fill="#660000" size={20} />
                  Why Choose Us?
                </h3>
                <ul className="space-y-4 md:space-y-6">
                  {[
                    "Over 20 years of industry experience",
                    "Family-run business with a personal approach",
                    "High-quality flooring at competitive prices",
                    "Free home survey & measurement",
                    "Expert installation by skilled fitters",
                    "Residential & commercial projects",
                    "Trusted by homeowners & landlords",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 md:gap-4 group"
                    >
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#660000] shrink-0" />
                      <span className="text-gray-600 text-sm md:text-base font-medium group-hover:text-[#660000] transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#660000]/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="py-24 md:py-32 text-center max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Let's Find the Perfect Floor Together
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
              We don’t just sell flooring — we help you choose the right floor
              for your lifestyle, budget, and space.
            </p>
            <div className="flex justify-center">
              <Link
                target="_blank"
                to={`https://wa.me/${siteContact.whatsappNumber}?text=${encodeURIComponent(siteContact.whatsappMessage)}`}
                className="w-full sm:w-auto px-10 py-4 bg-[#660000] text-white rounded-full font-medium hover:bg-[#bd0d11] transition-all shadow-lg hover:shadow-xl shadow-[#660000]/20 flex items-center justify-center gap-2"
              >
                Book a Free Survey <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
