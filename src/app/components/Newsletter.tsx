import { Send } from 'lucide-react';
import { Button } from './ui/button';

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get Special Offers
          </h2>
          <p className="text-xl text-red-50 mb-8">
            Subscribe to our newsletter and get 10% discount for your first purchase
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg border-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8">
              <Send className="w-5 h-5 mr-2" />
              Subscribe
            </Button>
          </div>

          <p className="text-red-100 text-sm mt-4">
            We respect your privacy. Your email will not be shared.
          </p>
        </div>
      </div>
    </section>
  );
}