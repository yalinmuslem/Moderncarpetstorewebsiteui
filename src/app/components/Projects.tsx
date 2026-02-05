import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Modern Living Room Makeover',
    client: 'The Residence Hotel',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwY2FycGV0fGVufDF8fHx8MTczODc2MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Luxury Bedroom Suite',
    client: 'Private Residence',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwY2FycGV0JTIwbHV4dXJ5fGVufDF8fHx8MTczODc2MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Corporate Office Design',
    client: 'Tech Solutions Inc.',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjYXJwZXQlMjBkZXNpZ258ZW58MXx8fHwxNzM4NzYzNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Restaurant Interior',
    client: 'Fine Dining Restaurant',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzM4NzYzNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    title: 'Penthouse Living Area',
    client: 'Skyline Apartments',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Mzg3NjM3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    title: 'Boutique Hotel Lobby',
    client: 'Urban Stay Hotels',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzM4NzYzNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600">
            Explore our completed projects across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="inline-block bg-red-600 text-xs px-3 py-1 rounded-full mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{project.client}</p>
                <div className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
