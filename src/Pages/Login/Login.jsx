import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    if (!loginData.email || !loginData.password) {
      setError('جميع الحقول مطلوبة');
      return;
    }
    setLoading(true);
    try {
      if (typeof login === 'function') {
        const res = await login(loginData.email, loginData.password);
        if (res.success) {
          navigate('/');
          return;
        } else {
          setError(res.error || 'البريد الإلكتروني أو كلمة المرور غير صحيحة');
          return;
        }
      }

      // fallback: query json-server directly
      const resp = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(loginData.email)}&password=${encodeURIComponent(loginData.password)}`);
      const users = await resp.json();
      if (users.length > 0) {
        const user = users[0];
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        navigate('/');
      } else {
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100  flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* التابات */}
          <div className="flex border-b">
            <button className="flex-1 py-4 text-lg font-bold text-yellow-600 border-b-4 border-yellow-500 bg-yellow-50">
              تسجيل الدخول
            </button>
            <Link
              to="/register"
              className="flex-1 py-4 text-lg font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-50 text-center"
            >
              إنشاء حساب
            </Link>
          </div>

          {/* المحتوى */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                مرحباً بعودتك!
              </h2>
              <p className="text-gray-600">قم بتسجيل الدخول للمتابعة</p>
            </div>

            {error && (
              <div className="mb-4 p-3 text-sm text-red-500 bg-red-50 rounded-lg">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    👁
                  </button>
                </div>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-60"
              >
                {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
              </button>

              <div className="text-center mt-4 text-gray-700">
                ليس لديك حساب؟{" "}
                <Link
                  to="/register"
                  className="text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  إنشاء حساب جديد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}