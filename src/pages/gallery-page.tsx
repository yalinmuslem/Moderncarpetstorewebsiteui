import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradualBlurMemo from "@/components/GradualBlur";
import GalleryScroll from "@/components/GalleryScroll";
import type { Product } from "@/configs/products";
import Breadcrumbs from "@/components/BreadCrumbs";

const GalleryPage: React.FC<{
  productsList: Product[];
}> = ({ productsList }) => {
  return (
    <>
      <div className="min-h-screen bg-white text-[#220905] font-sans selection:bg-[#660000] selection:text-white">
        {/* 1. HEADER & NAVIGATION */}
        <Navbar />

        <section className="max-w-7xl mx-auto w-full px-6">
          <Breadcrumbs />
        </section>

        <GalleryScroll productsList={productsList} />

        {/* 9. FOOTER SECTION */}
        <Footer />
      </div>

      <GradualBlurMemo
        target="page"
        position="bottom"
        height="6rem"
        strength={0.5}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      />
    </>
  );
};

export default GalleryPage;
