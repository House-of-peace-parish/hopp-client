import Image from 'next/image'
import React from 'react'
import band from '../../../assets/landPage/band.jpg'

function YouthHead() {
    return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={band} alt='' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-[#F5F5F5] md:px-24 px-6 text-center'>
                <h1 className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold'> Empowering the Next Generation</h1>
                <h3 className='text-[1.5rem] sm:text-[2rem] font-semibold'>Together in Faith, Purpose, and Passion</h3>
            </div>
        </header>
    )
}

export default YouthHead