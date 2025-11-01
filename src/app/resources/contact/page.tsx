import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import ContactHead from './ContactHead'
import ContactBody from './ContactBody'
import Footer from '@/components/footer/Footer'
import { ToastContainer } from 'react-toastify'

function page() {
  return (
    <>
        <Navbar />
        <ContactHead />
        <ContactBody />
        <Footer />
        <ToastContainer />
    </>
  )
}

export default page