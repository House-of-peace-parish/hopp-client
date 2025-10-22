import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import YouthHead from './youths/YouthHead'
import YouthMain from './youths/YouthMain'
import Footer from '@/components/footer/Footer'

function page() {
    return (
        <>
            <Navbar />
            <YouthHead />
            <YouthMain />
            <Footer />
        </>
    )
}

export default page