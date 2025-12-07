import { useState } from "react";

export default function ServicesCircleAround() {
const [hovered, setHovered] = useState(null);

const services = [
{ id: 1, name: 'تركيب و صيانة الأجهزة', icon: '🔧' },
{ id: 2, name: 'عاملة منزلية', icon: '🧹' },
{ id: 3, name: 'تسليك الصرف', icon: '🚰' },
{ id: 4, name: 'السباكة', icon: '🔩' },
{ id: 5, name: 'عاملات نظافة', icon: '✨' },
{ id: 6, name: 'النظافة', icon: '🧼' },
{ id: 7, name: 'مكافحة الحشرات', icon: '🦟' },
{ id: 8, name: 'التكييف', icon: '❄️' },
];



return ( 
 <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            خدماتنا
          </h2>
          <p className="text-gray-600 text-lg">نقدم مجموعة متكاملة من الخدمات المنزلية</p>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => {
            const isHovered = hovered === service.id;
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer transform transition-all duration-300 ${isHovered ? 'scale-105 -translate-y-2' : ''}`}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-4xl transform transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-teal-800 group-hover:text-gray-600 transition-colors">
                    {service.name}
                  </h3>
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

);
}
