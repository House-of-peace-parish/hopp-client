'use client';
import { footerLinks } from '@/data/footer'
import Link from 'next/link';
import React from 'react'
import { IoShareSocial } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

function Footer() {
    return (
        <div className='w-full'>
            <div className='footer-bg relative w-full md:px-24 px-6 py-16'>
                <div className='flex flex-col text-center items-center w-full'>
                    <h3 className='text-[40px] font-semibold text-[#F5F5F5]'>Connect With us</h3>
                    <Link className='link-btn relative flex items-center justify-center w-[200px] py-4 border-2 border-[#F5F5F5] rounded-md mt-10 text-[#F5F5F5] transition-colors' href='/resources/contact'>
                        <span>Connect</span>
                    </Link>
                </div>
            </div>
            <div className='w-full md:px-24 px-6 py-16 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-6 bg-[#111827]'>
                {
                    footerLinks.map(({ id, title, list, icon: Icon, link }) => (
                        <div className='flex flex-col gap-6 text-[#F5F5F5]' key={id}>
                            <div className='flex items-center gap-2'>
                                <Icon className='text-[#A42A2A]' size={40} />
                                <h3 className='font-semibold'>{title}</h3>
                            </div>
                            <div className='flex flex-col gap-2'>
                                {
                                    list.map(({ id, header, text }) => (
                                        <div className='flex items-center gap-2 text-[14px]' key={id}>
                                            <h4 className='font-semibold'>{header}</h4>
                                            <p>{text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                <div className='flex flex-col gap-6 text-[#F5F5F5]'>
                    <div className='flex items-center gap-2'>
                        <IoShareSocial className='text-[#A42A2A]' size={40} />
                        <h3 className='font-semibold'>Socials</h3>
                    </div>
                    <div className="flex items-center md:gap-6 gap-3">
                        <Link href="https://www.instagram.com/rccg_house_of_peace">
                            <FaInstagram className="text-[#F5F5F5] hover:text-[#A42A2A] transition-colors duration-150" size={26} />
                        </Link>
                        <Link href="https://www.facebook.com/RCCGHouseofPeaceRegina">
                            <FaFacebook className="text-[#F5F5F5] hover:text-[#A42A2A] transition-colors duration-150" size={26} />
                        </Link>
                        <Link href="https://www.youtube.com/@rccghouseofpeacereginaskcanada">
                            <FaYoutube className="text-[#F5F5F5] hover:text-[#A42A2A] transition-colors duration-150" size={26} />
                        </Link>
                        <Link href="https://www.tiktok.com/@rccghouseofpeace.regina">
                            <FaTiktok className="text-[#F5F5F5] hover:text-[#A42A2A] transition-colors duration-150" size={26} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5079.742883145522!2d-104.61863489999999!3d50.462118600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e596a0128e9%3A0x3dc7265818117213!2s1042%20Albert%20St%2C%20Regina%2C%20SK%20S4R%202P8!5e0!3m2!1sen!2sca!4v1761075967731!5m2!1sen!2sca" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='p-6 flex justify-center bg-[#3B82F6] text-[#F5F5F5]'>
                <p>&copy; All right reserved 2025 House Of Peace Parish</p>
            </div>
        </div>
    )
}

export default Footer