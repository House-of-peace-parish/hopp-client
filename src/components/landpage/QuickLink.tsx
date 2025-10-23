import { quickLinks } from '@/data/landbody'
import React from 'react'
import band from '../../assets/landPage/band.jpg';
import Link from 'next/link';

function QuickLink() {
    return (
        <div className='quicklink-container relative  w-full md:px-24 px-6 py-16 md:py-30 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 bg-cover bg-center bg-no-repeat'>
            {
                quickLinks.map(({ id, title, link, text, icon: Icon }) => (
                    <div key={id} className='flex flex-col items-center text-[#F5F5F5]'>
                        <Icon className='text-[#2E8B57]' size={60} />
                        <h4 className='font-semibold text-[20px] mt-4'>{title}</h4>
                        <Link className='flex items-center justify-center w-[200px] py-4 border-2 rounded-md mt-10 ' href={link}>
                            <span className='text-[#2E8B57]'>{text}</span>
                        </Link>
                    </div>
                ))
            }
        </div >
    )
}

export default QuickLink;