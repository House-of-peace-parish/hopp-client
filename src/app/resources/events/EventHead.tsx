import Image from 'next/image'
import React from 'react'
import potluck from '../../../assets/landPage/potluck.jpg';

function EventHead() {
    return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={potluck} alt='' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-[#F5F5F5] md:px-24 px-6 text-center'>
                <h1 data-aos="zoom-in-up" className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold'>Join Our Church Events</h1>
                <h3 data-aos="zoom-in-up" className='text-[1.5rem] sm:text-[2rem] font-semibold'>Fellowship, Fun, and Faith for Everyone</h3>
            </div>
        </header>
    )
}

export default EventHead