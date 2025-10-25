'use client';

import { upcomingEvents } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

function UpcomingEvents() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <h3 data-aos='zoom-in-up' className='text-[40px] font-semibold text-center'>Upcoming Events</h3>
            <p data-aos='zoom-in-up' className='text-center'>Stay up to date with our programs and events</p>

            <div className='w-full mt-10'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 2.5,
                            slideShadows: false,
                        }
                    }
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                            spaceBetween: 20,
                            coverflowEffect: {
                                depth: 200,
                                modifier: 2.5,
                            },
                        },
                        768: {
                            slidesPerView: 1.3,
                        },
                        925: {
                            slidesPerView: 2.3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[EffectCoverflow]}
                    className="w-[95%] mx-auto max-w-[1400px]"
                >
                    {upcomingEvents.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='w-full flex flex-col p-2 rounded-2xl shadow-md h-[500px] md:h-[600px] bg-[#F5F5F5]' key={item.id}>
                                <div className='w-full h-[65%] md:h-[70%]'>
                                    <Image className='w-full h-full object-cover rounded-2xl' src={item.image} alt="" />
                                </div>
                                <div className='mt-auto flex flex-col w-full'>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{
                `
        .swiper-slide {
          transition: transform 0.4s ease, opacity 0.4s ease;
            position: relative;
            overflow: hidden; /* keeps overlay contained */
            transition: all 0.4s ease;
        }
        .swiper-slide::before {
            content: "";
            position: absolute;
            inset: 0; /* top: 0; right: 0; bottom: 0; left: 0 */
            background: rgba(0, 0, 0, 0.4); /* dark transparent layer */
            opacity: 1;
            transition: opacity 0.4s ease;
            z-index: 1; /* sits above image but below text if needed */
            border-radius: 20px;
        }
        .swiper-slide-active {
          z-index: 2;
        }
        .swiper-slide-active::before {
            opacity: 0; /* makes center bright */
        }
        .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next):not(.swiper-slide-prev) {
          transform: scale(0.8) !important;
          opacity: 0.7;
        }
      `
            }
            </style>
        </div>
    )
}

export default UpcomingEvents