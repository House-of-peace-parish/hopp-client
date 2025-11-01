import React from 'react'
import Image from 'next/image'
import live from '../../../assets/live/praise.jpg'

function VolunteerHead() {
    return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={live} alt='' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-[#F5F5F5] md:px-24 px-6 text-center'>
                <h1 data-aos="zoom-in-up" className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold'>Join Our Volunteer Team</h1>
                <h3 data-aos="zoom-in-up" className='text-[1.5rem] sm:text-[2rem] font-semibold'>Serving with Love, Purpose, and Community Impact</h3>
            </div>
        </header>
    )
}

export default VolunteerHead