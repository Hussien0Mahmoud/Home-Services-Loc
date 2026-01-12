import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const navLinks = [
    { path: "/dashboard/users", label: "المستخدمون" },
    { path: "/dashboard/workers", label: "العمال" },
    { path: "/dashboard/services", label: "الخدمات" },
    { path: "/dashboard/orders", label: "الطلبات" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div dir="rtl" className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-lg p-4 flex items-center justify-between border-b-4 border-orange-800">
        <button
          onClick={toggleSidebar}
          className="text-orange-800 hover:text-orange-900 transition"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
        <h1 className="text-lg sm:text-xl font-bold text-orange-800">لوحة التحكم</h1>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static left-0 top-0 w-64 h-screen bg-white shadow-lg transition-all duration-300 transform z-50 lg:z-auto flex flex-col border-l-4 border-orange-800 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 sm:p-6 border-b border-gray-200 hidden lg:block">
          <h1 className="text-xl sm:text-2xl font-bold text-orange-800 text-right">لوحة التحكم</h1>
        </div>

        <nav className="flex-1 p-4 sm:p-6">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `block px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition text-right text-sm sm:text-base ${
                      isActive
                        ? "bg-orange-800 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-200 p-4 sm:p-6">
          <Link
            to="/"
            onClick={closeSidebar}
            className="w-full block px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition text-center text-white bg-orange-800 hover:shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transform text-sm sm:text-base mb-3"
          >
            الرئيسية
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
