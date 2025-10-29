
// import worker1 from '../../assets/About/worker1.jpg'
// import worker2 from '../../assets/About/worker2.jpg'
// import worker3 from '../../assets/About/worker3.jpg'
// import worker4 from '../../assets/About/worker4.jpg'
// import worker5 from '../../assets/About/worker5.jpg'

// export default function 
// () {
//   return (
//     // <!-- gallery -->
// <section className="text-gray-700 body-font" id="gallery">
//     <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
//         صورنا
//     </div>

//     <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

//         <div className="group relative">
//             <img
//       src={worker4}
//       alt="Image 1" 
//       className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
//     />
//         </div>

//         <div className="group relative">
//             <img
//       src={worker2}
//       alt="Image 1"
//       className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
//     />
//         </div>

//         <div className="group relative">
//             <img
//       src={worker5}
//       alt="Image 1"
//       className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
//     />
//         </div>
//         <div className="group relative">
//             <img
//       src={worker3}
//       alt="Image 1"
//       className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
//     />
//         </div>
//     </div>

// </section>
//   )
// }
////////////////////////////////////////////////////////////////////////////

// import { Link } from "react-router-dom";

// export default function Gallery() {
//   // Mock images - replace with your actual imports
//   const images = [
//     { id: 1, src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500', alt: 'عامل 1' },
//     { id: 2, src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500', alt: 'عامل 2' },
//     { id: 3, src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500', alt: 'عامل 3' },
//     { id: 4, src: 'https://images.unsplash.com/photo-1534329539061-64caeb388c42?w=500', alt: 'عامل 4' },
//   ];

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden" id="gallery">
      
//       {/* Background Decorations */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           {/* Top Decorative Line */}
//           <div className="flex items-center justify-center gap-3 mb-6">
//             <div className="h-px w-20 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-500"></div>
//             <div className="flex gap-1.5">
//               <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
//               <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
//               <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
//             </div>
//             <div className="h-px w-20 bg-gradient-to-l from-transparent via-yellow-500 to-yellow-500"></div>
//           </div>

//           {/* Title */}
//           <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
//             <span className="inline-block relative">
//               معرض الصور
//               <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
//             </span>
//           </h2>
          
//           <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
//             لمحة عن فريق العمل المحترف وجودة خدماتنا
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {images.map((image, index) => (
//             <div 
//               key={image.id}
//               className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
//               style={{
//                 animationDelay: `${index * 100}ms`,
//               }}
//             >
//               {/* Image Container */}
//               <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
//                 />
                
//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 {/* Hover Content */}
//                 <div className="absolute inset-0 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
//                   <div className="text-center">
//                     <h3 className="text-white font-bold text-xl mb-2">{image.alt}</h3>
//                     <div className="flex items-center justify-center gap-2">
//                       <div className="h-px w-8 bg-yellow-400"></div>
//                       <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                       <div className="h-px w-8 bg-yellow-400"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Corner Accent */}
//                 <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl"></div>
                
//                 {/* Bottom Accent */}
//                 <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//               </div>

//               {/* Decorative Border Effect */}
//               <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <button className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-950 font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transform">
//             <Link to="/galleryPage" className="relative z-10 flex items-center gap-3">
//               <span>شاهد المزيد</span>
             
//               <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </Link>
//             <div className="absolute inset-0 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//           </button>
//         </div>

//       </div>

//       {/* Bottom Decorative Wave */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
//     </section>
//   );
// }

//////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react';
import worker1 from '../../assets/About/worker1.jpg'
import worker2 from '../../assets/About/worker2.jpg'
import worker3 from '../../assets/About/worker3.jpg'
import worker4 from '../../assets/About/worker4.jpg'
import worker5 from '../../assets/About/worker5.jpg'

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock images - استبدلهم بصورك الحقيقية
  
  const images = [worker1, worker2, worker3, worker4, worker5];


  // Auto play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-[90%] mx-auto rounded-2xl shadow-2xl">
      
      {/* Carousel Wrapper */}
      <div className="relative h-80 md:h-[520px] overflow-hidden rounded-2xl bg-gray-100">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="absolute block w-full h-full object-contain md:object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-gray-300'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={goToPrevious}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 transition">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={goToNext}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 transition">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}