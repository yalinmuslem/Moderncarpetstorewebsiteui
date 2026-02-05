import { Truck, Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free shipping for purchases over Rp 2,000,000'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% money back guarantee if product doesn\'t match'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: '2-3 days delivery throughout Indonesia'
  },
  {
    icon: Award,
    title: 'Original Products',
    description: 'All products are guaranteed original and premium quality'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}