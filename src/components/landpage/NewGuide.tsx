import { newGuide } from '@/data/landbody'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewGuide() {
    return (
        <div className='w-full md:px-24 px-6 py-16 gap-10 flex md:flex-row flex-col items-center'>
            <div className='md:w-[50%] w-full flex flex-col'>
                <h4 className='text-[#A42A2A] text-[20px]'>{newGuide.title}</h4>
                <h3 className='text-[40px] font-semibold'>{newGuide.header}</h3>
                <p>{newGuide.desc}</p>

                <Link  className='flex items-center px-4 py-3 bg-[#2E8B57] rounded-md w-fit mt-6 text-[#F5F5F5] hover:bg-[#1E5631] transition duration-150' href={newGuide.link}>
                    <span>{newGuide.text}</span>
                </Link>
            </div>
            <div className='md:w-[50%] w-full'>
                <Image style={{ boxShadow: '15px 15px 8px #5A9BD5' }} className='w-full md:w-[800px] h-[550px] object-cover rounded-2xl' src={newGuide.img} alt='' />
            </div>
        </div>
    )
}

export default NewGuide