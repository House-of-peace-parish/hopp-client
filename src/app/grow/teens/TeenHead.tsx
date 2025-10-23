import Image from 'next/image'
import React from 'react'
import teen from '../../../assets/grow/teen.jpg'

function TeenHead() {
  return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={teen} alt='' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center md:items-center text-[#F5F5F5] md:px-24 px-6'>
                <h1 className='text-[6rem] font-bold'>Rising as Kingdom Stars</h1>
                <h3 className='text-[2rem] font-semibold'>Empowering teenagers to discover their identity, purpose, and strength in Christ.</h3>
            </div>
        </header>
  )
}

export default TeenHead