import Banner from "../Banner/Banner";
import { services as storedServices } from "../../assets/data/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const param = useParams()
  const services = storedServices
  const [service, setService] = useState({})

  useEffect(() => {
    setService(services.filter(service => service.id == param.id)[0])
  }, [])

  return (
    <>
      <Banner title={service.title} subtitle="تفاصيل الخدمة" />

      <div className="bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-4 py-8">
          <p className="mb-4"> </p>

          <div className='w-full flex'>
            <h1 className="text-3xl font-bold mb-4 text-orange-800">
            {service.title}
            </h1>
          </div>
          {/* <p className="mb-4 text-base">{service.description}</p> */}
         
          <div className='pb-5'>
            <h2 className='font-bold text-2xl text-yellow-500 dark:text-orange-300'>
              التعريف بالخدمة
            </h2>

            <br />
            <ul>
              <li className='list-disc'>
                <p className="mb-4 text-lg text-gray-700">{service.description}</p>
                <p className="mb-4 text-lg text-gray-700">{service.description}</p>
                <p className="mb-4 text-lg text-gray-700">{service.description}</p>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
