import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logoBlack.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 1; // 10% of viewport height
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-gray-100 transition-all duration-300 ${
        isScrolled ? "fixed top-0 left-0 w-full shadow-lg z-50" : ""
      }`}
    >
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
