import { useState } from "react";

const ServiceForm = ({ service, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    service || {
      serviceName: "",
      price: "",
      descriptions: [""],
      image: "",
    }
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(service?.image || "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || "" : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result;
        setFormData((prev) => ({
          ...prev,
          image: base64String,
        }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: "",
    }));
    setImagePreview("");
  };

  const handleDescriptionChange = (index, value) => {
    const newDescriptions = [...formData.descriptions];
    newDescriptions[index] = value;
    setFormData((prev) => ({
      ...prev,
      descriptions: newDescriptions,
    }));
  };

  const handleAddDescription = () => {
    setFormData((prev) => ({
      ...prev,
      descriptions: [...prev.descriptions, ""],
    }));
  };

  const handleRemoveDescription = (index) => {
    if (formData.descriptions.length <= 1) {
      setError("يجب أن تحتوي الخدمة على وصف واحد على الأقل");
      return;
    }
    const newDescriptions = formData.descriptions.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      descriptions: newDescriptions,
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validation
      if (!formData.serviceName.trim()) {
        throw new Error("اسم الخدمة مطلوب");
      }
      if (!formData.price || formData.price <= 0) {
        throw new Error("السعر يجب أن يكون أكبر من صفر");
      }
      if (formData.descriptions.filter((desc) => desc.trim()).length === 0) {
        throw new Error("يجب إضافة وصف واحد على الأقل");
      }

      // Filter out empty descriptions
      const filteredDescriptions = formData.descriptions.filter((desc) =>
        desc.trim()
      );

      const method = service ? "PATCH" : "POST";
      const url = service
        ? `http://localhost:3000/services/${service.id}`
        : "http://localhost:3000/services";

      const payload = {
        serviceName: formData.serviceName.trim(),
        price: formData.price,
        descriptions: filteredDescriptions,
      };

      // For new services, include image if provided
      if (!service) {
        if (formData.image) {
          payload.image = formData.image;
        }
      } else {
        // For existing services, always include the image (even if empty)
        payload.image = formData.image;
      }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("فشل في حفظ الخدمة");

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

      {/* Service Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">
          اسم الخدمة *
        </label>
        <input
          type="text"
          name="serviceName"
          value={formData.serviceName}
          onChange={handleChange}
          placeholder="أدخل اسم الخدمة"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
          required
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">
          السعر (جنيه) *
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="أدخل السعر"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
          required
          min="0.01"
          step="0.01"
        />
      </div>

      {/* Image Section */}
      <div className="border-2 border-gray-300 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 text-right">الصورة</h3>

        {/* Current Image Preview */}
        {imagePreview && (
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-gray-600 text-right">
              الصورة الحالية:
            </label>
            <div className="flex justify-center">
              <img
                src={imagePreview}
                alt="معاينة الخدمة"
                className="max-h-40 max-w-40 rounded-lg border-2 border-orange-300 object-cover"
              />
            </div>
          </div>
        )}

        {/* Replace Image */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2 text-right">
            تغيير الصورة:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-sm text-right"
          />
          <p className="text-xs text-gray-500 text-right mt-1">
            الصيغ المدعومة: JPG, PNG, GIF, WebP (الحد الأقصى: 5MB)
          </p>
        </div>

        {/* Remove Image Button */}
        {imagePreview && (
          <button
            type="button"
            onClick={handleRemoveImage}
            className="w-full px-3 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition text-sm font-semibold"
          >
            حذف الصورة
          </button>
        )}
      </div>

      {/* Descriptions */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <button
            type="button"
            onClick={handleAddDescription}
            className="px-3 py-1 bg-green-100 text-green-800 rounded font-semibold hover:bg-green-200 transition text-sm"
          >
            + إضافة وصف جديد
          </button>
          <label className="text-sm font-semibold text-gray-700">
            الأوصاف *
          </label>
        </div>

        <div className="space-y-2">
          {formData.descriptions.map((desc, index) => (
            <div key={index} className="flex gap-2">
              {formData.descriptions.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveDescription(index)}
                  className="px-3 py-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition text-sm font-semibold whitespace-nowrap"
                >
                  حذف
                </button>
              )}
              <textarea
                value={desc}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                placeholder={`الوصف ${index + 1}`}
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
                rows="2"
              />
            </div>
          ))}
        </div>
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
          {loading ? "جاري الحفظ..." : service ? "تحديث" : "إنشاء"}
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;

