import { MoveRight } from "lucide-react";
import { Link } from "react-router";
import OptimizedImage from "./OptimizedImage";
import contact1 from "../assets/home/contact-1.png?preset=responsive";
import contact2 from "../assets/home/contact-2.png?preset=responsive";
import contact3 from "../assets/home/contact-3.png?preset=responsive";
import contact4 from "../assets/home/contact-4.png?preset=responsive";

import { siteContact } from "@/configs/contact";

export const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-[#f8f9f8] rounded-[3.5rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative border border-gray-100">
        <div className="md:w-1/2 z-10 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-medium mb-8 text-[#220905]">
            Contact us
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Personal consultation for home or office projects — practical
            solutions from planning to installation.
          </p>
          <Link
            target="_blank"
            to={`https://wa.me/${siteContact.whatsappNumber}?text=${encodeURIComponent(siteContact.whatsappMessage)}`}
          >
            <button className="bg-[#660000] cursor-pointer text-white px-10 py-5 rounded-full font-medium flex items-center gap-2 mx-auto md:mx-0 hover:bg-[#bd0d11] transition-all">
              Let's Talk <MoveRight size={20} />
            </button>
          </Link>
        </div>

        {/* CTA Decorative Images */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-40 rounded-3xl overflow-hidden bg-gray-200">
              <OptimizedImage
                source={contact1}
                alt="nature"
                sizes="(min-width: 768px) 25vw, 50vw"
                pictureClassName="block w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-60 rounded-3xl overflow-hidden bg-gray-200">
              <OptimizedImage
                source={contact2}
                alt="office"
                sizes="(min-width: 768px) 25vw, 50vw"
                pictureClassName="block w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-60 rounded-3xl overflow-hidden bg-gray-200">
              <OptimizedImage
                source={contact3}
                alt="leaf"
                sizes="(min-width: 768px) 25vw, 50vw"
                pictureClassName="block w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 rounded-3xl overflow-hidden bg-gray-200">
              <OptimizedImage
                source={contact4}
                alt="person"
                sizes="(min-width: 768px) 25vw, 50vw"
                pictureClassName="block w-full h-full"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
