import { upcomingEvents } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

function UpcomingEvents() {
  return (
    <div className='w-full md:px-24 px-6 py-16'>
        <h3 className='text-[40px] font-semibold text-center'>Upcoming Events</h3>
        <p className='text-center'>Stay up to date with our programs and events</p>

        <div className='w-full mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            {
                upcomingEvents.map((item) => (
                    <div className='w-full p-2 rounded-2xl shadow-md shadow-slate-700/20' key={item.id}>
                        <div className='w-full h-fit'>
                            <Image className='w-full h-[350px] object-cover rounded-2xl' src={item.image} alt="" />
                        </div>
                        <div className='mt-4 flex flex-col w-full'>
                            <h4 className='font-semibold border-b-2 border-b-[#5A9BD5] w-fit text-[20px]'>{item.title}</h4>
                            <div className='flex gap-4 my-2'>
                                <div className='flex items-center gap-1'>
                                    <FaRegCalendarAlt className='inline text-[#A42A2A]' size={20} />
                                    <span className='ml-2'>{item.date}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaRegClock className='inline text-[#A42A2A]' size={20} />
                                    <span className='ml-2'>{item.time}</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <MdLocationPin className='inline text-[#A42A2A]' size={20} />
                                <span>{item.location}</span>
                            </div>
                            <p className='mt-2'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default UpcomingEvents