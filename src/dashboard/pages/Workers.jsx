import { useState, useEffect } from "react";
import Table from "../components/Table";
import Filter from "../components/Filter";
import Card from "../components/Card";

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterServiceId, setFilterServiceId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [workersRes, servicesRes] = await Promise.all([
          fetch("http://localhost:3000/workers"),
          fetch("http://localhost:3000/services"),
        ]);

        if (!workersRes.ok || !servicesRes.ok)
          throw new Error("فشل في جلب البيانات");

        const workersData = await workersRes.json();
        const servicesData = await servicesRes.json();

        setWorkers(workersData);
        setServices(servicesData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getServiceName = (serviceId) => {
    const service = services.find((s) => s.id == serviceId);
    return service ? service.serviceName : "غير معروف";
  };

  const filteredWorkers = workers.filter((worker) => {
    const matchService = filterServiceId
      ? worker.serviceId == filterServiceId
      : true;
    return matchService;
  });

  const columns = [
    { key: "id", label: "الرقم" },
    { key: "name", label: "الاسم" },
    { key: "phone", label: "الهاتف" },
    {
      key: "serviceId",
      label: "نوع الخدمة",
      render: (row) => (
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold">
          {getServiceName(row.serviceId)}
        </span>
      ),
    },
  ];

  const serviceOptions = services.map((service) => ({
    id: service.id,
    name: service.serviceName,
  }));

  return (
    <div className="space-y-6" dir="rtl">
      <h1 className="text-3xl font-bold text-orange-800 text-right">العمال</h1>

      <Card title="المرشحات">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Filter
            label="نوع الخدمة"
            type="select"
            value={filterServiceId}
            onChange={(e) => setFilterServiceId(e.target.value)}
            options={serviceOptions.map((service) => service.name)}
          />
        </div>
      </Card>

      <Card>
        <Table
          columns={columns}
          data={filteredWorkers}
          loading={loading}
          error={error}
        />
      </Card>
    </div>
  );
};

export default Workers;
