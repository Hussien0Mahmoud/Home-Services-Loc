import { Link } from "react-router-dom";

export default function ApplyingForm() {
  return (
    <>
        {/* <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12"> */}

                    <div className="mt-12 flex flex-col items-center bg-gray-50 pt-7">
                      <h1 className=" text-4xl text-yellow-500  font-extrabold">
                        اطلب خدمتك وسيب الباقى علينا
                        </h1>
                      <div className="w-full flex-1 mt-8  p-6 sm:p-12">

                        <div className="mx-auto max-w-xs">
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text"
                            placeholder=" الاسم"
                          />
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="phone"
                            placeholder=" رقم الهاتف"
                          />
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="email"
                            placeholder="البريد الالكترونى"
                          />
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="اسم الخدمة"
                          />
                          
                          <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text"
                            placeholder="وصف العطل"
                          />
                          <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg
                              className="w-6 h-6 -ml-2"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                              <circle cx="8.5" cy="7" r="4" />
                              <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="mr-5 "> تسجيل</span>
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
    </>
  )
}
