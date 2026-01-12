const Filter = ({ type = "text", label, value, onChange, options = [] }) => {
  if (type === "select") {
    return (
      <div className="flex flex-col text-right">
        <label className="text-xs sm:text-sm font-semibold text-orange-800 mb-1 sm:mb-2">
          {label}
        </label>
        <select
          value={value}
          onChange={onChange}
          className="px-2 sm:px-4 py-1.5 sm:py-2 border-2 border-orange-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-800 focus:border-transparent transition bg-white text-right text-xs sm:text-sm text-gray-800 font-medium hover:border-orange-700"
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
      <label className="text-xs sm:text-sm font-semibold text-orange-800 mb-1 sm:mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`ابحث حسب ${label}...`}
        className="px-2 sm:px-4 py-1.5 sm:py-2 border-2 border-orange-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-800 focus:border-transparent transition text-right bg-white text-xs sm:text-sm text-gray-800 font-medium hover:border-orange-700"
      />
    </div>
  );
};

export default Filter;
