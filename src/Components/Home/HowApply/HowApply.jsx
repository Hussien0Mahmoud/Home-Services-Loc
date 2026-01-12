
import { Link } from 'react-router-dom'
import mobileTouch from '../../../assets/Home/Services-Section/mobileTouch.png'
import mobileTouchTime from '../../../assets/Home/Services-Section/mobileTouchTime.png'
import smartHome from '../../../assets/Home/Services-Section/smartHome.png'

export default function HowApply() {
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-yellow-500 mb-2 sm:mb-3 md:mb-4">
            في ثلاث خطوات بسيطة
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700">
            آلية طلب الخدمة
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col sm:flex-col md:flex-row gap-4 sm:gap-6 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center md:items-stretch">
          
          {/* Step 1: Choose Service */}
          <div className="flex flex-col justify-center items-center w-full sm:w-5/6 md:w-1/3 px-2 sm:px-3 md:px-2 lg:px-4 transition-transform duration-300 hover:scale-105">
            {/* Circle with Icon */}
            <div className="flex justify-center items-center w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex-shrink-0 shadow-md">
              <img 
                src={smartHome} 
                className="w-8 h-10 xs:w-10 xs:h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 lg:w-16 lg:h-20 object-contain" 
                alt="Choose Service" 
              />
            </div>
            
            {/* Step Number */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-yellow-500 bg-yellow-50 rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                1
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 text-center">
              اختر الخدمة
            </h3>
            
            {/* Description */}
            <Link 
              to="" 
              className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 font-medium hover:text-yellow-500 transition duration-300 leading-relaxed text-center"
            >
              المناسبة لك من قائمة الخدمات
            </Link>
          </div>

          {/* Step 2: Choose Visit Time */}
          <div className="flex flex-col justify-center items-center w-full sm:w-5/6 md:w-1/3 px-2 sm:px-3 md:px-2 lg:px-4 transition-transform duration-300 hover:scale-105">
            {/* Circle with Icon */}
            <div className="flex justify-center items-center w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex-shrink-0 shadow-md">
              <img 
                src={mobileTouchTime} 
                className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" 
                alt="Choose Time" 
              />
            </div>
            
            {/* Step Number */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-yellow-500 bg-yellow-50 rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                2
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 text-center">
              اختر وقت الزيارة
            </h3>
            
            {/* Description */}
            <Link 
              to="" 
              className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 font-medium hover:text-yellow-500 transition duration-300 leading-relaxed text-center"
            >
              ومزود الخدمات المناسب لك
            </Link>
          </div>

          {/* Step 3: Relax */}
          <div className="flex flex-col justify-center items-center w-full sm:w-5/6 md:w-1/3 px-2 sm:px-3 md:px-2 lg:px-4 transition-transform duration-300 hover:scale-105">
            {/* Circle with Icon */}
            <div className="flex justify-center items-center w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex-shrink-0 shadow-md">
              <img 
                src={mobileTouch} 
                className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" 
                alt="Relax" 
              />
            </div>
            
            {/* Step Number */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-yellow-500 bg-yellow-50 rounded-full w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                3
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 text-center">
              استرخٍ وريّح بالك
            </h3>
            
            {/* Description */}
            <Link 
              to="" 
              className="text-xs sm:text-sm md:text-base lg:text-base text-gray-600 font-medium hover:text-yellow-500 transition duration-300 leading-relaxed text-center"
            >
              و حنا نتكفل بالباقي
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
