'use client';

import { community } from '@/data/landbody'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

function CommunityInit() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <div className='flex flex-col items-center justify-center'>
                <h3 data-aos='zoom-in-up' className='text-[40px] font-semibold text-center'>{community.header}</h3>
                <p data-aos='zoom-in-up'>{community.desc}</p>
                <Link data-aos='zoom-in-up' className='flex items-center px-4 py-3 bg-[#2E8B57] rounded-md w-fit mt-6 text-[#F5F5F5] hover:bg-[#1E5631] transition duration-150' href='' >
                    <span>Learn More</span>
                </Link>
            </div>

            <div className='w-full mt-10'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                    }}
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
                    modules={[EffectCoverflow, Autoplay]}
                    className="w-[95%] mx-auto max-w-[1400px]"
                >
                    {
                        community.initiatives.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className='w-full flex flex-col p-2 rounded-2xl shadow-md shadow-slate-700/20 h-[500px] md:h-[600px] bg-[#F5F5F5]' >
                                    <div className='w-full h-[65%] md:h-[75%]'>
                                        <Image className='w-full h-full object-cover rounded-2xl' src={item.img} alt="" />
                                    </div>
                                    <div className='mt-auto flex flex-col gap-2 w-full'>
                                        <h4 className='font-semibold border-b-2 border-b-[#5A9BD5] w-fit text-[20px]'>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default CommunityInit