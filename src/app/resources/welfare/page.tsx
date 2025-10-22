import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import WelfareHead from './WelfareHead'
import WelfareMain from './WelfareMain'
import Footer from '@/components/footer/Footer'

function page() {
    return (
        <>
            <Navbar />
            <WelfareHead />
            <WelfareMain />
            <Footer />
        </>
    )
}

export default page