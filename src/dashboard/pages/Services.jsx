import { useState, useEffect } from "react";
import Card from "../components/Card";
import ServiceForm from "../components/ServiceForm";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [editingDescriptionService, setEditingDescriptionService] =
    useState(null);
  const [editingDescriptionIndex, setEditingDescriptionIndex] = useState(null);
  const [editingDescriptionValue, setEditingDescriptionValue] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [updatingDescId, setUpdatingDescId] = useState(null);

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
    setShowForm(true);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setShowForm(true);
  };

  const handleFormSubmit = async () => {
    await fetchServices();
    setShowForm(false);
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

    setDeletingId(serviceId);
    try {
      const response = await fetch(`http://localhost:3000/services/${serviceId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("فشل في حذف الخدمة");
      await fetchServices();
    } catch (err) {
      alert(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const handleEditDescription = (service, index) => {
    setEditingDescriptionService(service);
    setEditingDescriptionIndex(index);
    setEditingDescriptionValue(service.descriptions[index] || "");
  };

  const handleSaveDescription = async () => {
    if (!editingDescriptionValue.trim()) {
      alert("الوصف لا يمكن أن يكون فارغاً");
      return;
    }

    const service = editingDescriptionService;
    const newDescriptions = [...service.descriptions];
    newDescriptions[editingDescriptionIndex] = editingDescriptionValue.trim();

    setUpdatingDescId(service.id);

    try {
      const response = await fetch(
        `http://localhost:3000/services/${service.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            descriptions: newDescriptions,
          }),
        }
      );
      if (!response.ok) throw new Error("فشل في تحديث الوصف");
      await fetchServices();
      setEditingDescriptionService(null);
      setEditingDescriptionIndex(null);
      setEditingDescriptionValue("");
    } catch (err) {
      alert(err.message);
    } finally {
      setUpdatingDescId(null);
    }
  };

  const handleAddNewDescription = (service) => {
    setEditingDescriptionService(service);
    setEditingDescriptionIndex(service.descriptions.length);
    setEditingDescriptionValue("");
  };

  const handleSaveNewDescription = async () => {
    if (!editingDescriptionValue.trim()) {
      alert("الوصف لا يمكن أن يكون فارغاً");
      return;
    }

    const service = editingDescriptionService;
    const newDescriptions = [
      ...service.descriptions,
      editingDescriptionValue.trim(),
    ];

    setUpdatingDescId(service.id);

    try {
      const response = await fetch(
        `http://localhost:3000/services/${service.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            descriptions: newDescriptions,
          }),
        }
      );
      if (!response.ok) throw new Error("فشل في إضافة الوصف");
      await fetchServices();
      setEditingDescriptionService(null);
      setEditingDescriptionIndex(null);
      setEditingDescriptionValue("");
    } catch (err) {
      alert(err.message);
    } finally {
      setUpdatingDescId(null);
    }
  };

  const handleDeleteDescription = async (service, index) => {
    if (service.descriptions.length <= 1) {
      alert("يجب أن تحتوي الخدمة على وصف واحد على الأقل");
      return;
    }

    const newDescriptions = service.descriptions.filter((_, i) => i !== index);

    setUpdatingDescId(service.id);

    try {
      const response = await fetch(
        `http://localhost:3000/services/${service.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            descriptions: newDescriptions,
          }),
        }
      );
      if (!response.ok) throw new Error("فشل في حذف الوصف");
      await fetchServices();
    } catch (err) {
      alert(err.message);
    } finally {
      setUpdatingDescId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingDescriptionService(null);
    setEditingDescriptionIndex(null);
    setEditingDescriptionValue("");
  };

  if (showForm) {
    return (
      <div className="space-y-6" dir="rtl">
        <h1 className="text-3xl font-bold text-orange-800 text-right">الخدمات</h1>
        <Card>
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-right">
            {editingService ? "تعديل الخدمة" : "إضافة خدمة جديدة"}
          </h2>
          <ServiceForm
            service={editingService}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingService(null);
            }}
          />
        </Card>
      </div>
    );
  }

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

      {error && (
        <div className="bg-red-50 border-r-4 border-red-600 rounded-lg p-4 text-right">
          <p className="text-red-700">{error}</p>
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

      {!loading && services.length > 0 && (
        <div className="grid gap-6">
          {services.map((service) => (
            <Card key={service.id}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    disabled={deletingId === service.id}
                    className="px-3 py-2 bg-red-100 text-red-800 rounded font-semibold hover:bg-red-200 transition disabled:opacity-50 text-sm"
                  >
                    حذف
                  </button>
                  <button
                    onClick={() => handleEditService(service)}
                    className="px-3 py-2 bg-blue-100 text-blue-800 rounded font-semibold hover:bg-blue-200 transition text-sm"
                  >
                    تعديل
                  </button>
                </div>
                <div className="text-right flex-1 px-4">
                  <h3 className="text-lg font-bold text-orange-800 mb-1">
                    {service.serviceName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    السعر: {service.price} جنيه 
                  </p>
                </div>
              </div>

              {/* Descriptions List */}
              <div className="bg-gray-50 p-4 rounded-lg border-r-4 border-orange-800 mb-4">
                <h4 className="font-semibold text-gray-700 text-right mb-3">
                  الأوصاف:
                </h4>
                <div className="space-y-2">
                  {service.descriptions && service.descriptions.length > 0 ? (
                    service.descriptions.map((desc, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded border-r-2 border-orange-600 flex justify-between items-start gap-2"
                      >
                        <div className="flex gap-1">
                          <button
                            onClick={() =>
                              handleDeleteDescription(service, index)
                            }
                            disabled={updatingDescId === service.id}
                            className="px-2 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200 transition text-xs font-semibold disabled:opacity-50"
                            title="حذف"
                          >
                            ✕
                          </button>
                          <button
                            onClick={() =>
                              handleEditDescription(service, index)
                            }
                            disabled={updatingDescId === service.id}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition text-xs font-semibold disabled:opacity-50"
                            title="تعديل"
                          >
                            ✎
                          </button>
                        </div>
                        <p className="text-gray-700 text-right flex-1 text-sm">
                          {desc}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm text-right">
                      لا توجد أوصاف
                    </p>
                  )}
                </div>

                <button
                  onClick={() => handleAddNewDescription(service)}
                  disabled={updatingDescId === service.id}
                  className="mt-3 px-3 py-1 bg-green-100 text-green-800 rounded font-semibold hover:bg-green-200 transition text-xs disabled:opacity-50"
                >
                  + إضافة وصف جديد
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Description Edit Modal */}
      {editingDescriptionService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          dir="rtl"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6">
            <h3 className="text-xl font-bold text-orange-800 mb-2 text-right">
              {editingDescriptionIndex === editingDescriptionService.descriptions.length
                ? "إضافة وصف جديد"
                : "تعديل الوصف"}
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-right">
              الخدمة: {editingDescriptionService.serviceName}
            </p>

            <textarea
              value={editingDescriptionValue}
              onChange={(e) => setEditingDescriptionValue(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
              rows="6"
              placeholder="أدخل الوصف"
            />

            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={handleCancelEdit}
                disabled={updatingDescId === editingDescriptionService.id}
                className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition disabled:opacity-50"
              >
                إلغاء
              </button>
              <button
                onClick={
                  editingDescriptionIndex ===
                  editingDescriptionService.descriptions.length
                    ? handleSaveNewDescription
                    : handleSaveDescription
                }
                disabled={updatingDescId === editingDescriptionService.id}
                className="px-6 py-2 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition disabled:opacity-50"
              >
                {updatingDescId === editingDescriptionService.id
                  ? "جاري الحفظ..."
                  : "حفظ"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
