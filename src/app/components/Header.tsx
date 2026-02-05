import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/7debed77dd564425f84186c474c7cb785226a20f.png';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <p>Free shipping for purchases over Rp. 2,000,000</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">About Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="Standard Carpets Logo" 
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-red-600"></div>
              </div>
            </div>
          </div>


          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Carpet</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Project</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Review</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Galery</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}