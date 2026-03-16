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
    <div className="max-w-7xl mx-auto min-h-screen px-4 md:px-6 pb-20">
      {/* Header: Disesuaikan margin dan ukuran font */}
      <header className="mb-6 md:mb-10 text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2 md:mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </header>

      {/* Hero Image: Border radius lebih lembut di mobile */}
      <div className="relative w-full h-[250px] sm:h-[400px] md:h-[550px] overflow-hidden rounded-2xl shadow-md mb-8 md:mb-12">
        <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
        <img
          src={heroImage}
          alt={`Preview of ${title}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Grid: 2 kolom di HP, 3 di Tablet, 6 di Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
        {productsList.map((carpet) => (
          <button
            key={carpet.id}
            className="group flex flex-col items-center pb-3 rounded-2xl transition-all duration-300 bg-white hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md active:scale-95"
          >
            <div className="w-full aspect-square overflow-hidden rounded-t-2xl mb-3">
              <img
                src={carpet.tileImg}
                alt={carpet.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-center text-gray-600 px-3 line-clamp-1">
              {carpet.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryTilePreview;
