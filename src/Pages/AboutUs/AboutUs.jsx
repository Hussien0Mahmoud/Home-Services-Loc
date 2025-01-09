import React from 'react'
import AboutMission from '../../Components/AboutUs/AboutMission'
// import AboutWhyUs from '../../Components/AboutUs/AboutWhyUs'
import AboutGallary from '../../Components/AboutUs/AboutGallary'
import AboutVision from '../../Components/AboutUs/AboutVision'
import Banner from '../../Components/Banner/Banner'
import ServicesIntrodus from "../../Components/Services/ServicesIntrodus/ServicesIntrodus"

export default function AboutUs() {
  return (
    <div>
      <Banner title=" من نكون "/>
      <AboutMission/>
      <AboutVision/>
      {/* <AboutWhyUs/> */}
      <AboutGallary/>
      <ServicesIntrodus/>
    </div>
  )
}
