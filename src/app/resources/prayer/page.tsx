import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import PrayerHead from './PrayerHead'
import PrayerMain from './PrayerMain'
import Footer from '@/components/footer/Footer'

function page() {
    return (
        <>
            <Navbar />
            <PrayerHead />
            <PrayerMain />
            <Footer />
        </>
    )
}

export default page