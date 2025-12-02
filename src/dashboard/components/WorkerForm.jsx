import { useState } from "react";

const WorkerForm = ({ worker, services, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    worker
      ? {
          id: worker.id,
          name: worker.name,
          phone: worker.phone,
          serviceId: worker.serviceId,
        }
      : {
          name: "",
          phone: "",
          serviceId: "",
        }
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "serviceId" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validation
      if (!formData.name.trim()) {
        throw new Error("الاسم مطلوب");
      }
      if (!formData.phone.trim()) {
        throw new Error("رقم الهاتف مطلوب");
      }
      if (!formData.serviceId) {
        throw new Error("نوع الخدمة مطلوب");
      }

      const method = worker ? "PATCH" : "POST";
      const url = worker
        ? `http://localhost:3000/workers/${worker.id}`
        : "http://localhost:3000/workers";

      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        serviceId: formData.serviceId,
      };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("فشل في حفظ العامل");

      onSubmit();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
      {error && (
        <div className="bg-red-50 border-r-4 border-red-600 rounded-lg p-3 text-right">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">
          الاسم *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="أدخل اسم العامل"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">
          رقم الهاتف *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="أدخل رقم الهاتف"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
          required
        />
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">
          نوع الخدمة *
        </label>
        <select
          name="serviceId"
          value={formData.serviceId}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
          required
        >
          <option value="">اختر نوع الخدمة</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.serviceName}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-end pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
        >
          إلغاء
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition disabled:opacity-50"
        >
          {loading ? "جاري الحفظ..." : worker ? "تحديث" : "إنشاء"}
        </button>
      </div>
    </form>
  );
};

export default WorkerForm;
