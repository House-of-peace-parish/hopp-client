'use client';

import { fundChurch, givingOptions } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Link from 'next/link';

function Giving() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <h3 data-aos='zoom-in-up' className='text-[40px] font-semibold text-center'>Giving</h3>
            <p data-aos='zoom-in-up' className='text-center'></p>

            <div className='w-full mt-10'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={2}
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
                            slidesPerView: 2,
                        },
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="w-[95%] mx-auto max-w-[1400px]"
                >
                    {givingOptions.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={`${item.id % 2 === 0 ? 'bg-[#1E5631]' : 'bg-[#A42A2A]'} w-full rounded-2xl overflow-hidden shadow-md shadow-slate-700/20 relative h-[500px] md:h-[600px] text-[#F5F5F5] flex flex-col items-center justify-center text-center`}>
                                <h4 className='font-bold text-[20px]'>{item.title}</h4>
                                <p>{item.description}:</p>
                                <button className='link-btn relative flex items-center justify-center w-60 py-4 bg-[#5A9BD5] rounded-md mt-10 text-[#F5F5F5] hover:text-[#F5F5F5] transition-colors'>
                                    {item.email}
                                </button>
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
            background: rgba(0, 0, 0, 0.4);
            opacity: 1;
            transition: opacity 0.4s ease;
            z-index: 1;
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

export default Giving