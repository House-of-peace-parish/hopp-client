import { teen } from '@/data/growBody'
import Image from 'next/image'
import React from 'react'


function Teen() {
    return (
        <div className='w-full md:px-24 px-6 py-16 gap-10 flex md:flex-row flex-col items-center'>
            <div data-aos='fade-down-right' className='md:w-[50%] w-full'>
                <Image style={{ boxShadow: '15px 15px 8px #5A9BD5' }} className='w-full md:w-[800px] h-[400px] md:h-[550px] object-cover rounded-2xl' src={teen.image} alt='' />
            </div>
            <div className='md:w-[50%] w-full flex flex-col'>
                <h3 data-aos="fade-up-left" className='text-[40px] font-semibold'>{teen.title}</h3>
                <div>
                    <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px]'>{teen.header1}</h4>
                    <p data-aos="fade-up-left">{teen.para1}</p>
                </div>
                <div className='mt-4'>
                    <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px]'>{teen.header2}</h4>
                    <div className='flex flex-col gap-1'>
                        {
                            teen.para2.map((item, id) => (
                                <div data-aos={`${id % 2 === 0 ? 'fade-right' : 'fade-left'}`} className='flex md:flex-row flex-col gap-2 md:items-center' key={item.id}>
                                    <p>{item.goal}</p>
                                    <p className='underline'>{item.scripture}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teen