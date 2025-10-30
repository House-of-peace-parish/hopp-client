'use client';

import React, { useState } from 'react';
import logoMark from '../../assets/logo/Logomark.png';
import parishLogoW from '../../assets/logo/Logo Black.png';
import Image from 'next/image';
import { navbarHeader } from '@/data/navbar';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { FaAngleDown, FaTiktok } from 'react-icons/fa';


function Navbar() {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const handleNav = () => {
        setOpenNav(!openNav);
    };

    const [growOpen, setGrowOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    const handleGrowDropdown = () => {
        setGrowOpen(!growOpen);
        setResourcesOpen(false);
    };

    const handleResourcesDropdown = () => {
        setResourcesOpen(!resourcesOpen);
        setGrowOpen(false);
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
            <div className="w-full py-6 md:py-10 px-6 md:px-24 flex justify-between items-center bg-[#1E5631] relative">
                {/* Hamburger Icon */}
                <div
                    onClick={handleNav}
                    className="border-2 border-[#F5F5F5] p-2 rounded-md cursor-pointer md:hidden"
                >
                    <GiHamburgerMenu className="text-[#F5F5F5]" size={20} />
                </div>

                {/* Navigation Links */}
                <div
                    className={`md:nav_item grid gap-6 md:static fixed top-0 z-30 h-screen md:h-fit md:w-fit w-[70vw] md:bg-transparent bg-[#3B82F6] md:p-0 p-4 md:text-[#F5F5F5] text-[#F5F5F5] transition-all duration-700 ${openNav ? 'left-0' : '-left-full'
                        }`}
                >
                    <ul className='md:flex md:items-center md:flex-row flex-col h-full gap-3'>
                        {/* Close Button for Mobile */}
                        <div
                            onClick={handleNav}
                            className='md:hidden flex items-center justify-center w-10 h-10 ml-auto text-[25px] text-white cursor-pointer'
                        >
                            <IoCloseSharp />
                        </div>

                        {/* Home Links */}
                        <li className='md:nav_item leading-9 font-semibold'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='md:nav_item leading-9 font-semibold'>
                            <Link href='/live'>Live</Link>
                        </li>
                        <li className='md:nav_item leading-9 font-semibold'>
                            <Link href='/donate'>Donate</Link>
                        </li>

                        {/* GROW DROPDOWN */}
                        <li className='md:nav_item grid gap-2 relative'>
                            <div
                                onClick={handleGrowDropdown}
                                className='drop font-semibold flex items-center gap-2 cursor-pointer'
                            >
                                <span>Grow</span>
                                <FaAngleDown
                                    className={`transition-transform duration-300 ${growOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                />
                            </div>

                            {/* Dropdown Content */}
                            <div
                                className={`drop_courses md:absolute static -left-8 top-[50px] md:w-[180px] w-full rounded-md bg-[#2563EB] grid gap-2 font-medium text-[#F5F5F5] transition-all duration-500 ${growOpen
                                    ? 'opacity-100 max-h-[200px] p-2 overflow-visible'
                                    : 'opacity-0 max-h-0 overflow-hidden p-0'
                                    }`}
                            >
                                <Link href='/grow/teens' className='px-3 py-2 hover:bg-[#2E8B57] rounded-md'>
                                    Teens
                                </Link>
                                <Link href='/grow' className='px-3 py-2 hover:bg-[#2E8B57] rounded-md'>
                                    Youths
                                </Link>
                            </div>
                        </li>

                        <li className='md:nav_item leading-9 font-semibold'>
                            <Link href='/newHere'>New Here?</Link>
                        </li>

                        {/* RESOURCES DROPDOWN */}
                        <li className='md:nav_item grid gap-2 relative'>
                            <div
                                onClick={handleResourcesDropdown}
                                className='drop font-semibold flex items-center gap-2 cursor-pointer'
                            >
                                <span>Resources</span>
                                <FaAngleDown
                                    className={`transition-transform duration-300 ${resourcesOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                />
                            </div>

                            <div
                                className={`drop_courses md:absolute static -left-8 top-[50px] md:w-[200px] w-full rounded-md bg-[#2563EB] grid gap-2 font-medium text-[#F5F5F5] transition-all duration-500 ${resourcesOpen
                                    ? 'opacity-100 max-h-[300px] p-2 overflow-visible'
                                    : 'opacity-0 max-h-0 overflow-hidden p-0'
                                    }`}
                            >
                                <Link href='/resources/community' className='px-3 py-2 hover:bg-[#2E8B57] rounded-md'>
                                    Community
                                </Link>
                                <Link href='/resources/contact' className='px-3 py-2 hover:bg-[#2E8B57] rounded-md'>
                                    Contact
                                </Link>
                                <Link href='/resources' className='px-3 py-2 hover:bg-[#2E8B57] rounded-md'>
                                    Events
                                </Link>
                                <Link href='/resources/prayer' className='px-3 py-2 hover:bg-[#2E8B57] rounded-md'>
                                    Prayer
                                </Link>
                                <Link href='/resources/welfare' className='px-3 py-2 hover:bg-[#2E8B57] rounded-md'>
                                    Welfare
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Social Icons */}
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