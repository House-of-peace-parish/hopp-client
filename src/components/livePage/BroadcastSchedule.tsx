import { broadCastSchedule } from '@/data/liveBody'
import Image from 'next/image'
import React from 'react'
import broadcast from '../../assets/gallery/broadcast.jpg'

function BroadcastSchedule() {
    return (
        <div className='w-full md:px-24 px-6 py-16 gap-10 flex md:flex-row flex-col items-center'>
            <div className='md:w-[50%] w-full'>
                <Image data-aos='fade-down-right' style={{ boxShadow: '15px 15px 8px #5A9BD5' }} className='w-full md:w-[800px] h-[400px] md:h-[550px] object-cover rounded-2xl' src={broadCastSchedule.image} alt='' />
            </div>
            <div className='md:w-[50%] w-full flex flex-col'>
                <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px]'>{broadCastSchedule.title}</h4>
                <h3 data-aos="fade-up-left" className='text-[40px] font-semibold'>Sunday Service Live ...</h3>

                <div className='flex flex-col gap-2 mt-4'>
                    {
                        broadCastSchedule.schedule.map(({ id, day, time, icon: Icon }) => (
                            <div data-aos="fade-up-left" className='flex items-center gap-4' key={id}>
                                <Icon className='text-[#2E8B57]' size={35} />
                                <div className='flex flex-col'>
                                    <span className='font-semibold'>{day}</span>
                                    <span>{time}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BroadcastSchedule