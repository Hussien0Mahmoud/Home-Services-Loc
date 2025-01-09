import { Link } from "react-router-dom";
import logo1 from "../../assets/logo/logoBlack.png";
import logo2 from "../../assets/logo/logoWhite.png";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-2xl uppercase text-yellow-400 font-bold">الصفحات</div>
          <ul>
            <li className="my-2">
              <Link className=" hover:text-blue-900 text-lg text-black" to="/">الرئيسية
              </Link>
            </li>
            <li className="my-2">
              <Link className="hover:text-blue-900 text-lg text-black " to="/about">من نحن</Link>
            </li>
            <li className="my-2">
              <Link className="hover:text-blue-900 text-lg text-black" to="/services">الخدمات</Link>
            </li>
            <li className="my-2">
              <Link className="hover:text-blue-900 text-lg text-black" to="/contact">تواصل معنا</Link>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-10/12 border-r text-center">
          <div className="flex flex-center">
          <img src={logo1}className="mx-auto" alt="" />

          </div>
          <p className="text-black text-2xl font-semibold mt-8  ">اطلب خدمات منزلك بأقل من دقيقة وأبشر، احنا بنخلص أمورك واستغل وقتك لعمل ما تحب!</p>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <Link to="#" className="w-6 mx-1">
            {/* Replace with actual SVGs as needed */}
            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Twitter Icon */}
            </svg>
          </Link>
          <Link to="#" className="w-6 mx-1">
            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Facebook Icon */}
            </svg>
          </Link>
        </div>
        <div className="my-5 text-lg ">جميع الحقوق محفوطة © بيتك 2024</div>
      </div>
    </footer>
  );
}

export default Footer;
