import { useState, useEffect } from "react";
import Card from "../components/Card";
import ServiceForm from "../components/ServiceForm";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingService, setEditingService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewingService, setViewingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/services");
      if (!response.ok) throw new Error("فشل في جلب البيانات");
      const data = await response.json();
      setServices(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddService = () => {
    setEditingService(null);
    setIsModalOpen(true);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async () => {
    await fetchServices();
    setIsModalOpen(false);
    setEditingService(null);
  };

  const handleDeleteService = async (serviceId) => {
    if (
      !window.confirm(
        "هل أنت متأكد من رغبتك في حذف هذه الخدمة؟ لا يمكن التراجع عن هذا الإجراء."
      )
    ) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/services/${serviceId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("فشل في حذف الخدمة");
      await fetchServices();
    } catch (err) {
      alert(err.message);
    }
  };

  const filteredServices = services.filter(
    (service) =>
      service.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.price.toString().includes(searchTerm)
  );

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex justify-between items-center">
        <button
          onClick={handleAddService}
          className="px-4 py-2 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition"
        >
          + إضافة خدمة جديدة
        </button>
        <h1 className="text-3xl font-bold text-orange-800">الخدمات</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <input
          type="text"
          placeholder="ابحث عن خدمة بالاسم أو السعر..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right"
        />
      </div>

      {error && (
        <div className="bg-red-50 border-r-4 border-red-600 rounded-lg p-4 text-right">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-h-[90vh] w-full max-w-md sm:max-w-lg md:max-w-2xl p-6 overflow-y-auto">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setEditingService(null);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white text-xl z-10"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-orange-800 mb-6 text-right">
              {editingService ? "تعديل الخدمة" : "إضافة خدمة جديدة"}
            </h2>
            <ServiceForm
              service={editingService}
              onSubmit={handleFormSubmit}
              onCancel={() => {
                setIsModalOpen(false);
                setEditingService(null);
              }}
            />
          </div>
        </div>
      )}

      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin">
            <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-800 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-2">جاري التحميل...</p>
        </div>
      )}

      {!loading && services.length === 0 && (
        <Card>
          <p className="text-center text-gray-600 py-8">لا توجد خدمات متاحة</p>
        </Card>
      )}

      {!loading && services.length > 0 && filteredServices.length === 0 && (
        <Card>
          <p className="text-center text-gray-600 py-8">لا توجد نتائج بحث</p>
        </Card>
      )}

      {!loading && filteredServices.length > 0 && (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-orange-800 mb-2 text-right">
                  {service.serviceName}
                </h3>
                <p className="text-xl font-semibold text-gray-700 mb-4 text-right">
                  {service.price} جنيه
                </p>
              </div>

              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setViewingService(service)}
                  className="px-3 py-2 bg-green-100 text-green-800 rounded font-semibold hover:bg-green-200 transition text-sm"
                >
                  عرض
                </button>
                <button
                  onClick={() => handleEditService(service)}
                  className="px-3 py-2 bg-blue-100 text-blue-800 rounded font-semibold hover:bg-blue-200 transition text-sm"
                >
                  تعديل
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="px-3 py-2 bg-red-100 text-red-800 rounded font-semibold hover:bg-red-200 transition text-sm"
                >
                  حذف
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* View Service Modal */}
      {viewingService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto" dir="rtl">
            <button
              onClick={() => setViewingService(null)}
              className="float-left text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-orange-800 mb-4 text-right">
              {viewingService.serviceName}
            </h2>
            
            <div className="space-y-4 text-right">
              {viewingService.image && (
                <div className="mb-4">
                  <img
                    src={viewingService.image}
                    alt={viewingService.serviceName}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}

              <div>
                <p className="text-gray-600 font-semibold mb-1">السعر:</p>
                <p className="text-xl text-gray-800">{viewingService.price} جنيه</p>
              </div>

              <div>
                <p className="text-gray-600 font-semibold mb-2">الأوصاف:</p>
                <ul className="space-y-2">
                  {viewingService.descriptions && viewingService.descriptions.length > 0 ? (
                    viewingService.descriptions.map((desc, index) => (
                      <li key={index} className="bg-gray-50 p-3 rounded border-r-4 border-orange-800 text-gray-700">
                        • {desc}
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-500">لا توجد أوصاف</p>
                  )}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setViewingService(null)}
              className="mt-6 w-full px-4 py-2 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
