import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradualBlurMemo from "@/components/GradualBlur";
import type { Product } from "@/configs/products";
import GalleryTilePreview from "@/components/GalleryTilePreview";

interface GalleryTilePreviewProps {
  title: string;
  description: string;
  heroImage: string;
  productsList: Product[];
}

const TilesPage: React.FC<GalleryTilePreviewProps> = (props) => {
  return (
    <>
      <div className="min-h-screen bg-white text-[#220905] font-sans selection:bg-[#660000] selection:text-white">
        <Navbar />

        <GalleryTilePreview
          title={props.title}
          description={props.description}
          heroImage={props.heroImage}
          productsList={props.productsList}
        />

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

export default TilesPage;
