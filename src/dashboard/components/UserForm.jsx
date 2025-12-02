import { useState } from "react";

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    user || {
      name: "",
      email: "",
      phone: "",
      role: "user",
      password: "",
    }
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      if (!formData.email.trim()) {
        throw new Error("البريد الإلكتروني مطلوب");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error("البريد الإلكتروني غير صحيح");
      }
      if (!formData.phone.trim()) {
        throw new Error("رقم الهاتف مطلوب");
      }
      if (!user && !formData.password.trim()) {
        throw new Error("كلمة المرور مطلوبة");
      }
      if (!formData.role) {
        throw new Error("الدور مطلوب");
      }

      const method = user ? "PATCH" : "POST";
      const url = user
        ? `http://localhost:3000/users/${user.id}`
        : "http://localhost:3000/users";

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        role: formData.role,
      };

      // Only include password for new users or if password was changed
      if (!user || (formData.password && formData.password !== user.password)) {
        if (formData.password) {
          payload.password = formData.password;
        }
      } else if (user) {
        payload.password = user.password;
      }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("فشل في حفظ المستخدم");

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
          placeholder="أدخل الاسم"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">
          البريد الإلكتروني *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="أدخل البريد الإلكتروني"
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

      {/* Role Dropdown */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">
          الدور *
        </label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
          required
        >
          <option value="user">مستخدم</option>
          <option value="admin">مسؤول</option>
          <option value="worker">عامل</option>
        </select>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1 text-right">
          {user ? "كلمة المرور (اتركها فارغة لعدم التغيير)" : "كلمة المرور"} *
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="أدخل كلمة المرور"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
          required={!user}
        />
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
          {loading ? "جاري الحفظ..." : user ? "تحديث" : "إنشاء"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
