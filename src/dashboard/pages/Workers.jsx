import { useState, useEffect } from "react";
import Table from "../components/Table";
import Filter from "../components/Filter";
import Card from "../components/Card";
import WorkerForm from "../components/WorkerForm";

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [filterServiceId, setFilterServiceId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
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

  const handleAddWorker = () => {
    setSelectedWorker(null);
    setShowForm(true);
    setFormError(null);
  };

  const handleEditWorker = (worker) => {
    setSelectedWorker(worker);
    setShowForm(true);
    setFormError(null);
  };

  const handleDeleteWorker = async (workerId) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا العامل؟")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/workers/${workerId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("فشل في حذف العامل");
      await fetchData();
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleFormSubmit = async () => {
    setShowForm(false);
    setSelectedWorker(null);
    await fetchData();
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setSelectedWorker(null);
    setFormError(null);
  };

  const getServiceName = (serviceId) => {
    const service = services.find((s) => s.id == serviceId);
    return service ? service.serviceName : "غير معروف";
  };

  const getServiceId = (serviceName) => {
    const service = services.find((s) => s.serviceName === serviceName);
    return service ? service.id : "";
  };

  const filteredWorkers = workers.filter((worker) => {
    const matchName = worker.name?.toLowerCase().includes(searchName.toLowerCase());
    const serviceId = getServiceId(filterServiceId);
    const matchService = serviceId ? worker.serviceId == serviceId : true;
    return matchName && matchService;
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
    {
      key: "actions",
      label: "الإجراءات",
      render: (row) => (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handleEditWorker(row)}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition text-xs font-semibold"
          >
            تعديل
          </button>
          <button
            onClick={() => handleDeleteWorker(row.id)}
            className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200 transition text-xs font-semibold"
          >
            حذف
          </button>
        </div>
      ),
    },
  ];

  const serviceOptions = services.map((service) => ({
    id: service.id,
    name: service.serviceName,
  }));

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex justify-between items-center">
        <button
          onClick={handleAddWorker}
          className="px-6 py-2 bg-orange-800 text-white rounded-lg font-semibold hover:bg-orange-900 transition"
        >
          + إضافة عامل جديد
        </button>
        <h1 className="text-3xl font-bold text-orange-800">العمال</h1>
      </div>

      {formError && (
        <div className="bg-red-50 border-r-4 border-red-600 rounded-lg p-3 text-right">
          <p className="text-red-700 text-sm">{formError}</p>
        </div>
      )}

      {showForm && (
        <Card title={selectedWorker ? "تعديل عامل" : "إضافة عامل جديد"}>
          <WorkerForm
            worker={selectedWorker}
            services={services}
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
