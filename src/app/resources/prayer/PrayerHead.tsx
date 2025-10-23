import Image from 'next/image'
import React from 'react'
import footer from '../../../assets/footer/footer.jpg'

function PrayerHead() {
    return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={footer} alt='' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-[#F5F5F5] md:px-24 px-6 text-center'>
                <h1 className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold'>Submit Your Prayer Requests</h1>
                <h3 className='text-[1.5rem] sm:text-[2rem] font-semibold'>We Stand with You in Faith and Support</h3>
            </div>
        </header>
    )
}

export default PrayerHead