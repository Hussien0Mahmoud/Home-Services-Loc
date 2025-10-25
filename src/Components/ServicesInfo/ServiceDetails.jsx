import { fetchServices } from "../../assets/data/services";
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
        const all = await fetchServices();
        if (!mounted) return;
        const found = all.find((s) => String(s.id) === String(param.id));
        setService(found || {});
      } catch (err) {
        console.error("load service error", err);
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
      <SingleServiceBanner title={service.title} subtitle="تفاصيل الخدمة" />

      <div className="bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="w-full flex">
            <h1 className="text-3xl font-bold mb-4 text-orange-800">
              {loading ? "جاري التحميل..." : service.title}
            </h1>
          </div>

          <div className="pb-5">
            <h2 className="font-bold text-2xl text-yellow-500 dark:text-orange-300">
              التعريف بالخدمة
            </h2>
            <br />
            <ul>
              <li className="list-disc">
                <p className="mb-4 text-lg text-gray-700">{service.description}</p>
              </li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300"
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
