import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const products = [
  {
    id: 1,
    name: 'Classic Persian Premium Carpet',
    price: 'Rp 3.500.000',
    originalPrice: 'Rp 4.200.000',
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1758887263106-48f9934c1cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJzaWFuJTIwY2FycGV0fGVufDF8fHx8MTc3MDIxMTg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Best Seller',
    badgeColor: 'bg-red-600'
  },
  {
    id: 2,
    name: 'Modern Area Rug',
    price: 'Rp 2.800.000',
    originalPrice: '',
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1599327285939-4ee9088f2b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmVhJTIwcnVnJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMjExODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'New',
    badgeColor: 'bg-green-600'
  },
  {
    id: 3,
    name: 'Contemporary Geometric Carpet',
    price: 'Rp 3.200.000',
    originalPrice: 'Rp 3.800.000',
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1761699890197-46dda22b17b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBjYXJwZXQlMjBwYXR0ZXJufGVufDF8fHx8MTc3MDE5NTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Promo',
    badgeColor: 'bg-orange-600'
  },
  {
    id: 4,
    name: 'Vintage Smooth Texture Carpet',
    price: 'Rp 2.500.000',
    originalPrice: '',
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1756362846991-f4509403ec4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FycGV0JTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAyMTE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: '',
    badgeColor: ''
  },
  {
    id: 5,
    name: 'Scandinavian Minimalist Carpet',
    price: 'Rp 2.200.000',
    originalPrice: 'Rp 2.700.000',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1765802536365-e2267a489a2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcnVnJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzAyMTE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Promo',
    badgeColor: 'bg-orange-600'
  },
  {
    id: 6,
    name: 'Colorful Bohemian Carpet',
    price: 'Rp 2.900.000',
    originalPrice: '',
    rating: 4.6,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1766405831946-2b7f1653ed8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJvaGVtaWFuJTIwcnVnfGVufDF8fHx8MTc3MDIxMTg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: '',
    badgeColor: ''
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600">
            Our customers' favorite carpet collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white border-0`}>
                    {product.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-5 h-5 text-gray-700" />
                </Button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-red-600">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}