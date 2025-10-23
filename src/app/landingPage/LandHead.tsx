import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import church from '../../assets/landPage/church.jpg'

function LandHead() {
    return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={church} alt='' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center md:items-center text-[#F5F5F5] md:px-24 px-6'>
                <h3 className='text-[2rem] font-semibold'>Welcome to RCCG</h3>
                <h1 className='text-[6rem] font-bold'>HOUSE OF PEACE PARISH</h1>
                <p>
                    We are a vibrant parish under The Redeemed Christian Church of God, dedicated to raising Kingdom Stars for global influence through the teaching and application of God’s Word.
                </p>
                <Link href=''>
                    <div className='flex items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] px-6 py-4 rounded-md hover:bg-[#1E5631] transition'>
                        <p>Join us online</p>
                        <FaArrowRight size={24} />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default LandHead