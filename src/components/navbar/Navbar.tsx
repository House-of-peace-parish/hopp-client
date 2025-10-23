'use client';

import React, { useState } from 'react';
import logoMark from '../../assets/logo/Logomark.png';
import parishLogoW from '../../assets/logo/Logo Black.png';
import Image from 'next/image';
import { navbarHeader } from '@/data/navbar';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const handleNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <div className='w-full'>
            <div className='w-full py-8 md:py-12 flex justify-center items-center'>
                <div className='w-fit flex gap-10'>
                    <div className='flex items-center gap-4'>
                        <Image className='w-[70px] md:w-[100px] h-[70px] md:h-[100px] object-cover' src={logoMark} alt="Main logo of rccg" />
                        <div className='w-1 h-[100px] border-l-2 border-l-blue-600'></div>
                        <Image className='w-[100px] md:w-[200px] h-[50px] md:h-[100px]' src={parishLogoW} alt="Main logo of House of peace parish" />
                    </div>
                    <div className='hidden md:flex gap-10'>
                        {
                            navbarHeader.map(({ id, icon: Icon, title, text, link }) => (
                                <div className='flex items-center gap-2' key={id}>
                                    <Icon className='text-[#A42A2A]' size={50} />
                                    <div className=''>
                                        <h3 className='font-semibold'>{title}</h3>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full py-6 md:py-10 px-6 md:px-24 flex justify-between items-center bg-[#3B82F6] relative">
                {/* Hamburger Icon */}
                <div
                    onClick={handleNav}
                    className="border-2 border-[#F5F5F5] p-2 rounded-md cursor-pointer md:hidden"
                >
                    <GiHamburgerMenu className="text-[#F5F5F5]" size={20} />
                </div>

                {/* Navigation Links */}
                <div
                    className={`fixed top-0 left-0 h-full bg-[#3B82F6] flex flex-col items-center justify-center gap-6  text-[#F5F5F5] font-semibold text-lg transform transition-transform duration-700 ease-in-out ${openNav ? 'translate-x-0 w-[70vw] z-20' : '-translate-x-full'} md:static md:flex md:flex-row md:h-auto md:w-auto md:translate-x-0 md:gap-8`}
                >
                    <Link href="/">Home</Link>
                    <Link href="/live">Live</Link>
                    <Link href="/donate">Donate</Link>
                    <Link href="/grow">Grow</Link>
                    <Link href="/newHere">New Here?</Link>
                    <Link href="/resources">Resources</Link>
                </div>

                {/* Social Icons */}
                <div className="flex items-center md:gap-6 gap-3 z-30">
                    <Link href="">
                        <FaInstagram className="text-[#F5F5F5]" size={26} />
                    </Link>
                    <Link href="">
                        <FaFacebook className="text-[#F5F5F5]" size={26} />
                    </Link>
                    <Link href="">
                        <FaYoutube className="text-[#F5F5F5]" size={26} />
                    </Link>
                </div>

                {/* Optional Overlay for mobile */}
                {openNav && (
                    <div
                        onClick={handleNav}
                        className="fixed inset-0 bg-black/40 z-10 md:hidden transition-opacity duration-700"
                    ></div>
                )}
            </div>

        </div>
    )
}

export default Navbar