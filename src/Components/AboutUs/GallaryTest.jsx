import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import worker1 from "../../assets/About/worker1.jpg";
import worker2 from "../../assets/About/worker2.jpg";
import worker3 from "../../assets/About/worker3.jpg";
import worker4 from "../../assets/About/worker4.jpg";
import worker5 from "../../assets/About/worker5.jpg";

export default function GallaryTest() {
const images = [worker1, worker2, worker3, worker4, worker5];

return ( <section className="py-24"> <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

```
    {/* Title */}
    <div className="pb-16">
      <h2 className="text-center text-gray-900 text-4xl font-bold pb-2.5">
        صورنا
      </h2>
      <p className="text-center text-gray-600 text-lg">
        استكشف جوهر الجمال في مساحتنا الحميمة.
      </p>
    </div>

    <div className="relative w-full mx-auto">
      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay, Parallax]}
        navigation={true}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        spaceBetween={25}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 15 },
          600: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
        }}
        className="w-full pt-8"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="flex flex-col items-center">
            <div className="w-full h-72 rounded-xl overflow-hidden shadow-md">
              <img
                src={img}
                alt="Worker"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>

  {/* Custom Tailwind CSS for Swiper Navigation */}
  <style >{`
    .swiper-button-next,
    .swiper-button-prev {
      color: #8b5d0dff; /* Tailwind yellow-500 */
    }
  `}</style>
</section>


);
}
