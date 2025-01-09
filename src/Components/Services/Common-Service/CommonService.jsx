import { useEffect, useState } from "react";
import { services as storedServices } from "../../../assets/data/services";
import { Link } from 'react-router-dom'

import servicesImg from '../../../assets/Home/Services-Section/b8akServices.png'



export default function CommonService() {

  const [services, setServices] = useState([])

  useEffect(() => {
    setServices(storedServices)
  }, [])
  return (
    <section className="flex flex-col lg:flex-row items-center text-center py-12 px-4 sm:px-12 md:px-24 bg-slate-100 gap-8">
      {/* Right section - image container */}
      <div className="flex flex-col items-center text-center py-4 gap-4 lg:w-1/2 w-full">
        <h2 className="text-2xl sm:text-3xl font-normal text-yellow-500">خدماتنا</h2>
        <p className="text-xl sm:text-2xl font-medium text-black-400 pb-4">الخدمات المنزلية الشائعة</p>
        <img src={servicesImg} alt="Services-Section-Image" className="w-full max-w-sm" />
        <Link
          to="/services"
          className="py-2 px-6 text-lg border-2 rounded-full border-gray-400 hover:bg-gray-400 hover:text-white"
        >
          جميع الخدمات
        </Link>
      </div>
      <div className="flex flex-wrap justify-center items-center lg:w-1/2 w-full gap-2">
        {services.slice(0,4).map(service =>
          <div key={service.id} className="flex flex-col justify-center items-center bg-white p-5 border w-full sm:w-[48%] ">
            <div className="flex justify-center items-center w-32 h-32 rounded-full bg-gray-100 mb-5">
              <img src={service.image2} className="w-12 h-12" alt={service.title} />
            </div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">{service.title}</h3>
            <Link to={"/serviceInfo/" + service.id} className="text-lg text-gray-600 font-medium hover:text-gray-800">
              عرض الخدمة ←
            </Link>
          </div>
        )}

      </div>
    </section>

  )
}
