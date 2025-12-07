import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logoBlack.png";
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // use 10% of viewport height as the threshold for applying the fixed header
      const scrollThreshold = window.innerHeight * 0.1;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();

  return (
    // <header
    //   className={`bg-gray-100 transition-all duration-300 ${
    //     isScrolled ? "fixed top-0 left-0 w-full shadow-lg z-50" : ""
    //   }`}
    // >
    <header className="bg-gray-100 sticky top-0 z-50 shadow-lg">

      <div className="mx-auto max-w-screen-xl px-6 py-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/">
              {/* <h2 className="text-3xl text-teal-600">
                خدماتك<span className="text-yellow-300">5damatk</span>
              </h2> */}
              <img src={logo} alt="/" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link
                    className="text-black text-opacity-50 transition text-xl font-bold hover:text-yellow-500"
                    to="/"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-opacity-50 transition text-xl font-bold hover:text-yellow-500"
                    to="/about"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-opacity-50 transition text-xl font-bold hover:text-yellow-500"
                    to="/services"
                  >
                    الخدمات
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-opacity-50 transition text-xl font-bold hover:text-yellow-500"
                    to="/contact"
                  >
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 rounded-md bg-gray-100 text-black text-opacity-50 text-xl px-5 py-2.5 font-medium border border-gray-400 hover:bg-gray-400 hover:text-white"
                >
                  <FaUser className="text-lg" />
                  {user.name}
                </button>

                {showUserMenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50">
                    {user && user.role === 'admin' && (
                      <>
                        <Link
                          to="/dashboard/users"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                        >
                          📊 لوحة التحكم
                        </Link>
                        <hr className="my-1" />
                      </>
                    )}
                    <button
                      onClick={() => { logout(); setShowUserMenu(false); }}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                    >
                      <FaSignOutAlt className="text-lg" />
                      تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-gray-100 text-black text-opacity-50 text-xl px-5 py-2.5  font-medium border border-gray-400 hover:bg-gray-400  hover:text-white" 
                  to="/login"
                >
                  تسجيل الدخول
                </Link>
                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 text-black text-opacity-50 text-xl px-5 py-2.5  font-medium border border-gray-400 hover:bg-gray-400  hover:text-white"
                    to="/register"
                  >
                    التسجيل
                  </Link>
                </div>
              </div>
            )}

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
