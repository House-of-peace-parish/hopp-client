import React from 'react'

function PrayerMain() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <div>
                <h3 className='text-[40px] font-semibold text-center'>Send us a Request</h3>
                <p className='text-center'>Please complete the prayer request form and your prayer request will be delivered to our prayer team. We are here to share your burden and intercede on your behalf.</p>
            </div>

            <form action="" className="w-full flex flex-col gap-6 mt-6">
                <div className="w-full md:w-[650px] md:mx-auto grid gap-4">
                    {/* Name Fields */}
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="First name"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Last name"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                        </div>
                    </div>

                    {/* Contact Fields */}
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="contactAddress">Your Contact Address</label>
                            <input
                                id="contactAddress"
                                type="text"
                                placeholder="+1 (xxx)-xxx-xxxx"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="form-group w-full flex flex-col gap-2">
                        <label htmlFor="message">Enter your message below</label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            className="w-full h-[200px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="flex justify-center items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] w-full sm:w-[200px] sm:mx-auto h-[50px] rounded-md hover:bg-[#1E5631] transition text-[#F5F5F5]"
                >
                    Send Message
                </button>
            </form>

        </div>
    )
}

export default PrayerMain