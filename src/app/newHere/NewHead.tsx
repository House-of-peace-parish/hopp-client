import Image from 'next/image'
import React from 'react'
import newHere from '../../assets/new/newHere.jpg'

function NewHead() {
    return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={newHere} alt='' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center md:items-center text-[#F5F5F5] md:px-24 px-6'>
                <h1 className='text-[6rem] font-bold'>Welcome Home</h1>
                <h3 className='text-[2rem] font-semibold'>You Belong Here — A Place of Faith, Love, and Community</h3>
            </div>
        </header>
    )
}

export default NewHead