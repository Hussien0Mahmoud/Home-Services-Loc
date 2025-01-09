import Happiness from "../../Components/Home/Happiness/Happiness"
import HowApply from "../../Components/Home/HowApply/HowApply"
import CommonService from "../../Components/Services/Common-Service/CommonService"
// import ServicesGroup from "../../Components/Services/ServicesGroup/ServicesGroup"
import Test from "../../Components/Test/Test"
import HomeBanner from "../../Components/Home/HomeBanner/HomeBanner"
import AboutWhyUs from "../../Components/AboutUs/AboutWhyUs"


function Home() {
  return (
    <div className="">
      {/* <Test/> */}
      <HomeBanner/>
      <CommonService/>  
      {/* <ServicesGroup/> */}
      <HowApply/>
      <Happiness/>
      <AboutWhyUs/>
    </div>
  )
}

export default Home