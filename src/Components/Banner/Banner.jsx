import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Banner({ title }) {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden bg-singleService2 bg-right-top bg-black z-0">

      {/* دوائر مضيئة متحركة */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* المحتوى */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]">
          {title}
        </h1>

        <p className="mt-4 font-bold text-gray-100 text-2xl md:text-xl max-w-2xl mx-auto leading-relaxed">
          نحن فريق متخصص في الصيانة المنزلية نقدم خدمات سريعة وموثوقة
          مع جودة عالية لتلبية احتياجاتك بسهولة.
        </p>

        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold py-3 px-7 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            <FaHome className="text-lg" />
            الرئيسية
          </Link>
        </div>
      </motion.div>

      {/* شريط زخرفي أسفل البانر */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 z-10"></div>
    </section>
  );
}
