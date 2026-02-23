import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradualBlurMemo from "@/components/GradualBlur";
import GalleryScroll from "@/components/GalleryScroll";
import { CORMAR_CARPET_BRAND, type Product } from "@/configs/products";
import FlowingMenu from "@/components/FlowingMenu";
import WiderGrid from "@/components/WiderGrid";

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Sonoma",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const WiderPage: React.FC<{ productsList: Product[] }> = ({
  productsList,
}: {
  productsList: Product[];
}) => {
  return (
    <>
      <div className="min-h-screen bg-white text-[#220905] font-sans selection:bg-[#660000] selection:text-white">
        {/* 1. HEADER & NAVIGATION */}
        <Navbar />

        <section className="max-w-7xl mx-auto">
          <div className="flex flex-row-reverse flex-wrap justify-between gap-4 p-4 my-2">
            <p className="w-1/4">
              Style meets comfort with our Fairisle wool loop range—durable,
              elegant, and made for the home.
            </p>
            <h2 className="text-6xl font-bold">Cormar Carpets</h2>
          </div>

          <WiderGrid items={CORMAR_CARPET_BRAND} />
        </section>

        <section className="max-w-7xl mx-auto">
          <div className="flex flex-row flex-wrap justify-between gap-4 p-4">
            <p className="w-1/4">
              Style meets comfort with our Fairisle wool loop range—durable,
              elegant, and made for the home.
            </p>
            <h2 className="text-6xl font-bold">Furlong Flooring Southern</h2>
          </div>

          <WiderGrid items={CORMAR_CARPET_BRAND} />
        </section>

        <section className="max-w-7xl mx-auto">
          <div className="flex flex-row-reverse flex-wrap justify-between gap-4 p-4">
            <p className="w-1/4">
              Style meets comfort with our Fairisle wool loop range—durable,
              elegant, and made for the home.
            </p>
            <h2 className="text-6xl font-bold">Abingdon Flooring</h2>
          </div>

          <WiderGrid items={CORMAR_CARPET_BRAND} />
        </section>

        <section className="max-w-7xl mx-auto">
          <div className="flex flex-row flex-wrap justify-between gap-4 p-4">
            <p className="w-1/4">
              Style meets comfort with our Fairisle wool loop range—durable,
              elegant, and made for the home.
            </p>
            <h2 className="text-6xl font-bold">Associated Weavers</h2>
          </div>

          <WiderGrid items={CORMAR_CARPET_BRAND} />
        </section>

        <section className="max-w-7xl mx-auto">
          <div className="flex flex-row-reverse flex-wrap justify-between gap-4 p-4">
            <p className="w-1/4">
              Style meets comfort with our Fairisle wool loop range—durable,
              elegant, and made for the home.
            </p>
            <h2 className="text-6xl font-bold">Floors By Lewis Abbott</h2>
          </div>

          <WiderGrid items={CORMAR_CARPET_BRAND} />
        </section>

        {/* 9. FOOTER SECTION */}
        <Footer />
      </div>
    </>
  );
};

export default WiderPage;
