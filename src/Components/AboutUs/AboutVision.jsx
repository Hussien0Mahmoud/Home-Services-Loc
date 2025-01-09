import who2 from '../../assets/About/why3.jpg'
export default function AboutVision() {
  return (
    // <!-- رؤيتنا -->
<section className="bg-gray-100" >
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="mt-12 md:mt-0">
                <img src={who2} alt="About Us Image" className="object-cover rounded-3xl shadow-md"/>
            </div>
            <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">لماذا نحن؟ </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  <span className=" font-bold text-gray-700 pe-2">سهولة الاستخدام:</span>
                     نقدم تجربة مميزة عبر منصة سهلة الاستخدام تتيح لك العثور على الفني المناسب وطلب الخدمة بخطوات بسيطة.
                     </p>
                <p className="mt-2 text-gray-600 text-lg">
                  <span className=" font-bold text-gray-700 pe-2">احترافية الفنيين:</span>
                نعمل مع مجموعة مختارة من الفنيين المدربين وذوي الخبرة لضمان تقديم خدمات موثوقة.
                 </p>
                <p className="mt-2 text-gray-600 text-lg">
                   <span className=" font-bold text-gray-700 pe-2">الشفافية في الأسعار:</span>
                نضمن لك أسعارًا واضحة ومنافسة بدون أي تكاليف مخفية.
                </p>
                <p className="mt-2 text-gray-600 text-lg">
                  <span className=" font-bold text-gray-700 pe-2">التزامنا بالجودة:</span>
                نحرص على تقديم خدمات تلبي توقعاتك وتوفر لك راحة البال.
                 </p>
                <p className="mt-2 text-gray-600 text-lg">
                  <span className=" font-bold text-gray-700 pe-2">دعم متكامل:</span>
                فريق دعم العملاء الخاص بنا مستعد دائمًا للإجابة عن أسئلتك وتقديم المساعدة التي تحتاجها.
                 </p>
            </div>
            
        </div>
    </div>
</section>
  )
}