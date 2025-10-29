import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  return (
    <form action="https://fabform.io/f/xxxxx" method="post">
      <section className="py-12 sm:py-20">
        {/* زودنا العرض الكلي */}
        <div className="mx-auto max-w-8xl px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500">
              تواصل معنا
            </h1>
          </div>

          {/* توزيع العرض بين الصورة والفورم */}
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* القسم الأيسر (الصورة) */}
            <div className="w-full lg:w-[45%] rounded-3xl overflow-hidden shadow-2xl relative flex bg-contact2BG bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 w-full p-8">
                <div className="bg-white/90 backdrop-blur-md text-center rounded-2xl p-8 shadow-lg border border-yellow-100">
                  <div className="flex flex-col items-center gap-5 text-gray-800">
                    <Link
                      to="#"
                      className="flex items-center gap-3 hover:text-yellow-500 transition"
                    >
                      <FaPhoneAlt className="text-yellow-500 text-lg" />
                      <span className="font-medium text-lg">01122233554</span>
                    </Link>
                    <Link
                      to="mailto:home@B8ak.com"
                      className="flex items-center gap-3 hover:text-yellow-500 transition"
                    >
                      <FaEnvelope className="text-yellow-500 text-lg" />
                      <span className="font-medium text-lg">home@B8ak.com</span>
                    </Link>
                    <Link
                      to="#"
                      className="flex items-center gap-3 hover:text-yellow-500 transition"
                    >
                      <FaMapMarkerAlt className="text-yellow-500 text-lg" />
                      <span className="font-medium text-lg">
                        مصر - القاهرة - مدينة نصر
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* القسم الأيمن (الفورم) */}
            <div className="w-full lg:w-[55%] bg-gray-50 p-12 rounded-3xl shadow-lg flex flex-col justify-center">
              <h2 className="text-yellow-500 text-2xl sm:text-3xl font-semibold mb-10 text-center lg:text-right">
                اكتب رسالتك هنا
              </h2>

              <div className="space-y-6">
                <input
                  type="text"
                  className="w-full h-14 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                  placeholder="الاسم"
                />
                <input
                  type="email"
                  className="w-full h-14 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                  placeholder="البريد الإلكتروني"
                />
                <input
                  type="tel"
                  className="w-full h-14 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
                  placeholder="رقم التليفون"
                />
                <textarea
                  className="w-full h-40 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 resize-none"
                  placeholder="اكتب رسالتك"
                ></textarea>
                <button
                  type="submit"
                  className="w-full h-14 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold rounded-2xl shadow-md transition-all duration-300"
                >
                  ارسل الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}
