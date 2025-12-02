const Filter = ({ type = "text", label, value, onChange, options = [] }) => {
  if (type === "select") {
    return (
      <div className="flex flex-col text-right">
        <label className="text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
        <select
          value={value}
          onChange={onChange}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition bg-white text-right"
        >
          <option value="">الكل - {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col text-right">
      <label className="text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`ابحث حسب ${label}...`}
        className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition text-right bg-white"
      />
    </div>
  );
};

export default Filter;
