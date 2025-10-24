import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pastors from '../../assets/landPage/pastors.jpg'

function AboutUs() {
    return (
        <div className='w-full md:px-24 px-6 py-16 gap-10 flex md:flex-row flex-col items-center'>
            <div data-aos='fade-down-right' className='md:w-[50%] w-full'>
                <Image style={{ boxShadow: '15px 15px 8px #5A9BD5' }} className='w-full md:w-[800px] h-[400px] md:h-[550px] object-cover rounded-2xl' src={pastors} alt='' />
            </div>
            <div className='md:w-[50%] w-full flex flex-col'>
                <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px]'>Pastor David and Lola Adeosun</h4>
                <h3 data-aos="fade-up-left" className='text-[40px] font-semibold'>Raising Kingdom Stars ...</h3>
                <p data-aos="fade-up-left">
                    House of Peace Parish (HOPP) in Regina is a thriving community dedicated to raising Kingdom Stars through the practical teaching and application of God’s Word. We believe the scripture reveals your true potential, helping you understand your identity and divine purpose. As Ephesians 1:11 (MSG) reminds us: 'It’s in Christ that we find out who we are (IDENTITY) and what we are living for (PURPOSE).' At HOPP, discovering your true identity and purpose empowers you to live victoriously and walk fully in your God-given destiny.
                </p>

                <Link data-aos="fade-up-left" href='' className='flex items-center px-4 py-3 bg-[#2E8B57] rounded-md w-fit mt-6 text-[#F5F5F5] hover:bg-[#1E5631] transition duration-150'>
                    <span>About us</span>
                </Link>
            </div>
        </div>
    )
}

export default AboutUs