
import worker1 from '../../assets/About/worker1.jpg'
import worker2 from '../../assets/About/worker2.jpg'
import worker3 from '../../assets/About/worker3.jpg'
import worker4 from '../../assets/About/worker4.jpg'
import worker5 from '../../assets/About/worker5.jpg'

export default function 
() {
  return (
    // <!-- gallery -->
<section className="text-gray-700 body-font" id="gallery">
    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
        صورنا
    </div>

    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

        <div className="group relative">
            <img
      src={worker4}
      alt="Image 1" 
      className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
        </div>

        <div className="group relative">
            <img
      src={worker2}
      alt="Image 1"
      className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
        </div>

        <div className="group relative">
            <img
      src={worker5}
      alt="Image 1"
      className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
        </div>
        <div className="group relative">
            <img
      src={worker3}
      alt="Image 1"
      className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
        </div>
    </div>

</section>
  )
}