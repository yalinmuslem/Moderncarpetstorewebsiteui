import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ABINGDONG_FLOORING_CARPET_BRAND,
  ASSOCIATED_WEAVERS_CARPET_BRAND,
  CORMAR_CARPET_BRAND,
  FURLONG_FLOORING_SOUTHERN_CARPET_BRAND,
  LEWIS_ABBOTT_CARPET_BRAND,
  type Product,
} from "@/configs/products";
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

        <main className="flex flex-col gap-20">
          <section className="max-w-7xl mx-auto">
            <div className="flex flex-row-reverse flex-wrap justify-between gap-4 px-4 my-2">
              <p className="w-1/4">
                Style meets comfort with our Fairisle wool loop range—durable,
                elegant, and made for the home.
              </p>
              <h2 className="text-6xl font-bold">Cormar Carpets</h2>
            </div>

            <WiderGrid items={CORMAR_CARPET_BRAND} />
          </section>

          <section className="max-w-7xl mx-auto">
            <div className="flex flex-row flex-wrap justify-between gap-4 px-4">
              <p className="w-1/4">
                From long-lasting hallway carpets to luxury bedroom carpets,
                explore our award-winning carpet ranges designed for style,
                comfort, and durability.
              </p>
              <h2 className="text-6xl font-bold">Furlong Flooring Southern</h2>
            </div>

            <WiderGrid items={FURLONG_FLOORING_SOUTHERN_CARPET_BRAND} />
          </section>

          <section className="max-w-7xl mx-auto">
            <div className="flex flex-row-reverse flex-wrap justify-between gap-4 px-4">
              <p className="w-1/4">
                British Heritage. Modern Innovation. QualityYou Can Trust.
              </p>
              <h2 className="text-6xl font-bold">Abingdon Flooring</h2>
            </div>

            <WiderGrid items={ABINGDONG_FLOORING_CARPET_BRAND} />
          </section>

          <section className="max-w-7xl mx-auto">
            <div className="flex flex-row flex-wrap justify-between gap-4 px-4">
              <p className="w-1/4">
                Associated Weavers is your ideal flooring partner for your home,
                your office, or any commercial project. Flooring has a
                tailor-made solution to suit your needs!
              </p>
              <h2 className="text-6xl font-bold">Associated Weavers</h2>
            </div>

            <WiderGrid items={ASSOCIATED_WEAVERS_CARPET_BRAND} />
          </section>

          <section className="max-w-7xl mx-auto">
            <div className="flex flex-row-reverse flex-wrap justify-between gap-4 px-4">
              <p className="w-1/4">
                Flooring experts for over 75 years, Lewis Abbott were
                established in 1945. A family run business specialising in
                supplying high quality carpet and flooring products and
                providing exceptional service to its customers.
              </p>
              <h2 className="text-6xl font-bold">Floors By Lewis Abbott</h2>
            </div>

            <WiderGrid items={LEWIS_ABBOTT_CARPET_BRAND} />
          </section>
        </main>
        {/* 9. FOOTER SECTION */}
        <Footer />
      </div>
    </>
  );
};

export default WiderPage;
