'use client';
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import LiveHead from './LiveHead'
import LiveBody from './LiveBody'
import Footer from '@/components/footer/Footer'

function page() {
    return (
        <>
            <Navbar />
            <LiveHead />
            <LiveBody />
            <Footer />
        </>
    )
}

export default page