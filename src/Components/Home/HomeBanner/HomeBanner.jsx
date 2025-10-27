
import { Link } from "react-router-dom";

export default function HomeBanner() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden h-[75vh]">
      {/* خلفية الصورة والتعتيم */}
      <div className="absolute inset-0 bg-servicesHeaderBG bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/50" />

      {/* المحتوى */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 sm:py-28 lg:py-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
          أهلاً بك في
          <span className="text-yellow-400"> بيتــك</span>
        </h1>

        <h3 className="text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-bold leading-relaxed mb-12">
          نحن هنا لنقدم لك أفضل الخدمات المنزلية في أي وقت.
          <br /> من التنظيف والصيانة إلى إصلاح الأجهزة، وكل شيء في ما بينهما.
        </h3>
        
        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(234,179,8,0.6)]">
            <Link to="/services" > 
            <span className="relative z-10 flex items-center gap-3">
              ابدأ الآن
              <svg
                className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span> </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>

          <button className="group px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/50 hover:shadow-xl">
            <Link to="/services" > 
            <span className="flex items-center gap-3">
              تعرف على خدماتنا
              <svg
                className="w-6 h-6 transform group-hover:rotate-45 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span> </Link>
          </button>
        </div>
      </div>

      {/* مؤشر التمرير */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
    </section>
  );
}
