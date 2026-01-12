import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logoBlack.png";
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

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

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    // <header
    //   className={`bg-gray-100 transition-all duration-300 ${
    //     isScrolled ? "fixed top-0 left-0 w-full shadow-lg z-50" : ""
    //   }`}
    // >
    <header className="bg-gray-100 sticky top-0 z-50 shadow-lg">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    className="text-black text-opacity-50 transition text-base sm:text-lg font-bold hover:text-yellow-500 whitespace-nowrap"
                    to="/"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-opacity-50 transition text-base sm:text-lg font-bold hover:text-yellow-500 whitespace-nowrap"
                    to="/about"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-opacity-50 transition text-base sm:text-lg font-bold hover:text-yellow-500 whitespace-nowrap"
                    to="/services"
                  >
                    الخدمات
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-opacity-50 transition text-base sm:text-lg font-bold hover:text-yellow-500 whitespace-nowrap"
                    to="/contact"
                  >
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Side - Auth & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* User Menu or Auth Buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-1 sm:gap-2 rounded-md bg-gray-100 text-black text-opacity-50 text-sm sm:text-base px-3 sm:px-5 py-2 font-medium border border-gray-400 hover:bg-gray-400 hover:text-white transition"
                >
                  <FaUser className="text-sm sm:text-base flex-shrink-0" />
                  <span className="hidden sm:inline">{user.name}</span>
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
                      <FaSignOutAlt className="text-base" />
                      تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex sm:gap-2 md:gap-4">
                <Link
                  className="rounded-md bg-gray-100 text-black text-opacity-50 text-sm md:text-base px-3 md:px-5 py-2 font-medium border border-gray-400 hover:bg-gray-400 hover:text-white transition whitespace-nowrap" 
                  to="/login"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  className="rounded-md bg-gray-100 text-black text-opacity-50 text-sm md:text-base px-3 md:px-5 py-2 font-medium border border-gray-400 hover:bg-gray-400 hover:text-white transition whitespace-nowrap"
                  to="/register"
                >
                  التسجيل
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="size-6" />
              ) : (
                <HiMenu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-50">
            <nav className="space-y-1 px-4 py-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-bold text-black text-opacity-70 hover:bg-gray-100 hover:text-yellow-500 transition"
              >
                الرئيسية
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-bold text-black text-opacity-70 hover:bg-gray-100 hover:text-yellow-500 transition"
              >
                من نحن
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-bold text-black text-opacity-70 hover:bg-gray-100 hover:text-yellow-500 transition"
              >
                الخدمات
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-bold text-black text-opacity-70 hover:bg-gray-100 hover:text-yellow-500 transition"
              >
                تواصل معنا
              </Link>

              {/* Mobile Auth Buttons */}
              {!user && (
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-md bg-gray-100 text-black text-opacity-50 px-3 py-2 text-center font-medium border border-gray-400 hover:bg-gray-400 hover:text-white transition"
                  >
                    تسجيل الدخول
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-md bg-gray-100 text-black text-opacity-50 px-3 py-2 text-center font-medium border border-gray-400 hover:bg-gray-400 hover:text-white transition"
                  >
                    التسجيل
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
