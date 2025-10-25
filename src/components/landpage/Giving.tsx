'use client';

import { fundChurch } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

function Giving() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <h3 data-aos='zoom-in-up' className='text-[40px] font-semibold text-center'>Fund Raising</h3>
            <p data-aos='zoom-in-up' className='text-center'></p>

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
                    {fundChurch.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="w-full rounded-2xl overflow-hidden shadow-md shadow-slate-700/20 relative h-[500px] md:h-[600px]">
                                <div className="w-full h-full">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={400}
                                    />
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full bg-black/30 text-[#F5F5F5] flex flex-col">
                                    <div className="mt-auto h-fit w-full p-2">
                                        <h4 className="font-semibold border-b-2 border-b-[#5A9BD5] w-fit text-[20px]">
                                            {item.title}
                                        </h4>
                                        <span className="text-[12px]">{item.days}</span>
                                        <div className="text-[14px] flex items-center gap-4">
                                            <span>
                                                Amount raised:{" "}
                                                <strong className="underline">{item.amountRaised}</strong>
                                            </span>
                                            <span>
                                                Goal:{" "}
                                                <strong className="underline">{item.goalAmount}</strong>
                                            </span>
                                        </div>
                                    </div>
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