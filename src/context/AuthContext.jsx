import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for saved user data in localStorage on initial load
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();
      
      const matchedUser = users.find(u => u.email === email && u.password === password);
      
      if (matchedUser) {
        const { password, ...userWithoutPassword } = matchedUser;
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        return { success: true };
      } else {
        return { success: false, error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'حدث خطأ أثناء تسجيل الدخول' };
    }
  };

const register = async (userData) => {
  try {
    const checkResponse = await fetch(
      `http://localhost:3000/users?email=${encodeURIComponent(userData.email)}`
    );
    const existingUsers = await checkResponse.json();

    if (existingUsers.length > 0) {
      return { success: false, error: 'البريد الإلكتروني مسجل بالفعل' };
    }

    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userData,
        id: crypto.randomUUID(), // 🔥 الحل
        role: "user",
        createdAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return { success: false, error: 'فشل في إنشاء الحساب' };
    }

    const newUser = await response.json();
    const { password, ...userWithoutPassword } = newUser;

    setUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));

    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'حدث خطأ أثناء إنشاء الحساب' };
  }
};


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
