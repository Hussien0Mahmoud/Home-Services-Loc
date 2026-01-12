const Table = ({ columns, data, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 sm:py-12">
        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-orange-800"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-r-4 border-red-600 rounded-lg p-3 sm:p-4 text-right">
        <p className="text-red-700 font-semibold text-sm sm:text-base">خطأ</p>
        <p className="text-red-600 text-xs sm:text-sm mt-1">{error}</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 sm:p-8 text-center">
        <p className="text-gray-600 font-semibold text-sm sm:text-base">لا توجد بيانات</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full text-right text-xs sm:text-sm">
        <thead className="bg-orange-800 border-b border-orange-900 sticky top-0">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 font-semibold text-white text-xs sm:text-sm whitespace-nowrap"
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
                <td key={col.key} className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-xs sm:text-sm text-gray-700 break-words">
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
