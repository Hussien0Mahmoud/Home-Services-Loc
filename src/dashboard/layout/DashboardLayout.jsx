import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const navLinks = [
    { path: "/dashboard/users", label: "المستخدمون" },
    { path: "/dashboard/workers", label: "العمال" },
    { path: "/dashboard/services", label: "الخدمات" },
    { path: "/dashboard/orders", label: "الطلبات" },
  ];

  return (
    <div dir="rtl" className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg h-screen p-6 flex flex-col border-l-4 border-orange-800">
        <h1 className="text-2xl font-bold text-orange-800 mb-8 text-right">لوحة التحكم</h1>
        
        <nav className="flex-1">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-medium transition text-right ${
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

        <div className="border-t border-gray-200 pt-4 mt-auto">
          <p className="text-xs text-gray-500 text-right">لوحة التحكم v1.0</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
