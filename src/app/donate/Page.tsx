import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import DonateHead from './DonateHead'
import DonateBody from './DonateBody'
import Footer from '@/components/footer/Footer'

function Page() {
    return (
        <>
            <Navbar />
            <DonateHead />
            <DonateBody />
            <Footer />
        </>
    )
}

export default Page