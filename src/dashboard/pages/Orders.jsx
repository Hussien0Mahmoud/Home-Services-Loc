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

  useEffect(() => {
    const fetchData = async () => {
      try {
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
            serviceName: service?.title || "غير معروف",
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

    fetchData();
  }, []);

  const filteredOrders = enrichedOrders.filter((order) => {
    const matchStatus = filterStatus ? order.status === filterStatus : true;
    return matchStatus;
  });

  const columns = [
    { key: "id", label: "رقم الطلب" },
    {
      key: "userName",
      label: "المستخدم",
      render: (row) => <span className="font-semibold text-orange-800">{row.userName}</span>,
    },
    {
      key: "workerName",
      label: "العامل",
      render: (row) => <span className="font-semibold text-orange-800">{row.workerName}</span>,
    },
    {
      key: "serviceName",
      label: "الخدمة",
      render: (row) => (
        <span className="text-gray-700">{row.serviceName}</span>
      ),
    },
    {
      key: "status",
      label: "الحالة",
      render: (row) => {
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
  ];

  const statuses = ["pending", "in-progress", "completed"];
  const statusLabels = { pending: "قيد الانتظار", "in-progress": "قيد التنفيذ", completed: "مكتمل" };

  return (
    <div className="space-y-6" dir="rtl">
      <h1 className="text-3xl font-bold text-orange-800 text-right">الطلبات</h1>

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
