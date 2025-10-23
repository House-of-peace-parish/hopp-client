import Image from 'next/image'
import React from 'react'
import potluck from '../../../assets/landPage/potluck.jpg'

function ContactHead() {
    return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={potluck} alt='' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-[#F5F5F5] md:px-24 px-6 text-center'>
                <h1 className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold'>Contact the Church</h1>
                <h3 className='text-[1.5rem] sm:text-[2rem] font-semibold'>We’re Here to Listen, Support, and Guide You</h3>
            </div>
        </header>
    )
}

export default ContactHead