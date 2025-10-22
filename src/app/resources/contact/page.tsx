import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import ContactHead from './ContactHead'
import ContactBody from './ContactBody'
import Footer from '@/components/footer/Footer'

function page() {
  return (
    <>
        <Navbar />
        <ContactHead />
        <ContactBody />
        <Footer />
    </>
  )
}

export default page