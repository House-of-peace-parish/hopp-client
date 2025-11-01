"use client"

import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import NewHead from './NewHead'
import NewMain from './NewMain'
import Footer from '@/components/footer/Footer'

function page() {
  return (
    <div>
        <Navbar />
        <NewHead />
        <NewMain />
        <Footer />
    </div>
  )
}

export default page