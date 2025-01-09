
import header1 from '../../../assets/Home/header1.jpg'
import header2 from '../../../assets/Home/header2.jpg'
import header3 from '../../../assets/Home/header3.jpg'
import header4 from '../../../assets/Home/header4.jpg'
import header5 from '../../../assets/Home/header5.jpg'
import header6 from '../../../assets/Home/header6.jpg'
import header7 from '../../../assets/Home/1220.jpg'
import header8 from '../../../assets/Home/bg-home6.avif'
import header9 from '../../../assets/Home/bg-home3.jpeg'
import header10 from '../../../assets/Home/bg-home4.webp'
import header11 from '../../../assets/Home/header3.jpg'
import header12 from '../../../assets/Home/bg-12.jpg'
export default function HomeBanner() {
  return (
    <>
    <section className="relative  flex flex-col items-center justify-center text-center text-white h-96 ">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden  bg-servicesHeaderBG bg-cover bg-center bg-no-repeat ">
      {/* <img src={header12} className="w-full h-full " alt="Header Image" /> */}
        {/* <video className="min-w-full min-h-full absolute object-cover"
            src="https://videocdn.cdnpk.net/videos/6f674991-0ac3-4d0f-8570-8d55e40a22f4/horizontal/previews/clear/large.mp4?token=exp=1733752424~hmac=374e36ce60fd482a455badc3b1c48789bd1391fffe9bf0e2ffcce362a1084a9c"
            type="video/mp4" autoPlay muted loop></video> */}

    </div>
    <div className="video-content space-y-2 z-10">
        <h1 className=" text-6xl font-bold mb-7 text-white">  أهلا بك في<span className="text-yellow-500" >  بيتــك </span>
        </h1>
        <h3 className=" text-4xl  text-yellow-500 font-medium   leading-relaxed">  
        نحن هنا لنقدم لك أفضل الخدمات المنزلية في أي وقت.<br/> من التنظيف والصيانة إلى إصلاح الأجهزة، وكل شيء في ما بينهما.
                      </h3>
    </div>
</section>

    </>
  )
}


// <div className='bg-test'>Banner</div>
