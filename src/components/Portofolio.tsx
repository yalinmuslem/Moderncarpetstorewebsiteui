import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import React from "react";
import Chip from "./Chip";

interface PortofolioItem {
  name: string;
  img: string;
  text: string;
}

const products: PortofolioItem[] = [
  {
    name: "Kitchens",
    text: "Expand your living space with a seamless home extension. Whether you need a bigger kitchen, a new living area, or a multi-purpose space, Refit provides expertly crafted extensions.",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Loft Conversions",
    text: "Turn your unused attic into a functional room. Our loft conversions are designed to maximize space and add significant value to your home.",
    img: "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Bathrooms",
    text: "Transform your bathroom into a personal sanctuary. From modern minimalist designs to classic luxury, we handle every detail of your renovation.",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Extensions",
    text: "Expand your living space with a seamless home extension. Refit provides expertly crafted extensions designed to enhance your home's flow and usability.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
  },
];

const Portofolio: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white" >
      <div className="text-center mb-16">
        <Chip>Portofolio</Chip>
        <h2 className="text-5xl font-medium mt-6 text-[#220905]">
          What we offer
        </h2>
      </div>

      <ScrollStack >
        {products.map((product, index) => (
          <ScrollStackItem key={index}>
            <div className="flex flex-col md:flex-row items-center bg-[#f7f7f7] rounded-3xl overflow-hidden min-h-[500px] shadow-sm border border-gray-100">
              {/* Bagian Teks */}
              <div className="p-12 md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4 text-[#220905]">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{product.text}</p>
              </div>
              
              {/* Bagian Gambar */}
              <div className="md:w-1/2 h-[300px] md:h-full">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default Portofolio;