import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/7debed77dd564425f84186c474c7cb785226a20f.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                  src={logoImage} 
                  alt="Standard Carpets Logo" 
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                />
            </div>
            <p className="text-sm mb-4">
              Trusted carpet store with a complete collection and premium quality to beautify your room.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">Product Catalog</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">Promotions</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">How to Order</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">Shipping</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">Returns</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Jl. Raya Karpet No. 123<br />
                  Jakarta Selatan, 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-sm">info@carpetstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Carpet Store. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-red-600 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-600 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}