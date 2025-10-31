'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import React from 'react'
import { ministries } from '@/data/ministries'

function Generous() {
    const [windowSize, setWindowSize] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize(window.innerWidth);
            const handleResize = () => setWindowSize(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 w-full md:px-24 px-6 py-16 '>
            {
                ministries.map((item, id) => (
                    <div data-aos={
                        windowSize > 768
                            ? 'fade-up'
                            : id % 2 === 0
                                ? 'fade-up-left'
                                : 'fade-up-right'
                    } className='w-full h-fit relative rounded-2xl overflow-hidden' key={item.id}>
                        <div className='w-full h-[450px] md:h-[500px]'>
                            <Image className='w-full h-full object-cover' src={item.image} alt='' />
                        </div>
                        <div className='absolute top-0 left-0 w-full h-full bg-black/30 text-[#F5F5F5] flex flex-col'>
                            <div className='mt-auto h-fit w-full p-2'>
                                <div className='border-b-2 border-b-[#5A9BD5] w-full'>
                                    <h4 data-aos="fade-up" className='font-semibold w-fit text-[20px]'>{item.title}</h4>
                                </div>
                                <p data-aos="fade-up" className='text-[14px]'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Generous