import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import CommunityHead from './CommunityHead'
import CommunityBody from './CommunityBody'
import Footer from '@/components/footer/Footer'

function page() {
  return (
    <div>
        <Navbar />
        <CommunityHead />
        <CommunityBody />
        <Footer />
    </div>
  )
}

export default page