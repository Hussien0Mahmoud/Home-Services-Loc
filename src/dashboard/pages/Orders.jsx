import { useState, useEffect } from "react";
import Table from "../components/Table";
import Filter from "../components/Filter";
import Card from "../components/Card";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [enrichedOrders, setEnrichedOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState("");
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editingStatus, setEditingStatus] = useState("");
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [ordersRes, usersRes, workersRes, servicesRes] = await Promise.all([
        fetch("http://localhost:3000/orders"),
        fetch("http://localhost:3000/users"),
        fetch("http://localhost:3000/workers"),
        fetch("http://localhost:3000/services"),
      ]);

      if (!ordersRes.ok || !usersRes.ok || !workersRes.ok || !servicesRes.ok)
        throw new Error("فشل في جلب البيانات");

      const ordersData = await ordersRes.json();
      const usersData = await usersRes.json();
      const workersData = await workersRes.json();
      const servicesData = await servicesRes.json();

      // Enrich orders with related data
      const enriched = ordersData.map((order) => {
        const user = usersData.find((u) => u.id == order.userId);
        const worker = workersData.find((w) => w.id == order.workerId);
        const service = servicesData.find((s) => s.id == order.serviceId);

        return {
          ...order,
          userName: user?.name || "غير معروف",
          workerName: worker?.name || "غير معروف",
          serviceName: service?.serviceName || "غير معروف",
        };
      });

      setOrders(ordersData);
      setEnrichedOrders(enriched);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (order) => {
    setEditingOrderId(order.id);
    setEditingStatus(order.status);
    setFormError(null);
  };

  const handleSaveStatus = async (orderId) => {
    try {
      const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: editingStatus }),
      });

      if (!response.ok) throw new Error("فشل في تحديث الحالة");
      
      setEditingOrderId(null);
      setEditingStatus("");
      await fetchData();
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleCancel = () => {
    setEditingOrderId(null);
    setEditingStatus("");
    setFormError(null);
  };

  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الطلب؟")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("فشل في حذف الطلب");
      await fetchData();
    } catch (err) {
      setFormError(err.message);
    }
  };

  const filteredOrders = enrichedOrders.filter((order) => {
    const statusMap = {
      "قيد الانتظار": "pending",
      "قيد التنفيذ": "in-progress",
      "مكتمل": "completed",
    };
    const statusValue = statusMap[filterStatus] || "";
    const matchStatus = statusValue ? order.status === statusValue : true;
    return matchStatus;
  });

  const columns = [
    { key: "id", label: "رقم الطلب" },
    {
      key: "name",
      label: "اسم العميل",
      render: (row) => <span className="font-semibold text-orange-800">{row.name || "غير معروف"}</span>,
    },
    {
      key: "phone",
      label: "رقم الهاتف",
      render: (row) => <span className="text-gray-700">{row.phone || "—"}</span>,
    },
    {
      key: "email",
      label: "البريد الإلكتروني",
      render: (row) => <span className="text-gray-700 text-sm">{row.email || "—"}</span>,
    },
    {
      key: "serviceName",
      label: "الخدمة",
      render: (row) => (
        <span className="text-gray-700">{row.serviceName}</span>
      ),
    },
    {
      key: "description",
      label: "الوصف",
      render: (row) => (
        <button
          onClick={() => alert(row.description || "لا يوجد وصف")}
          className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-xs font-semibold"
        >
          عرض
        </button>
      ),
    },
    {
      key: "status",
      label: "الحالة",
      render: (row) => {
        if (editingOrderId === row.id) {
          return (
            <select
              value={editingStatus}
              onChange={(e) => setEditingStatus(e.target.value)}
              className="px-2 py-1 border-2 border-orange-600 rounded text-sm text-right bg-white"
            >
              <option value="pending">قيد الانتظار</option>
              <option value="in-progress">قيد التنفيذ</option>
              <option value="completed">مكتمل</option>
            </select>
          );
        }

        const statusMap = {
          completed: { bg: "bg-green-100", text: "text-green-800", label: "مكتمل" },
          "in-progress": { bg: "bg-blue-100", text: "text-blue-800", label: "قيد التنفيذ" },
          pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: "قيد الانتظار" },
        };
        const config = statusMap[row.status] || statusMap.pending;
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
            {config.label}
          </span>
        );
      },
    },
    {
      key: "createdAt",
      label: "التاريخ",
      render: (row) => (
        <span className="text-gray-600 text-sm">
          {new Date(row.createdAt).toLocaleDateString('ar-EG')}
        </span>
      ),
    },
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => {
        if (editingOrderId === row.id) {
          return (
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => handleSaveStatus(row.id)}
                className="px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200 transition text-xs font-semibold"
              >
                حفظ
              </button>
              <button
                onClick={handleCancel}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition text-xs font-semibold"
              >
                إلغاء
              </button>
            </div>
          );
        }

        return (
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => handleEditClick(row)}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition text-xs font-semibold"
            >
              تعديل
            </button>
            <button
              onClick={() => handleDeleteOrder(row.id)}
              className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200 transition text-xs font-semibold"
            >
              حذف
            </button>
          </div>
        );
      },
    },
  ];

  const statuses = ["pending", "in-progress", "completed"];
  const statusLabels = { pending: "قيد الانتظار", "in-progress": "قيد التنفيذ", completed: "مكتمل" };

  return (
    <div className="space-y-6" dir="rtl">
      <h1 className="text-3xl font-bold text-orange-800 text-right">الطلبات</h1>

      {formError && (
        <div className="bg-red-50 border-r-4 border-red-600 rounded-lg p-3 text-right">
          <p className="text-red-700 text-sm">{formError}</p>
        </div>
      )}

      <Card title="المرشحات">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Filter
            label="الحالة"
            type="select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            options={statuses.map(s => statusLabels[s])}
          />
        </div>
      </Card>

      <Card>
        <Table
          columns={columns}
          data={filteredOrders}
          loading={loading}
          error={error}
        />
      </Card>
    </div>
  );
};

export default Orders;
