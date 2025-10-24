import { community } from '@/data/landbody'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CommunityInit() {
  return (
    <div className='w-full md:px-24 px-6 py-16'>
        <div className='flex flex-col items-center justify-center'>
            <h3 data-aos='zoom-in-up' className='text-[40px] font-semibold text-center'>{community.header}</h3>
            <p data-aos='zoom-in-up'>{community.desc}</p>
            <Link data-aos='zoom-in-up' className='flex items-center px-4 py-3 bg-[#2E8B57] rounded-md w-fit mt-6 text-[#F5F5F5] hover:bg-[#1E5631] transition duration-150' href='' >
                <span>Learn More</span>
            </Link>
        </div>

        <div className='w-full mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            {
                community.initiatives.map((item) => (
                    <div className='w-full p-2 rounded-2xl shadow-md shadow-slate-700/20' key={item.id}>
                        <div className='w-full h-fit'>
                            <Image className='w-full h-[350px] object-cover rounded-2xl' src={item.img} alt="" />
                        </div>
                        <div className='mt-4 flex flex-col gap-2 w-full'>
                            <h4 className='font-semibold border-b-2 border-b-[#5A9BD5] w-fit text-[20px]'>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CommunityInit