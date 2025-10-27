import { useState } from 'react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Mock images - استبدلهم بصورك الحقيقية
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800', alt: 'عامل 1', category: 'صيانة' },
    { id: 2, src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800', alt: 'عامل 2', category: 'كهرباء' },
    { id: 3, src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800', alt: 'عامل 3', category: 'سباكة' },
    { id: 4, src: 'https://images.unsplash.com/photo-1534329539061-64caeb388c42?w=800', alt: 'عامل 4', category: 'تنظيف' },
    { id: 5, src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800', alt: 'عامل 5', category: 'صيانة' },
    { id: 6, src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800', alt: 'عامل 6', category: 'كهرباء' },
    { id: 7, src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800', alt: 'عامل 7', category: 'سباكة' },
    { id: 8, src: 'https://images.unsplash.com/photo-1534329539061-64caeb388c42?w=800', alt: 'عامل 8', category: 'تنظيف' },
    { id: 9, src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800', alt: 'عامل 9', category: 'صيانة' },
    { id: 10, src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800', alt: 'عامل 10', category: 'كهرباء' },
    { id: 11, src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800', alt: 'عامل 11', category: 'سباكة' },
    { id: 12, src: 'https://images.unsplash.com/photo-1534329539061-64caeb388c42?w=800', alt: 'عامل 12', category: 'تنظيف' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-500"></div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-yellow-500 to-yellow-500"></div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            معرض الصور
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            تصفح مجموعة من أعمالنا وخدماتنا المتميزة
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg mb-1">{image.alt}</h3>
                    <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full">
                      {image.category}
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.alt}</h3>
              <span className="inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}