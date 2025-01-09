import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactForm() {
  return (
    <>
    <form action="https://fabform.io/f/xxxxx" method="post">
  <section className="py-12 sm:py-24">
    
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div classNameName="text-center py-14 ">
      {/* <h3 className=""> تواصل معنا  </h3> */}
      </div>
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {/* <!-- Left Section --> */}
        <div className="w-full lg:w-1/2 flex-1">
          <div className="group w-full h-80 lg:h-full">
            <div className="relative h-full">
              <img
                src="https://pagedone.io/asset/uploads/1696488602.png"
                alt="ContactUs section"
                className="w-full h-full object-cover lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
              />
              <h1 className="font-manrope text-yello-500 text-2xl sm:text-4xl font-bold leading-10 absolute top-5 sm:top-11 right-5 sm:right-11 text-gray-700" >
                تواصل معنا
              </h1>
              <div className="absolute bottom-0 w-full p-4 sm:p-6 lg:p-11">
                <div className="bg-white text-center rounded-lg p-4 sm:p-6">
                  <Link to="javascript:;" className="flex items-center  mb-4 sm:mb-6">
                    <h5 className="text-black  text-centertext-sm sm:text-base font-normal leading-6 ml-3 sm:ml-5">
                      01122233554
                    </h5>
                  </Link>
                  <Link to="https://veilmail.io/irish-geoff" className="flex items-center mb-4 sm:mb-6">
                    
                    <h5 className="text-black text-sm sm:text-base font-normal leading-6 ml-3 sm:ml-5">
                      home@B8ak.com
                    </h5>
                  </Link>
                  <Link to="javascript:;" className="flex items-center">
                    
                    <h5 className="text-black text-sm sm:text-base font-normal leading-6 ml-3 sm:ml-5">
                      مصر - القاهرة - مدينة نصر
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-4 sm:p-6 lg:p-11 rounded-2xl lg:rounded-r-2xl">
          <h2 className=" text-yellow-500 font-manrope text-2xl sm:text-4xl font-semibold leading-10 mb-6 sm:mb-11">
            اكتب رسالتك هنا
          </h2>
          <input
            type="text"
            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-base sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none px-4 mb-6 sm:mb-10"
            placeholder="الاسم"
          />
          <input
            type="email"
            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-base sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none px-4 mb-6 sm:mb-10"
            placeholder="البريد الالكترونى"
          />
          <input
            type="tel"
            className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-base sm:text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none px-4 mb-6 sm:mb-10 text-right"
            placeholder="رقم التليفون"
          />
          <textarea
            className="w-full h-24 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-base sm:text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none px-4 mb-6 sm:mb-10 resize-none"
            placeholder="اكتب رسالتك"
          ></textarea>
          <button
            className="w-full h-12 text-white text-sm sm:text-base font-semibold leading-6 rounded-full transition-all duration-300 hover:bg-yellow-300 bg-yellow-500 shadow-sm">
            ارسل الان
          </button>
        </div>
      </div>
    </div>
  </section>
</form>

    </>
  )
}
