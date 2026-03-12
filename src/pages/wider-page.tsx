import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WiderGrid from "@/components/WiderGrid";
import type { BrandSection } from "@/configs/brands";
import Breadcrumbs from "@/components/BreadCrumbs";

// Definisi interface untuk konten deskripsi
interface PageHeaderContent {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  featuresTitle: string;
  features: string[];
}

interface WiderPageProps {
  brandList: BrandSection[];
  headerContent: PageHeaderContent; // Props baru
}

const WiderPage: React.FC<WiderPageProps> = ({ brandList, headerContent }) => {
  return (
    <div className="min-h-screen bg-white text-[#220905] font-sans selection:bg-[#660000] selection:text-white">
      <Navbar />

      <main className="flex flex-col gap-20 ">
        <section className="max-w-7xl mx-auto w-full px-4">
          <Breadcrumbs />
        </section>

        {/* Hero Description Section - Data diambil dari props */}
        <section className="max-w-7xl mx-auto w-full px-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Side: Title & Paragraphs */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6 italic">
                {headerContent.title} <br />
                <span className="text-gray-400 not-italic">
                  {headerContent.subtitle}
                </span>
              </h1>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                {headerContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Side: Features List */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-4 md:mt-0">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#660000] mb-6">
                {headerContent.featuresTitle}
              </h4>
              <ul className="grid grid-cols-1 gap-4">
                {headerContent.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#660000] mt-2" />
                    <span className="text-sm md:text-base font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="max-w-7xl mx-auto w-full border-gray-100" />

        {/* Brand Lists Section */}
        {brandList.map((section, index) => (
          <section key={index} className="max-w-7xl mx-auto w-full">
            <div
              className={`flex flex-wrap justify-between gap-4 px-4 mb-8 ${
                section.reverse ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <h2 className="text-4xl md:text-6xl font-bold italic">
                {section.title}
              </h2>
              <p className="w-full md:w-1/4 text-sm md:text-base text-gray-500 leading-relaxed">
                {section.description}
              </p>
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
