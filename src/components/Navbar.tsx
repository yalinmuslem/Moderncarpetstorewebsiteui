import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <img src="/logo.png" className="w-12 rounded-lg" />
        {/* <span className="text-2xl font-bold tracking-tight text-[#220905]">
          Standard Carpets
        </span> */}
      </div>
      <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-500">
        {["Home", "Services", "About", "Blog", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="hover:text-[#220905] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <button className="p-2 text-[#220905]" aria-label="Search">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
