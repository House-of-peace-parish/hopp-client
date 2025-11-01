import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import WelfareHead from './WelfareHead'
import WelfareMain from './WelfareMain'
import Footer from '@/components/footer/Footer'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function page() {
    return (
        <>
            <Navbar />
            <WelfareHead />
            <WelfareMain />
            <Footer />
            <ToastContainer />
        </>
    )
}

export default page