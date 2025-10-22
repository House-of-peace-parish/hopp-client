import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import TeenHead from './TeenHead'
import TeenBody from './TeenBody'

function page() {
    return (
        <>
            <Navbar />
            <TeenHead />
            <TeenBody />
            <Footer />
        </>
    )
}

export default page