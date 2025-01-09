import { Link } from 'react-router-dom';
import { services } from "../../../assets/data/services"

export default function ServicesSections() {
  return (
    <section className="py-10 " id="services">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl  text-yellow-400 mb-3 text-center">
          لعملائنا الفخورين بهم
        </h2>
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          كافة الخدمات
        </h2>
        <div className="flex flex-wrap justify-center gap-8 ">

          {services.map((service) => (
            <div key={service.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden w-full md:w-[30%]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
              {/* <div className="text-center mb-5">
            <Link to="/serviceInfo" className="border-t-cyan-300"> عرض الخدمة </Link>
          </div> */}
              <div className="text-center mb-5">
                <Link
                  to={"/serviceInfo/"+ service.id}
                  className="inline-block px-6 py-3 bg-yellow-400 text-white font-semibold text-lg rounded-md border border-yellow-400  hover:bg-gray-400 hover:border-gray-400 transition-all"
                >
                  عرض الخدمة
                </Link>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
