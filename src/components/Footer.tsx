import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#660000] text-white pt-24 pb-12 px-6 rounded-t-[3.5rem]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            {/* Use the logo from public/ as the site brand */}
            <img src="/logo.png" alt="GreenLeaf logo" className="w-28 h-auto" />
          </div>
          <p className="text-gray-400 mb-8 max-w-xs">
            Standard Carpet - Your go-to solution for high-quality carpets.
          </p>
          <div className="flex gap-4">
            {['X', 'In', 'Ig'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center text-sm hover:bg-white hover:text-[#220905] transition-all"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-6">Pages</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Home', 'Product', 'Project', 'Services', 'About'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6">Information</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Contact', 'Privacy Policy', 'Terms'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 pb-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© {currentYear} Standard Carpet, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;