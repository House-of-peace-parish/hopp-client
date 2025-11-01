import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { landHeadCarousel } from '@/data/landbody';

function MinistryHead() {
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
        <h1 data-aos="zoom-in-up" className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold'>Our Ministries</h1>
        <h3 data-aos="zoom-in-up" className='text-[1.5rem] sm:text-[2rem] font-semibold'>Discover your purpose in serving God.</h3>
      </div>
    </header>
  )
}

export default MinistryHead