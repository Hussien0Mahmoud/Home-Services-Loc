// import who2 from '../../assets/About/why3.jpg'
// export default function AboutVision() {
//   return (
//     // <!-- رؤيتنا -->
// <section className="bg-gray-100" >
//     <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//         <div className="mt-12 md:mt-0">
//                 <img src={who2} alt="About Us Image" className="object-cover rounded-3xl shadow-md"/>
//             </div>
//             <div className="max-w-lg">
//                 <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">لماذا نحن؟ </h2>
//                 <p className="mt-4 text-gray-600 text-lg">
//                   <span className=" font-bold text-gray-700 pe-2">سهولة الاستخدام:</span>
//                      نقدم تجربة مميزة عبر منصة سهلة الاستخدام تتيح لك العثور على الفني المناسب وطلب الخدمة بخطوات بسيطة.
//                      </p>
//                 <p className="mt-2 text-gray-600 text-lg">
//                   <span className=" font-bold text-gray-700 pe-2">احترافية الفنيين:</span>
//                 نعمل مع مجموعة مختارة من الفنيين المدربين وذوي الخبرة لضمان تقديم خدمات موثوقة.
//                  </p>
//                 <p className="mt-2 text-gray-600 text-lg">
//                    <span className=" font-bold text-gray-700 pe-2">الشفافية في الأسعار:</span>
//                 نضمن لك أسعارًا واضحة ومنافسة بدون أي تكاليف مخفية.
//                 </p>
//                 <p className="mt-2 text-gray-600 text-lg">
//                   <span className=" font-bold text-gray-700 pe-2">التزامنا بالجودة:</span>
//                 نحرص على تقديم خدمات تلبي توقعاتك وتوفر لك راحة البال.
//                  </p>
//                 <p className="mt-2 text-gray-600 text-lg">
//                   <span className=" font-bold text-gray-700 pe-2">دعم متكامل:</span>
//                 فريق دعم العملاء الخاص بنا مستعد دائمًا للإجابة عن أسئلتك وتقديم المساعدة التي تحتاجها.
//                  </p>
//             </div>
            
//         </div>
//     </div>
// </section>
//   )
// }

////////////////////////////////////////////////////////////////////////
export default function AboutVision() {
  const features = [
    {
      title: 'سهولة الاستخدام',
      description: 'نقدم تجربة مميزة عبر منصة سهلة الاستخدام تتيح لك العثور على الفني المناسب وطلب الخدمة بخطوات بسيطة.',
    },
    {
      title: 'احترافية الفنيين',
      description: 'نعمل مع مجموعة مختارة من الفنيين المدربين وذوي الخبرة لضمان تقديم خدمات موثوقة.',
    },
    {
      title: 'الشفافية في الأسعار',
      description: 'نضمن لك أسعارًا واضحة ومنافسة بدون أي تكاليف مخفية.',
    },
    {
      title: 'التزامنا بالجودة',
      description: 'نحرص على تقديم خدمات تلبي توقعاتك وتوفر لك راحة البال.',
    },
    {
      title: 'دعم متكامل',
      description: 'فريق دعم العملاء الخاص بنا مستعد دائمًا للإجابة عن أسئلتك وتقديم المساعدة التي تحتاجها.',
    },
    {
      title: 'خدمات متنوعة',
      description: 'نوفر مجموعة واسعة من الخدمات المنزلية لتلبية جميع احتياجاتك في مكان واحد.',
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-yellow-500">لماذا</span> نحن؟
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-r-4 border-yellow-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
