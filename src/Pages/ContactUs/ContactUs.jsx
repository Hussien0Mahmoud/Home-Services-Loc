import React from 'react'
import ContactForm from '../../Components/Contact/ContactForm'
import ContactBox from '../../Components/Contact/ContactBox'
import Banner from '../../Components/Banner/Banner'
import ContactMap from '../../Components/Contact/ContactMap'

export default function ContactUs() {
  return (
    <>
    <Banner title=" تواصل معنا  "/>
    <ContactForm/>
    <ContactBox/>
    {/* <ContactMap />  */}
    </>

  )
}
