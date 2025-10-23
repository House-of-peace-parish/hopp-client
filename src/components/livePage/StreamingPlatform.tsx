import { streamingPlatforms } from '@/data/liveBody'
import React from 'react'
import Link from 'next/link'

function StreamingPlatform() {
    return (
        <div className='live-container relative  w-full md:px-24 px-6 py-16 md:py-30 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-cover bg-center bg-no-repeat'>
            {
                streamingPlatforms.streams.map(({ id, name, text, url, icon: Icon }) => (
                    <div className='flex flex-col items-center text-[#F5F5F5]' key={id}>
                        <Icon className='text-[#2E8B57]' size={60} />
                        <h4 className='font-semibold text-[20px] mt-4'>{name}</h4>
                        <Link className='flex items-center justify-center w-[200px] py-4 border-2 rounded-md mt-10 ' href={url}>
                            <span className='text-[#2E8B57]'>{text}</span>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default StreamingPlatform