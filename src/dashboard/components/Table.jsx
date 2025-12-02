const Table = ({ columns, data, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-800"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-r-4 border-red-600 rounded-lg p-4 text-right">
        <p className="text-red-700 font-semibold">خطأ</p>
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
        <p className="text-gray-600 font-semibold">لا توجد بيانات</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full text-right">
        <thead className="bg-orange-800 border-b border-orange-900">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 font-semibold text-white text-sm"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-gray-200 ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-orange-50 transition`}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-6 py-4 text-sm text-gray-700">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
