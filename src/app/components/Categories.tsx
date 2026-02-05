import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Modern Minimalist',
    count: '120+ Products',
    image: 'https://images.unsplash.com/photo-1765802536365-e2267a489a2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcnVnJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzAyMTE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-gray-900/70 to-gray-900/40'
  },
  {
    id: 2,
    name: 'Classic Persian',
    count: '85+ Products',
    image: 'https://images.unsplash.com/photo-1758887263106-48f9934c1cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJzaWFuJTIwY2FycGV0fGVufDF8fHx8MTc3MDIxMTg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-red-900/70 to-red-900/40'
  },
  {
    id: 3,
    name: 'Geometric',
    count: '95+ Products',
    image: 'https://images.unsplash.com/photo-1761699890197-46dda22b17b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBjYXJwZXQlMjBwYXR0ZXJufGVufDF8fHx8MTc3MDE5NTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-900/70 to-blue-900/40'
  },
  {
    id: 4,
    name: 'Bohemian',
    count: '70+ Products',
    image: 'https://images.unsplash.com/photo-1766405831946-2b7f1653ed8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJvaGVtaWFuJTIwcnVnfGVufDF8fHx8MTc3MDIxMTg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-900/70 to-purple-900/40'
  }
];

export function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Carpet Categories
          </h2>
          <p className="text-xl text-gray-600">
            Find carpets according to your room style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} group-hover:opacity-80 transition-opacity`}></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{category.count}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Collection
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}