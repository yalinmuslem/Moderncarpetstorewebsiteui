import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WiderGrid from "@/components/WiderGrid";
import type { BrandSection } from "@/configs/brands";

const WiderPage: React.FC<{ brandList: BrandSection[] }> = ({ brandList }) => {
  return (
    <div className="min-h-screen bg-white text-[#220905] font-sans selection:bg-[#660000] selection:text-white">
      <Navbar />

      <main className="flex flex-col gap-20 py-10">
        {brandList.map((section, index) => (
          <section key={index} className="max-w-7xl mx-auto w-full">
            <div
              className={`flex flex-wrap justify-between gap-4 px-4 mb-6 ${
                section.reverse ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <p className="w-full md:w-1/4 text-sm md:text-base">
                {section.description}
              </p>
              <h2 className="text-4xl md:text-6xl font-bold">
                {section.title}
              </h2>
            </div>

            <WiderGrid items={section.items} />
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default WiderPage;
