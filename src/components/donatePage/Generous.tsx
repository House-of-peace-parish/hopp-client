import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import pastors from '../../assets/landPage/pastors.jpg'

function Generous() {
    return (
        <div className='w-full md:px-24 px-6 py-16 gap-10 flex md:flex-row flex-col items-center'>
            <div className='md:w-[50%] w-full flex flex-col'>
                <h4 className='text-[#A42A2A] text-[20px]'>Support House of Peace Parish</h4>
                <h3 className='text-[40px] font-semibold'>Thank you for your act of generousity</h3>
                <p>
                    Giving is a lifestyle! By embracing a giving spirit, we sow seeds that yield a bountiful harvest in various aspects of our lives. God ensures doors open, meaningful connections form and favorable opportunities arise when we cultivate this spirit of giving.
                </p>

                <Link className='flex items-center px-4 py-3 bg-[#2E8B57] rounded-md w-fit mt-6 text-[#F5F5F5] hover:bg-[#1E5631] transition duration-150' href=''>
                    <span>Give Now</span>
                </Link>
            </div>
            <div className='md:w-[50%] w-full'>
                <Image style={{ boxShadow: '15px 15px 8px #5A9BD5' }} className='w-full md:w-[800px] h-[400px] md:h-[550px] object-cover rounded-2xl' src={pastors} alt='' />
            </div>
        </div>
    )
}

export default Generous