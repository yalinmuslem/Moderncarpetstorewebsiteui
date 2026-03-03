import type { Product } from "@/configs/products";
import React from "react";

interface GalleryTilePreviewProps {
  title: string;
  description: string;
  heroImage: string;
  productsList: Product[];
}

const GalleryTilePreview: React.FC<GalleryTilePreviewProps> = ({
  title,
  description,
  heroImage,
  productsList,
}) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen pb-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </header>

      {/* --- Section 1: Large Room Preview --- */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg mb-10 bg-white">
        <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
        <img
          src={heroImage}
          alt={`Preview of ${title}`}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* --- Section 2: Grid of Tiles --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {productsList.map((carpet) => (
          <button
            key={carpet.id}
            className="group flex flex-col items-center pb-2 rounded-xl transition-all duration-200 bg-white hover:bg-gray-100 border border-gray-200 shadow-sm"
          >
            <div className="w-full aspect-square overflow-hidden rounded-t-xl mb-2">
              <img
                src={carpet.tileImg}
                alt={carpet.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xs font-medium text-center text-gray-700 px-2">
              {carpet.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryTilePreview;
