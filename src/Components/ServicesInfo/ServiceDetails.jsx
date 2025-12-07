import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleServiceBanner from "../Banner/SIngleServiceBanner";
import ApplyingForm from "../ApplyingForm/ApplyingForm";

export default function ServiceDetails() {
  const param = useParams();
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const response = await fetch(`http://localhost:3000/services/${param.id}`);
        if (!response.ok) throw new Error("Failed to fetch service");
        const data = await response.json();
        if (mounted) {
          setService(data || {});
        }
      } catch (err) {
        console.error("load service error", err);
        if (mounted) {
          setService({});
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };

    
  }, [param.id]);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="mb-12 text-right" dir="rtl">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              تفاصيل الخدمة
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-2">
              {loading ? "جاري التحميل..." : service.serviceName}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
          </div>

          {/* Image Section */}
          {/* {service.image && (
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          )} */}

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2 text-right" dir="rtl">
              {/* Price Card */}
              {service.price && (
                <div className="mb-8 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-6 border-2 border-orange-200 dark:border-orange-700">
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2">السعر</p>
                  <p className="text-4xl font-bold text-orange-800 dark:text-orange-400">
                    {service.price}
                    <span className="text-lg ml-2">جنيه</span>
                  </p>
                </div>
              )}

              {/* Description Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-start gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></div>
                  <span>التعريف بالخدمة</span>
                </h2>
                <div className="space-y-4">
                  {service.descriptions && service.descriptions.length > 0 ? (
                    service.descriptions.map((desc, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/30">
                            <svg className="h-5 w-5 text-orange-800 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 pt-1">
                          {desc}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">لا توجد تفاصيل متاحة</p>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="text-right" dir="rtl">
              {/* Features Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-end gap-2">
                  <span>مميزات الخدمة</span>
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">خدمة احترافية وموثوقة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">أسعار تنافسية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">عمال مدربون وخبرة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">ضمان الرضا</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              هل أنت مهتم بهذه الخدمة؟ اطلبها الآن واحصل على أفضل خدمة
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-xl bg-gradient-to-r from-orange-600 to-orange-800 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                طلب الخدمة الآن
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </button>
          </div>

          {/* Modal */}
          {isFormOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-h-[90vh] w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl p-6 sm:p-8 overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-2xl z-10 transition-colors"
                >
                  ✕
                </button>
                <ApplyingForm serviceName={service.serviceName} onClose={() => setIsFormOpen(false)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
