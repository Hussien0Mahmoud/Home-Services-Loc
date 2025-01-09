
import { Link } from 'react-router-dom'
import mobileTouch from '../../../assets/Home/Services-Section/mobileTouch.png'
import mobileTouchTime from '../../../assets/Home/Services-Section/mobileTouchTime.png'
import smartHome from '../../../assets/Home/Services-Section/smartHome.png'

export default function HowApply() {
  return (
    <section className="py-8 ">
        <div className="flex flex-col items-center text-center mb-12 ">
        <h2 className="text-2xl sm:text-3xl font-normal text-yellow-500 mb-5">في ثلاث خطوات بسيطة</h2>
        <p className="text-xl sm:text-2xl font-medium text-black-400 ">آلية طلب الخدمة</p>
        </div>

        <div className="flex items-center align-items-center text-center ">
            {/* اختر الخدمة-1 */}
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3">
            <div className="flex justify-center items-center w-36 h-36 rounded-full bg-gray-200 mb-5">
                <img src={smartHome} className="w-12 h-14" alt="smartHome" />
            </div>
            <h3 className="text-lg font-medium mb-4">اختر الخدمة</h3>
            <Link to="" className="text-lg text-gray-600 font-medium hover:text-gray-800">
            المناسبة لك من قائمة الخدمات            </Link>
            </div>
            {/* اختر وقت الزيارة-2 */}
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3">
            <div className="flex justify-center items-center w-36 h-36 rounded-full bg-gray-200 mb-5">
                <img src={mobileTouchTime} className="w-12 h-12" alt="mobileTouchTime" />
            </div>
            <h3 className="text-lg font-medium mb-4">اختر وقت الزيارة</h3>
            <Link to="" className="text-lg text-gray-600 font-medium hover:text-gray-800">
            ومزود الخدمات المناسب لك            </Link>
            </div>
            {/* استرخٍ وريّح بالك-3 */}
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3">
            <div className="flex justify-center items-center w-36 h-36 rounded-full bg-gray-200 mb-5">
                <img src={mobileTouch} className="w-12 h-12" alt="mobileTouch" />
            </div>
            <h3 className="text-lg font-medium mb-4">استرخٍ وريّح بالك</h3>
            <Link to="" className="text-lg text-gray-600 font-medium hover:text-gray-800">
            و حنا نتكفل بالباقي            </Link>
            </div>

        </div>

    </section>
  )
}
