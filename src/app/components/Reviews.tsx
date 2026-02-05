import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    rating: 5,
    comment: 'Exceptional quality and service! The Persian carpet I purchased completely transformed my living room. The colors are vibrant and the craftsmanship is outstanding.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTczODc2MzcwMHww&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Homeowner',
    rating: 5,
    comment: 'Best carpet store in town! The staff was incredibly helpful in choosing the perfect carpet for our bedroom. Fast delivery and professional installation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Mzg3NjM3MDB8MA&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Hotel Manager',
    rating: 5,
    comment: 'We furnished our entire hotel with carpets from Standard Carpets. The quality is premium and they handle large orders professionally. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM4NzYzNzAwfDA&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Architect',
    rating: 4,
    comment: 'Great selection of modern and traditional designs. I always recommend Standard Carpets to my clients. Their customer service is top-notch.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Mzg3NjM3MDB8MA&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Restaurant Owner',
    rating: 5,
    comment: 'The geometric carpet we chose for our restaurant looks amazing! It\'s durable, easy to clean, and adds a sophisticated touch to our space.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3Mzg3NjM3MDB8MA&ixlib=rb-4.1.0&q=80&w=400'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Property Developer',
    rating: 5,
    comment: 'We\'ve worked with Standard Carpets on multiple projects. Their quality is consistent and they always deliver on time. A reliable partner!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM4NzYzNzAwfDA&ixlib=rb-4.1.0&q=80&w=400'
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-xl text-gray-600">
            See what our satisfied customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-red-100" />
              
              <div className="flex items-center gap-4 mb-4">
                <ImageWithFallback
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
