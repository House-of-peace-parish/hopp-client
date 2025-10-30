import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import church from '../../assets/landPage/church.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { landHeadCarousel } from '@/data/landbody';

function LandHead() {
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
                <h1 data-aos="zoom-in-up" className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold'>Welcome to The Redeemed Christian Church of God HOUSE OF PEACE</h1>
                <p data-aos="zoom-in-up">
                    Who We Are:
                    RCCG House of Peace Parish is a vibrant Pentecostal congregation of The Redeemed Christian Church of God (RCCG), dedicated to glorifying God through holiness, worship and the teaching of His Word.
                    We are a family of believers committed to growing in faith, living in peace, and preparing ourselves and others for eternal life with Christ.
                    In the heart of Regina, we stand as a centre of excellence, upholding prayer and transformation — where the broken are restored, the lost are saved, and every believer is equipped to live victoriously through the power of the Holy Spirit.

                </p>
                <Link data-aos="zoom-in-up" className='block w-fit' href='https://www.instagram.com/reel/DQStp5fDVAk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>
                    <div className='flex justify-center items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] w-[200px] h-[50px] rounded-md hover:bg-[#1E5631] transition'>
                        <p>Join us online</p>
                        <FaArrowRight size={24} />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default LandHead