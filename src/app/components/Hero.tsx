import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              Latest Collection 2026
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Beautify the Room with{' '}
              <span className="text-red-600">Premium Carpet</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover a collection of high-quality carpets with modern and elegant designs. 
              From classic to contemporary, we have it all.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                View Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Contact Us
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">10K+</div>
                <div className="text-gray-600">Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">4.9</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758887263106-48f9934c1cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJzaWFuJTIwY2FycGV0fGVufDF8fHx8MTc3MDIxMTg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury Persian Carpet"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-600 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}