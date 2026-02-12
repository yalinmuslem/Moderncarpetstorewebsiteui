import React, { useState } from "react";
import Chip from "./Chip";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: "How long does a typical carbon footprint assessment take?",
      a: "Typically 4-6 weeks depending on data availability.",
    },
    {
      q: "What industries do you work with?",
      a: "We work across various sectors including retail, manufacturing, and services.",
    },
    {
      q: "What if we already have some data or reports?",
      a: "We can build upon existing data to refine your strategy.",
    },
    {
      q: "Do we even have the internal capability to pull this off?",
      a: "Our team guides you through every step, acting as your in-house experts.",
    },
    {
      q: "What if the rules change or targets become impossible to meet?",
      a: "We provide ongoing support to adapt your strategy to new regulations.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <Chip>FAQ</Chip>
        <h2 className="text-5xl font-medium mt-6 text-[#162a1c]">
          Frequently asked questions
        </h2>
      </div>
      <div className="">
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-4">
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left font-medium py-2 text-[#162a1c]"
            >
              <span>{faq.q}</span>
              <span className="text-2xl transition-transform duration-300">
                {openFaq === idx ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="mt-4 text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
