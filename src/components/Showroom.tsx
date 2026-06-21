import React from "react";
import { MapPin, Phone, Calendar } from "lucide-react";
import { Link } from "react-router";
import { siteContact } from "@/configs/contact";

const Showroom: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-medium mb-4 italic text-[#220905]">
              Visit Our Showroom
            </h3>
            <p className="text-gray-500 mb-6 text-sm md:text-base">
              Experience our collection in person. Our experts are ready
              to guide you through our premium selection.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#660000] shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="font-medium text-sm md:text-base text-[#220905]">
                  {siteContact.address}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-[#660000] shrink-0">
                  <Phone size={20} />
                </div>
                <span className="font-medium text-sm md:text-base text-[#220905]">
                  {siteContact.phoneNumber}
                </span>
              </div>
            </div>
          </div>
          <Link
            target="_blank"
            to={`https://wa.me/${siteContact.whatsappNumber}?text=${encodeURIComponent(siteContact.whatsappMessage)}`}
            className="w-full py-4 md:py-5 bg-[#220905] text-white rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-[#660000] transition-all group text-sm md:text-base"
          >
            <Calendar
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
            Book Free Survey
          </Link>
        </div>

        {/* Google Maps Embed - Tinggi dikurangi di mobile */}
        <div className="h-[300px] md:h-[400px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
          <iframe
            src={siteContact.googleMapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standard Carpets Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Showroom;
