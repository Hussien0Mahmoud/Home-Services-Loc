export default function ApplyingForm() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold text-orange-800 mb-6 text-center">
        اطلب خدمتك وسيب الباقي علينا 
      </h1>

      <form className="w-full flex flex-col gap-4">
        <input
          type="text"
          placeholder="الاسم"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="tel"
          placeholder="رقم الهاتف"
          className=" text-end w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          placeholder="اسم الخدمة"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          rows="3"
          placeholder="وصف العطل"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        ></textarea>

        <button
          type="submit"
          className="mt-4 bg-orange-800 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          إرسال الطلب
        </button>
      </form>
    </div>
  );
}
