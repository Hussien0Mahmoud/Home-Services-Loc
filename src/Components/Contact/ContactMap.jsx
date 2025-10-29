import React from "react";

export default function ContactMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-yellow-500 mb-10">
          موقعنا على الخريطة
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.505747417358!2d31.36560327544863!3d30.05047957491202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cba00000001%3A0x3b5a19b04092b76!2sNasr%20City%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1693404555083!5m2!1sen!2seg"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[450px] border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
