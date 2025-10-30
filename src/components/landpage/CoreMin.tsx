import { coreMinistries } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'

function CoreMin() {
  return (
    <div className='w-full md:px-24 px-6 py-16'>
        <h3 data-aos='zoom-in-up' className='text-[40px] font-semibold text-center'>Core Ministries</h3>

        <div className='w-full mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            {
                coreMinistries.map((item, id) => (
                    <div data-aos={`${id % 2 === 0 ? 'fade-right' : 'fade-left'}`} key={item.id} className='flex sm:flex-row flex-col sm:items-center gap-2 shadow-md shadow-slate-700/20 rounded-2xl p-2'>
                        <div className='w-full sm:w-[200px] h-[300px] sm:h-[180px]'>
                            <Image className='w-full h-full object-cover rounded-2xl' src={item.image} alt="" />
                        </div>
                        <div>
                            <h4 className='text-[#A42A2A] text-[20px]'>{item.title}</h4>
                            <p className='text-[25px] font-semibold'>{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CoreMin