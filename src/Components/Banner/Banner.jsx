
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Banner(props) {
  return (

    <section className="bg-gray-900 h-96 align-center flex justify-center items-center  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative -mx-4 overflow-hidden px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-40">
          <div className="relative mx-auto grid max-w-2xl gap-x-32 gap-y-2 text-center xl:max-w-none">
            <p className="mb-4 text-2xl font-medium tracking-tight text-yellow-700">
              {props.subtitle}
            </p>
            <h4 className="text-3xl font-bold tracking-tight text-white ">
              {props.title}
            </h4>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4">
              <Link className="rounded-2xl py-10 px-8 md:p-4 md:px-6 flex items-center bg-white text-gray-900 hover:bg-gray-50 hover:text-yellow-800 text-2xl font-bold"
                to="/">
                <FaHome className="text-base mx-2" />
                الرئيسية
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}