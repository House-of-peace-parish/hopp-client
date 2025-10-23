import { fundChurch } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'

function Giving() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <h3 className='text-[40px] font-semibold text-center'>Fund Raising</h3>
            <p className='text-center'></p>

            <div className='w-full mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                {
                    fundChurch.map((item) => (
                        <div className='w-full rounded-2xl overflow-hidden shadow-md shadow-slate-700/20 relative h-[400px]' key={item.id}>
                            <div className='w-full h-full'>
                                <Image className='w-full h-full object-cover' src={item.image} alt="" />
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full bg-black/30 text-[#F5F5F5] flex flex-col'>
                                <div className='mt-auto h-fit w-full p-2'>
                                    <h4 className='font-semibold border-b-2 border-b-[#5A9BD5] w-fit text-[20px]'>{item.title}</h4>
                                    <span className='text-[12px]'>{item.days}</span>
                                    <div className='text-[14px] flex items-center gap-4'>
                                        <span>Amount raised: <strong className=' underline'>{item.amountRaised}</strong></span>
                                        <span>Goal: <strong className='underline'>{item.goalAmount}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Giving