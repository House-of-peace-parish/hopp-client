import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import VolunteerHead from './VolunteerHead'
import VolunteerBody from './VolunteerBody'
import Footer from '@/components/footer/Footer'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function page() {
  return (
    <>
      <Navbar />
      <VolunteerHead />
      <VolunteerBody />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default page