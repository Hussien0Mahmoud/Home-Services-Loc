import { useState, useEffect } from "react";
import Table from "../components/Table";
import Filter from "../components/Filter";
import Card from "../components/Card";
import UserForm from "../components/UserForm";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) throw new Error("فشل في جلب البيانات");
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
    setFormError(null);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowForm(true);
    setFormError(null);
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا المستخدم؟")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("فشل في حذف المستخدم");
      await fetchUsers();
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleFormSubmit = async () => {
    setShowForm(false);
    setSelectedUser(null);
    await fetchUsers();
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedUser(null);
    setFormError(null);
  };

  const filteredUsers = users.filter((user) => {
    const matchName = user.name?.toLowerCase().includes(searchName.toLowerCase());
    const matchRole = filterRole ? user.role === filterRole : true;
    return matchName && matchRole;
  });

  const columns = [
    { key: "id", label: "الرقم" },
    { key: "name", label: "الاسم" },
    { key: "email", label: "البريد الإلكتروني" },
    {
      key: "role",
      label: "الدور",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            row.role === "admin"
              ? "bg-red-100 text-red-800"
              : row.role === "worker"
              ? "bg-green-100 text-green-800"
              : "bg-orange-100 text-orange-800"
          }`}
        >
          {row.role === "admin" ? "مسؤول" : row.role === "worker" ? "عامل" : "مستخدم"}
        </span>
      ),
    },
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handleEditUser(row)}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition text-xs font-semibold"
          >
            تعديل
          </button>
          <button
            onClick={() => handleDeleteUser(row.id)}
            className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200 transition text-xs font-semibold"
          >
            حذف
          </button>
        </div>
      ),
    },
  ];

  const roles = ["user", "admin", "worker"];
  const roleLabels = { user: "مستخدم", admin: "مسؤول", worker: "عامل" };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex justify-between items-center">
        <button
          onClick={handleAddUser}
          className="px-6 py-2 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition"
        >
          + إضافة مستخدم جديد
        </button>
        <h1 className="text-3xl font-bold text-orange-800">المستخدمون</h1>
      </div>

      {formError && (
        <div className="bg-red-50 border-r-4 border-red-600 rounded-lg p-3 text-right">
          <p className="text-red-700 text-sm">{formError}</p>
        </div>
      )}

      {showForm && (
        <Card title={selectedUser ? "تعديل مستخدم" : "إضافة مستخدم جديد"}>
          <UserForm
            user={selectedUser}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </Card>
      )}

      <Card title="المرشحات">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Filter
            label="الاسم"
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <Filter
            label="الدور"
            type="select"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            options={roles.map((r) => roleLabels[r])}
          />
        </div>
      </Card>

      <Card>
        <Table
          columns={columns}
          data={filteredUsers}
          loading={loading}
          error={error}
        />
      </Card>
    </div>
  );
};

export default Users;
