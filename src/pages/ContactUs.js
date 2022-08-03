import React, { useState } from 'react'
import '../App.css';
import ContactUsSection from '../components/ContactUsSection';
import ContactUsSuccess from '../components/ContactUsSuccess';
import Footer from '../components/Footer'

function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
    <ContactUsSection />
    {!isSubmitted ? <ContactUs submitForm={submitForm} /> : <ContactUsSuccess />}
    <Footer />
</>
  )
}

export default ContactUs