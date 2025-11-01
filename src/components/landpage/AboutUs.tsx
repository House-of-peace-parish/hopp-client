import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pastors from '../../assets/Home/Pastor and Pastor Mrs.jpg'

function AboutUs() {
    return (
        <div className='w-full md:px-24 px-6 py-16 gap-10 flex md:flex-row flex-col items-center'>
            <div data-aos='fade-down-right' className='md:w-[50%] w-full'>
                <Image style={{ boxShadow: '15px 15px 8px #5A9BD5' }} className='w-full md:w-[800px] h-[400px] md:h-[550px] rounded-2xl' src={pastors} alt='' />
            </div>
            <div className='md:w-[50%] w-full flex flex-col'>
                <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px]'>Pastor Tope Olanipekun and Pastor Mrs Caroline Olanipekun</h4>
                <h3 data-aos="fade-up-left" className='text-[40px] font-semibold'>Our Core Values ...</h3>
                <div className='mt-4'>
                    <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px]'>Our Vision</h4>
                    <p data-aos="fade-up-left">
                        To make heaven and to take as many people with us — by living a life of holiness, raising disciples rooted in the Word of God, and reflecting the peace of Christ in our generation.
                    </p>
                </div>
                <div className=''>
                    <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px]'>Our Mission</h4>
                    <p data-aos="fade-up-left">
                        To build a Christ-centered community where believers grow in grace and holiness, experience the transforming power of God’s presence, and actively share the gospel with others — fulfilling RCCG’s global call to prepare the nations for the coming of the Lord.
                    </p>
                </div>
                <div className=''>
                    <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px]'>Our core Values</h4>
                    <div className='flex flex-col gap-1'>
                        <div data-aos='fade-right' className='flex md:flex-row flex-col gap-2 md:items-center'>
                            <p className='underline'>Holiness:</p>
                            <p >We pursue purity of heart and obedience to God in all we do.</p>
                        </div>
                        <div data-aos='fade-right' className='flex md:flex-row flex-col gap-2 md:items-center'>
                            <p className='underline'>Worship:</p>
                            <p >We honour God with heartfelt praise and reverence in spirit and in truth.</p>
                        </div>
                        <div data-aos='fade-right' className='flex md:flex-row flex-col gap-2 md:items-center'>
                            <p className='underline'>The Word:</p>
                            <p >We are grounded in the unchanging Word of God as our guide for life and godliness.</p>
                        </div>
                        <div data-aos='fade-right' className='flex md:flex-row flex-col gap-2 md:items-center'>
                            <p className='underline'>Prayer:</p>
                            <p >We believe in the power of prayer to change lives, families, and nations.</p>
                        </div>
                        <div data-aos='fade-right' className='flex md:flex-row flex-col gap-2 md:items-center'>
                            <p className='underline'>Love:</p>
                            <p >We walk in love toward God and one another, creating a true house of peace.</p>
                        </div>
                        <div data-aos='fade-right' className='flex md:flex-row flex-col gap-2 md:items-center'>
                            <p className='underline'>Service:</p>
                            <p >We serve God and humanity through ministry, evangelism, and acts of compassion.</p>
                        </div>
                        <div data-aos='fade-right' className='flex md:flex-row flex-col gap-2 md:items-center'>
                            <p className='underline'>Discipleship:</p>
                            <p >We nurture spiritual growth, equipping believers to live purposefully and impact others for Christ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs