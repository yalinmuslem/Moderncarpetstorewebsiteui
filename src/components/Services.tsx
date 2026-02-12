import React from "react";
import Chip from "./Chip";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Carbon footprinting & reporting",
    description:
      "Measure your emissions with clarity—laying the foundation for smarter action.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
  },
  {
    title: "Sustainability Strategy",
    description:
      "Tailored roadmaps to help your business thrive in a low-carbon economy.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  },
  {
    title: "Impact Communication",
    description:
      "Share your journey authentically with stakeholders and customers alike.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
  },
];

const ServiceCard: React.FC<ServiceItem> = ({ title, description, image }) => {
  return (
    <div>
      <div className="rounded-[2.5rem] overflow-hidden mb-6 h-80 group cursor-pointer">
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={title}
        />
      </div>
      <h3 className="text-2xl font-medium mb-3 text-[#162a1c]">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20 relative">
      <div className="md:sticky md:top-20 h-fit">
        <Chip>Services</Chip>

        <h2 className="text-5xl font-medium mt-6 mb-8 text-[#162a1c] leading-[1.1]">
          Your guide for <br /> the road ahead
        </h2>
        <p className="text-gray-500 text-lg max-w-md">
          We help small and mid-sized businesses navigate the path to
          sustainability. Whether you're setting out or refining your route,
          we'll guide you every step of the way.
        </p>
      </div>

      <div className="space-y-20">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
