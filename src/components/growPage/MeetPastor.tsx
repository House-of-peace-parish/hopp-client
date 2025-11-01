'use client';
import { useState, useEffect } from 'react';
import { MeetData } from '@/data/growBody'
import React from 'react'

function MeetPastor({ meetData }: { meetData: MeetData }) {
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
        <div className='w-full md:px-24 px-6 py-16'>
            <h3 data-aos="fade-up-left" className='text-[40px] font-semibold text-center'>{meetData.header}</h3>

            <div className='flex md:flex-row flex-col gap-6 mt-10 justify-center '>
                {
                    meetData.pastors.map((item, id) => (
                        <div data-aos={
                            windowSize > 768
                                ? 'fade-up'
                                : id % 2 === 0
                                    ? 'fade-up-left'
                                    : 'fade-up-right'
                        } className='w-full sm:w-[350px] h-fit relative rounded-2xl bg-[#1E5631] overflow-hidden' key={item.id}>
                            <div className='w-full h-[300px] md:h-[500px]'>
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full bg-black/30 text-[#F5F5F5] flex flex-col'>
                                <div className='h-full flex flex-col justify-center w-full p-6'>
                                    <p data-aos="fade-up" className='text-[14px]'>{item.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MeetPastor