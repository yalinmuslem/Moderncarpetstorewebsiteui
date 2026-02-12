import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[#162a1c] rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-tr-full"></div>
        </div>
        <span className="text-2xl font-bold tracking-tight text-[#162a1c]">Greenleaf</span>
      </div>
      <div className="hidden md:flex space-x-10 text-sm font-medium text-gray-500">
        {['Home', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
          <a key={item} href="#" className="hover:text-[#162a1c] transition-colors">{item}</a>
        ))}
      </div>
      <button className="p-2 text-[#162a1c]" aria-label="Search">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;