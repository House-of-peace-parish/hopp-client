import { youth } from '@/data/growBody'
import Image from 'next/image'
import React from 'react'

function Youth() {
  return (
    <div className='w-full md:px-24 px-6 py-16 gap-10 flex md:flex-row flex-col items-center'>
      <div className='md:w-[50%] w-full flex flex-col'>
        <h3 data-aos="fade-up-left" className='text-[40px] font-semibold'>{youth.header}</h3>
        <h4 data-aos="fade-up-left" className='text-[#A42A2A] text-[20px] mb-4'>{youth.title}</h4>
        <p data-aos="fade-up-left">{youth.para}</p>
        <p data-aos="fade-up-left">{youth.para2}</p>
        <p data-aos="fade-up-left">{youth.para3}</p>
        <p data-aos="fade-up-left">{youth.para4}</p>
      </div>
      <div data-aos='fade-down-right' className='md:w-[50%] w-full'>
        <Image style={{ boxShadow: '15px 15px 8px #5A9BD5' }} className='w-full md:w-[800px] h-[400px] md:h-[550px] object-cover rounded-2xl' src={youth.image} alt='' />
      </div>
    </div>
  )
}

export default Youth