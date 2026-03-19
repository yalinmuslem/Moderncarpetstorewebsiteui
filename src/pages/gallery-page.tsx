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
        <Navbar />

        {/* Padding disesuaikan untuk mobile (pt-20 agar tidak tertutup navbar) */}
        <section className="max-w-7xl mx-auto w-full px-6 pt-24 md:pt-10 pb-6">
          <Breadcrumbs />
        </section>

        <main>
          <GalleryScroll productsList={productsList} />
        </main>

        <Footer />
      </div>

      {/* Sembunyikan Blur di Mobile jika mengganggu performa/tampilan */}
      <div className="hidden md:block">
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
      </div>
    </>
  );
};

export default GalleryPage;
