import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { landHeadCarousel } from '@/data/landbody';
import { FaPlay } from 'react-icons/fa';

function LiveHead() {
    return (
        <header className='w-full h-screen relative'>
            <Swiper
                className='w-full h-full'
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
            >
                {
                    landHeadCarousel.map((item) => (
                        <SwiperSlide className='h-full w-full'>
                            <Image className='h-full w-full object-cover' src={item.image} alt='Carousel slides' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='absolute top-0 left-0 z-10 w-full h-full bg-black/40 flex flex-col justify-center items-center text-[#F5F5F5] md:px-24 px-6 text-center'>
                <Link data-aos="zoom-in-up" href='https://www.instagram.com/reel/DQStp5fDVAk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>
                    <div className='flex items-center justify-center gap-6 rounded-3xl w-[200px] h-[100px] bg-[#A42A2A]'>
                        <FaPlay size={50} />
                        <span className='text-[2rem] font-bold'>LIVE</span>
                    </div>
                </Link>
                <h3 data-aos="zoom-in-up" className='text-[1.5rem] sm:text-[2rem] font-semibold'>Join our services online from any part of the world</h3>
            </div>
        </header>
    )
}

export default LiveHead