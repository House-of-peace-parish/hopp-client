"use client"

import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import MinistryHead from './MinistryHead'
import Footer from '@/components/footer/Footer'
import MinistryBody from './MinistryBody'

function page() {
    return (
        <>
            <Navbar />
            <MinistryHead />
            <MinistryBody />
            <Footer />
        </>
    )
}

export default page