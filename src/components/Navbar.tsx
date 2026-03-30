import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Product", "About", "Services"];

  return (
    <nav className="relative z-50">
      <div className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" className="w-12 rounded-lg" alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-500">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="hover:text-[#220905] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden p-2 text-[#220905] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-current rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 pb-8 gap-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-600 hover:text-[#220905] py-2 border-b border-gray-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
