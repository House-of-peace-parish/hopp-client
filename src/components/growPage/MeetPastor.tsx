import { meetPastor } from '@/data/growBody'
import Image from 'next/image'
import React from 'react'

function MeetPastor() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <h3 className='text-[40px] font-semibold text-center'>{meetPastor.header}</h3>
            <p className='text-center'>{meetPastor.title}</p>

            <div className='flex md:flex-row flex-col gap-6 mt-10 justify-center '>
                {
                    meetPastor.pastors.map((item) => (
                        <div className='w-full sm:w-[350px] h-fit relative rounded-2xl overflow-hidden' key={item.id}>
                            <div className='w-full h-[450px] md:h-[500px]'>
                                <Image className='w-full h-full' src={item.image} alt='' />
                            </div>
                            <div className='absolute top-0 left-0 w-full h-full bg-black/30 text-[#F5F5F5] flex flex-col'>
                                <div className='mt-auto h-fit w-full p-2'>
                                    <div className='border-b-2 border-b-[#5A9BD5] w-full'>
                                        <h4 className='font-semibold w-fit text-[20px]'>{item.name}</h4>
                                        <h5 className='text-[#5A9BD5]'>{item.role}</h5>
                                    </div>
                                    <p className='text-[14px]'>{item.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MeetPastor