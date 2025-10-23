import React from 'react'

function ContactBody() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <div>
                <h3 className='text-[40px] font-semibold text-center'>Send us a message</h3>
                <p className='text-center'>Can’t find what you’re looking for? Need help? Feel free to send us a message.</p>
            </div>

            <form action="" className='w-full flex flex-col gap-6 mt-6'>
                <div className='w-full md:w-[650px] md:mx-auto grid gap-4'>
                    <div className='w-full flex md:flex-row justify-between items-center gap-4'>
                        <div className="form-group flex flex-col gap-2">
                            <label htmlFor="firstName">First Name</label>
                            <input className='w-full sm:w-[300px] h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2' id="firstName" type="text" placeholder="First name" />
                        </div>

                        <div className="form-group flex flex-col gap-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input className='w-full sm:w-[300px] h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2' id="lastName" type="text" placeholder="Last name" />
                        </div>
                    </div>
                    <div className='w-full flex md:flex-row justify-between items-center gap-4'>
                        <div className="form-group flex flex-col gap-2">
                            <label htmlFor="email">Email Address</label>
                            <input className='w-full sm:w-[300px] h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2' id="email" type="email" placeholder="Email address" />
                        </div>

                        <div className="form-group flex flex-col gap-2">
                            <label htmlFor="requestTitle">Your contact address</label>
                            <input className='w-full sm:w-[300px] h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2' id="requestTitle" type="text" placeholder="+1 (xxx)-xxx-xxxx" />
                        </div>
                    </div>
                    <div className="form-group flex flex-col gap-2">
                        <label htmlFor="">Enter your message below</label>
                        <textarea name="" id="" className='w-full h-[200px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2' placeholder='Your Message'></textarea>
                    </div>
                </div>
                    <button className='flex justify-center items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] w-full sm:w-[200px] h-[50px] sm:mx-auto rounded-md hover:bg-[#1E5631] transition text-[#F5F5F5]'>Send Message</button>
            </form>
        </div>
    )
}

export default ContactBody