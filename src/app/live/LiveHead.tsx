import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import live from '../../assets/live/live.jpg'

function LiveHead() {
    return (
        <header className='w-full h-screen relative'>
            <div className='w-full h-full'>
                <Image className='h-full w-full object-cover' src={live} alt='Parish Logo' />
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center md:items-center text-[#F5F5F5] md:px-24 px-6'>
                <Link href=''>
                    <div className='flex items-center justify-center gap-6 rounded-3xl w-[200px] h-[100px] bg-[#A42A2A]'>
                        <FaPlay size={50} />
                        <span className='text-[2rem] font-bold'>LIVE</span>
                    </div>
                </Link>
                <h3 className='text-[2rem] font-semibold mt-4'>Join our services online from any part of the world</h3>
            </div>
        </header>
    )
}

export default LiveHead