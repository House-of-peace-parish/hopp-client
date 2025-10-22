import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import EventHead from './events/EventHead'
import EventMain from './events/EventMain'
import Footer from '@/components/footer/Footer'

function page() {
  return (
    <>
        <Navbar />
        <EventHead />
        <EventMain />
        <Footer />
    </>
  )
}

export default page