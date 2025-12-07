
import hapineesIcon from '../../../assets/Home/Services-Section/happiness_icon-dfe72053950ba07827e8c4425fc9e07c5851335f17afdf1d6d9caaafb06f2a9a.svg'
// import happiness1 from '../../../assets/Home/happiness1.jpg'
// import happiness2 from '../../../assets/Home/happiness2.jpg'
// import happiness3 from '../../../assets/Home/satisfacation1.jpg'
// import happiness4 from '../../../assets/Home/satisfacation4.avif'
// import happiness5 from '../../../assets/Home/satisfacation5jpg.jpg'
import happiness6 from '../../../assets/Home/satisfaction2.jpg'

export default function Happiness() {
  return (

<section className="flex flex-col md:flex-row items-center text-center w-full bg-gradient-to-r from-gray-100  to-gray-300 p-8 rounded-xl shadow-lg">
  {/* Left Section (Text) */}
  <div className="w-full md:w-1/2 p-6 space-y-6 text-white">
    <div className="text-center ">
      <img src={hapineesIcon} className="mx-auto mb-4 h-32 w-32" alt="Happiness Icon" />
    </div>
    <h2 className="text-3xl text-gray-800 font-extrabold tracking-tight mb-4 leading-tight">سعادتك مضمونة</h2>
    <p className="text-xl font-medium text-gray-800 mb-4">
      سعادتك هي هدفنا.<br />
      إذا لم تكن سعيدًا، فسنعمل على تصحيح الأمر.<br />
      يتوفر وكلاء خدمة العملاء الودودون لدينا على مدار 24 ساعة في اليوم،<br />
      7 أيام في الأسبوع.<br />
      لا ينطبق ضمان السعادة إلا عند حجز الخدمة<br />
      ودفع ثمنها مباشرةً من خلال منصتنا.
    </p>
  </div>

  {/* Right Section (Image) */}
  <div className="w-full md:w-1/2 flex justify-center items-center p-6">
    <img src={happiness6} className="w-full h-80 object-cover rounded-full shadow-xl transition-transform transform hover:scale-105" alt="Happiness" />
  </div>
</section>


  )
}
