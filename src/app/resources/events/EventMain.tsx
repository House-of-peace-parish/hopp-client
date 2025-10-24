import { upcomingEvents } from '@/data/landbody';
import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch, AiOutlineFilter } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

function EventMain() {
    return (
        <div className='w-full md:px-24 px-6 py-16 overflow-hidden'>
            <div data-aos='zoom-in-up' className='w-full flex md:flex-row flex-col justify-between border-2 border-[#5A9BD5] rounded-md p-2'>
                <div className='flex flex-row items-center gap-2'>
                    <AiOutlineSearch size={30} />
                    <input className='w-full md:w-[700px] h-[50px] text-[#111827] rounded-md p-2 outline-0' type="text" placeholder='Search for events' />
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <button className='flex justify-center items-center gap-2 cursor-pointer bg-[#2E8B57] w-full sm:w-[200px] h-[50px] sm:mx-auto rounded-md hover:bg-[#1E5631] transition text-[#F5F5F5]'>Find events</button>
                    <AiOutlineFilter className='text-[#A42A2A]' size={30} />
                </div>
            </div>

            <div className='my-16'>
                <div>
                    <h3 data-aos='zoom-in-up' className='text-[40px] font-semibold text-center'>Upcoming Events</h3>
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

                <div className='my-16'>
                    <h3 className='text-[40px] font-semibold text-center'>Past Events</h3>
                    <div>
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
                </div>
            </div>
        </div>
    )
}

export default EventMain