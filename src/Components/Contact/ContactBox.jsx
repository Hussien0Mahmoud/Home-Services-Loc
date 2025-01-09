import { IoMdMail } from "react-icons/io";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactBox() {
  return (
    // <div className="bg-gray-200 px-2 py-10">

  <div className="mx-auto max-w-6xl ">
    
    <ul className=" mb-10 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
      <li className="rounded-xl px-6 py-8 shadow-sm  border-2 border-teal-500">

        {/* <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10"/> */}
        <h2 className='flex justify-center text-teal-500 font-bold text-4xl'><IoMdMail /> </h2>
        <h3 className="my-3 font-display font-medium">البريد الالكترونى</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
        contact@B8ak.com
        </p>
        <a href="mailto:contact@company.com?subject=Your Subject&body=Your Email Body">
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
        home@B8ak.com
        </p>
        </a>
        
      </li>

      <li className="rounded-xl px-6 py-8 shadow-sm  border-2 border-red-300">

        {/* <img src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt="" className="mx-auto h-10 w-10"/> */}
        <h2 className='flex justify-center text-red-300 font-bold text-4xl'><FaPhoneSquare /> </h2>
        <h3 className="my-3 font-display font-medium">ارقام التواصل</h3>
        <a href="tel:1123355888 20+"><p className="mt-1.5 text-sm leading-6 text-secondary-500 dir-rtl"> 1123355888 20+</p></a>
        
        <p className="mt-1.5 text-sm leading-6 text-secondary-500"> 1123355888 20+ </p>
      </li>
      
      <li className="rounded-xl  px-6 py-8 shadow-sm border-2 border-yellow-300">
        <a href="https://maps.app.goo.gl/DR3HJwZTCzYJvor67" className="group">
          {/* <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-10 w-10"/> */}
          <h2 className='flex justify-center text-yellow-300 font-bold text-4xl'><FaLocationDot /> </h2>
        
          <h3 className="my-3 font-display font-medium group-hover:text-primary-500">المكان</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">القاهرة - مدينة نصر</p>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">عباس العقاد</p>
        </a>
      </li>
    </ul>
  </div>

//   </div>

  
  )
}
