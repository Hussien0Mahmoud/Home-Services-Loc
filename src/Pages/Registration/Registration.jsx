import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from '../../context/AuthContext';

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth(); // requires AuthProvider in main.jsx
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError("");
    // basic validation
    if (!signupData.name || !signupData.email || !signupData.phone || !signupData.password) {
      setError("جميع الحقول مطلوبة");
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    setLoading(true);
    try {
      // If you have AuthContext.register implemented, call it:
      if (typeof register === 'function') {
        const result = await register({
          name: signupData.name,
          email: signupData.email,
          phone: signupData.phone,
          password: signupData.password
        });
        if (result.success) {
          // registered + logged in by context
          navigate('/');
          return;
        } else {
          setError(result.error || "فشل التسجيل");
          return;
        }
      }

      // Fallback: direct call to json-server
      const resp = await fetch('http://localhost:3000/users?email=' + encodeURIComponent(signupData.email));
      const existing = await resp.json();
      if (existing.length > 0) {
        setError("البريد الإلكتروني مسجل بالفعل");
        return;
      }
      const createResp = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: signupData.name,
          email: signupData.email,
          phone: signupData.phone,
          password: signupData.password,
          createdAt: new Date().toISOString()
        })
      });
      if (createResp.ok) {
        // optionally auto-login: store user without password in localStorage
        const newUser = await createResp.json();
        const { password, ...userWithoutPassword } = newUser;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        navigate('/');
      } else {
        setError("فشل في إنشاء الحساب");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("حدث خطأ أثناء التسجيل");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* التابات */}
          <div className="flex border-b">
            <Link
              to="/login"
              className="flex-1 py-4 text-lg font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-50 text-center"
            >
              تسجيل الدخول
            </Link>
            <button className="flex-1 py-4 text-lg font-bold text-yellow-600 border-b-4 border-yellow-500 bg-yellow-50">
              إنشاء حساب
            </button>
          </div>

          {/* المحتوى */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                انضم إلينا الآن!
              </h2>
              <p className="text-gray-600">أنشئ حسابك وابدأ رحلتك</p>
            </div>

            {error && (
              <div className="mb-4 p-3 text-sm text-red-500 bg-red-50 rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={signupData.name}
                onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                placeholder="رقم الهاتف"
                value={signupData.phone}
                onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="تأكيد كلمة المرور"
                value={signupData.confirmPassword}
                onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
              />

              <label className="flex items-start gap-2 cursor-pointer text-sm">
                <input type="checkbox" className="w-4 h-4 mt-1 rounded" />
                <span className="text-gray-700">
                  أوافق على الشروط والأحكام وسياسة الخصوصية
                </span>
              </label>

              <button
                onClick={handleSignup}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-60"
              >
                {loading ? 'جاري الإنشاء...' : 'إنشاء حساب'}
              </button>

              <div className="text-center mt-4 text-gray-700">
                لديك حساب بالفعل؟{" "}
                <Link
                  to="/login"
                  className="text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  تسجيل الدخول
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
