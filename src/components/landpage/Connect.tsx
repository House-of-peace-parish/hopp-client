import { connectLink } from '@/data/landbody'
import Link from 'next/link'
import React from 'react'

function Connect() {
    return (
        <div className='w-full flex md:flex-row flex-col'>
            {
                connectLink.map((item, id) => (
                    <div data-aos={`${id === 0 ? 'flip-right' : 'flip-left'}`} style={{ backgroundColor: id === 0 ? '#5A9BD5' : '#A42A2A' }} className='md:px-24 px-6 py-16 w-full md:w-[50%] md:h-[500px] flex flex-col justify-center items-center text-[#F5F5F5]' key={item.id}>
                        <h4 className='font-semibold w-fit text-[20px]'>{item.title}</h4>
                        <h3 className='text-[40px] font-semibold text-center'>{item.header}</h3>
                        <Link className='link-btn relative flex items-center justify-center w-[200px] py-4 border-2 border-[#F5F5F5] rounded-md mt-10 hover:text-[#F5F5F5] transition-colors' href={item.link}>
                            <span>{item.text}</span>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Connect