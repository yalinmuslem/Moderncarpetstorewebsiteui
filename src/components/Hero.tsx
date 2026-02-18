import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const images = ["home/image-1.png", "home/image-2.png", "home/image-3.png"];

  const ImageSlider: React.FC<{ images: string[]; interval?: number }> = ({ images, interval = 4000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (!images || images.length <= 1) return;
      const id = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, interval);
      return () => clearInterval(id);
    }, [images, interval]);

    if (!images || images.length === 0) return null;

    const srcFor = (p: string) => (p.startsWith("/") ? p : `/${p}`);

      return (
      <div className="w-full mx-auto">
  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[600px] overflow-hidden">
          {images.map((img, i) => {
            const active = i === index;
            return (
              <img
                key={img + i}
                src={srcFor(img)}
                alt={`slide-${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out transform transition-transform ${
                  active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  willChange: "opacity, transform",
                }}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="text-center flex items-center flex-col">
      <h2 className="sr-only">Hero</h2>
      <ImageSlider images={images} interval={4500} />
    </section>
  );
};

export default Hero;
