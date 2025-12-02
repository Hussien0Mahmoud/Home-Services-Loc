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
      <SingleServiceBanner title={service.serviceName} subtitle="تفاصيل الخدمة" />

      <div className="bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="w-full flex mb-4">
            <h1 className="text-3xl font-bold text-orange-800">
              {loading ? "جاري التحميل..." : service.serviceName}
            </h1>
          </div>

          {service.price && (
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-700">
                السعر: <span className="text-orange-800">{service.price} ريال</span>
              </p>
            </div>
          )}

          <div className="pb-5">
            <h2 className="font-bold text-2xl text-yellow-500 dark:text-orange-300 mb-4">
              التعريف بالخدمة
            </h2>
            <div className="space-y-3">
              {service.descriptions && service.descriptions.length > 0 ? (
                service.descriptions.map((desc, index) => (
                  <p key={index} className="mb-2 text-lg text-gray-700">
                    • {desc}
                  </p>
                ))
              ) : (
                <p className="text-gray-600">لا توجد تفاصيل متاحة</p>
              )}
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-orange-800 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              طلب الخدمة
            </button>

            {isFormOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl h-[75vh] w-[35vw] p-8 overflow-y-auto">
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-xl"
                  >
                    ✕
                  </button>
                  <ApplyingForm />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
