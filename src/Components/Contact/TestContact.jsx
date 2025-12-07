
export default function TestContact() {
  return (
    <>
        <div className="p-4 lg:min-h-screen flex items-center justify-center">
      <div className="max-w-6xl max-lg:max-w-3xl mx-auto relative bg-white [box-shadow:0_2px_10px_-3px_rgba(186,186,186,0.7)] rounded-3xl overflow-hidden">
        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-orange-200"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-300"></div>

        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12 py-8 px-6">
          <div className="text-center flex flex-col items-center justify-center">
            <img src="https://img.freepik.com/free-vector/flat-safer-internet-day-illustration_23-2151164065.jpg?" className="shrink-0 aspect-[250/196] object-contain" />
          </div>

          <form className="rounded-tl-3xl rounded-bl-3xl max-lg:-order-1">
            <h2 className="text-3xl text-slate-900 font-bold text-center mb-8">Contact us</h2>
            <div className="max-w-md mx-auto space-y-3 relative">
              <input type='text' placeholder='الاسم'
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-100 focus:border-yellow-600 focus:bg-transparent transition-all" />
              <input type='email' placeholder='الايميل'
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-100 focus:border-yellow-600 focus:bg-transparent transition-all" />
              <input type='email' placeholder='رقم الهاتف'
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none border border-gray-100 focus:border-yellow-600 focus:bg-transparent transition-all" />
              <textarea placeholder='الرسالة' rows="6"
                className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-none border border-gray-100 focus:border-yellow-600 focus:bg-transparent transition-all"></textarea>

              <button type='button'
                className="text-white w-full relative bg-yellow-600 hover:bg-yellow-700 font-medium rounded-md text-[15px] px-6 py-2.5 cursor-pointer !mt-2">
                إرسال رسالة
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
