
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
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const images = [worker1, worker2, worker3, worker4, worker5];

  // Auto play every 4 seconds
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlay(false);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      goToNext();
    } else if (touchEnd - touchStart > 50) {
      goToPrevious();
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlay(true);
  };

  return (
    <section className="relative py-12 md:py-20 w-full overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100" dir="rtl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Advanced Typography */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          {/* Top Decorative Element */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 flex-wrap justify-center">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-500 animate-pulse"></div>
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-yellow-500 to-yellow-500 animate-pulse"></div>
          </div>

          {/* Title */}
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
              معرض <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-gradient">الصور</span>
            </h2>
            {/* Underline Animation */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 rounded-full"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-8 max-w-2xl mx-auto font-medium leading-relaxed">
            لمحة عن فريق العمل المحترف وجودة الخدمات الممتازة التي نقدمها لعملائنا الكرام
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative group"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={resumeAutoPlay}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Wrapper */}
          <div className="relative h-64 sm:h-80 md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-200 to-gray-100">
            {/* Image Container */}
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <img
                  src={img}
                  alt={`صورة ${index + 1}`}
                  className="absolute block w-full h-full object-cover"
                />
                
                {/* Advanced Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-100 hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            ))}

            {/* Advanced Navigation Buttons */}
            {/* Previous Button */}
            <button
              type="button"
              onClick={goToPrevious}
              className="absolute top-1/2 start-0 z-30 flex items-center justify-center h-full px-3 sm:px-4 cursor-pointer group/btn focus:outline-none -translate-y-1/2 transform hover:scale-110 transition-all duration-300"
              aria-label="صورة سابقة"
            >
              <span className="inline-flex items-center justify-center w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-white/20 group-hover/btn:bg-yellow-400/80 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover/btn:scale-110">
                <svg className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </span>
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={goToNext}
              className="absolute top-1/2 end-0 z-30 flex items-center justify-center h-full px-3 sm:px-4 cursor-pointer group/btn focus:outline-none -translate-y-1/2 transform hover:scale-110 transition-all duration-300"
              aria-label="صورة التالية"
            >
              <span className="inline-flex items-center justify-center w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-white/20 group-hover/btn:bg-yellow-400/80 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover/btn:scale-110">
                <svg className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </span>
            </button>

            {/* Advanced Indicators */}
            <div className="absolute z-30 flex gap-2 sm:gap-3 -translate-x-1/2 bottom-4 sm:bottom-6 left-1/2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-500 rounded-full ring-2 ring-offset-2 ring-yellow-400 ${
                    index === currentIndex 
                      ? 'w-8 sm:w-10 h-3 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 ring-offset-slate-900' 
                      : 'w-3 sm:w-4 h-3 sm:h-4 bg-white/50 hover:bg-white/80 ring-offset-slate-900'
                  }`}
                  aria-label={`اذهب إلى الصورة ${index + 1}`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow-lg backdrop-blur-sm">
              <span>{currentIndex + 1}</span>
              <span className="text-white/70 mx-1 sm:mx-2">/</span>
              <span>{images.length}</span>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-yellow-400/30 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-orange-400/30 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 md:mt-16">
          {[
            { icon: '📸', title: 'جودة عالية', desc: 'صور احترافية عالية الجودة' },
            { icon: '👥', title: 'فريق محترف', desc: 'عمال مدربون وذوو خبرة' },
            { icon: '⭐', title: 'خدمات متميزة', desc: 'خدمات منزلية بأعلى معايير' }
          ].map((item, idx) => (
            <div key={idx} className="group relative p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}