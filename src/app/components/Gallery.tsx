import { ImageWithFallback } from './figma/ImageWithFallback';
import { ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1758887263106-48f9934c1cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJzaWFuJTIwY2FycGV0fGVufDF8fHx8MTc3MDIxMTg4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Luxury Persian Carpet',
    size: 'large'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1765802536365-e2267a489a2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcnVnJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzAyMTE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Minimalist Living Room',
    size: 'medium'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1761699890197-46dda22b17b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBjYXJwZXQlMjBwYXR0ZXJufGVufDF8fHx8MTc3MDE5NTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Geometric Pattern Carpet',
    size: 'medium'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1766405831946-2b7f1653ed8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJvaGVtaWFuJTIwcnVnfGVufDF8fHx8MTc3MDIxMTg4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Bohemian Carpet',
    size: 'large'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1599327285939-4ee9088f2b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmVhJTIwcnVnJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwMjExODg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern Area Rug',
    size: 'medium'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1756362846991-f4509403ec4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FycGV0JTIwdGV4dHVyZXxlbnwxfHx8fDE3NzAyMTE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Vintage Carpet Texture',
    size: 'medium'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwY2FycGV0fGVufDF8fHx8MTczODc2MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Contemporary Interior',
    size: 'medium'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwY2FycGV0JTIwbHV4dXJ5fGVufDF8fHx8MTczODc2MzcwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Luxury Bedroom',
    size: 'large'
  }
];

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            A showcase of our premium carpet installations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                image.size === 'large' 
                  ? 'col-span-2 row-span-2' 
                  : ''
              }`}
            >
              <div className="aspect-square relative overflow-hidden">
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-3">
                      <ZoomIn className="w-6 h-6 text-gray-900" />
                    </div>
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
