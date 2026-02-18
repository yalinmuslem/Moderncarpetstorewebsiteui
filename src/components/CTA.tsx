import { MoveRight } from "lucide-react";
import React from "react";

export const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-[#f8f9f8] rounded-[3.5rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative border border-gray-100">
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-medium mb-8 text-[#220905]">
            Ready to take <br /> climate action?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Book a free consultation to speak with a carbon expert and discuss
            your goals. Let's build a smarter, greener future for your business.
          </p>
          <button className="bg-[#660000] text-white px-10 py-5 rounded-full font-medium flex items-center gap-2 mx-auto md:mx-0 hover:bg-[#bd0d11] transition-all">
            Book my free consultation <MoveRight size={20} />
          </button>
        </div>

        {/* CTA Decorative Images */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-40 rounded-3xl overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover"
                alt="nature"
              />
            </div>
            <div className="h-60 rounded-3xl overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover"
                alt="office"
              />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-60 rounded-3xl overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover"
                alt="leaf"
              />
            </div>
            <div className="h-40 rounded-3xl overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover"
                alt="person"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
