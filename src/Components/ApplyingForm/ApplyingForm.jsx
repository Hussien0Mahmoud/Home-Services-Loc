import { useState } from "react";

export default function ApplyingForm({ serviceName = "", onClose = null }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceName: serviceName || "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      if (!/^\d+$/.test(formData.phone)) {
        throw new Error("رقم الهاتف يجب أن يحتوي على أرقام فقط");
      }
      if (!formData.email.trim()) {
        throw new Error("البريد الإلكتروني مطلوب");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("البريد الإلكتروني غير صحيح");
      }
      if (!formData.serviceName.trim()) {
        throw new Error("اسم الخدمة مطلوب");
      }
      if (!formData.description.trim()) {
        throw new Error("وصف العطل مطلوب");
      }

      // Fetch services to find matching serviceId
      const servicesRes = await fetch("http://localhost:3000/services");
      if (!servicesRes.ok) throw new Error("فشل في جلب الخدمات");
      const services = await servicesRes.json();
      const matchingService = services.find(
        (s) => s.serviceName === formData.serviceName
      );
      const serviceId = matchingService ? matchingService.id : "1";

      // Create order with customer information
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        userId: "1", // Default user, can be changed by admin
        workerId: "", // Will be assigned by admin
        serviceId: serviceId, // Matched from service name
        description: formData.description,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("فشل في إرسال الطلب");

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceName: serviceName || "",
        description: "",
      });

      // Close form after 2 seconds if onClose callback provided
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full" dir="rtl">
      <h1 className="text-2xl font-bold text-orange-800 mb-6 text-center">
        اطلب خدمتك وسيب الباقي علينا
      </h1>

      {error && (
        <div className="w-full bg-red-50 border-r-4 border-red-600 rounded-lg p-3 mb-4 text-right">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="w-full bg-green-50 border-r-4 border-green-600 rounded-lg p-3 mb-4 text-right">
          <p className="text-green-700 text-md">تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="الاسم"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 text-right"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 text-right"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 text-right"
          required
        />
        <input
          type="text"
          name="serviceName"
          placeholder="اسم الخدمة"
          value={formData.serviceName}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 text-right"
          disabled={serviceName ? true : false}
          required
        />
        <textarea
          rows="4"
          name="description"
          placeholder="وصف العطل"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none text-right"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-orange-800 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          {loading ? "جاري الإرسال..." : "إرسال الطلب"}
        </button>
      </form>
    </div>
  );
}
