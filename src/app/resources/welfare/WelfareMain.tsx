import React from 'react'

function WelfareMain() {
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <div>
                <h3 className='text-[40px] font-semibold text-center'>Do you need a ride to church ?</h3>
                <p className='text-center'>kindly feel the form below</p>
            </div>

            <form action="" className="w-full flex flex-col gap-6 mt-6">
                <div className="w-full md:w-[650px] md:mx-auto grid gap-4">

                    {/* Name Fields */}
                    <div className="w-full flex md:flex-row justify-between items-center gap-4">
                        <div className="form-group flex flex-col gap-2">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="First name"
                                className="w-full sm:w-[300px] h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                        </div>

                        <div className="form-group flex flex-col gap-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Last name"
                                className="w-full sm:w-[300px] h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                        </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="w-full flex md:flex-row justify-between items-center gap-4">
                        <div className="form-group flex flex-col gap-2">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                className="w-full sm:w-[300px] h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                        </div>

                        <div className="form-group flex flex-col gap-2">
                            <label htmlFor="rideDate">Select a Date</label>
                            <input
                                id="rideDate"
                                type="date"
                                className="w-full sm:w-[300px] h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                        </div>
                    </div>

                    {/* Pickup Address */}
                    <div className="form-group flex flex-col gap-2">
                        <label htmlFor="pickupAddress">Your Pickup Address</label>
                        <input
                            id="pickupAddress"
                            type="text"
                            placeholder="Your pickup address"
                            className="w-full h-[40px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                        />
                    </div>

                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="flex justify-center items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] w-full sm:w-[200px] sm:mx-auto h-[50px] rounded-md hover:bg-[#1E5631] transition text-[#F5F5F5]"
                >
                    Book Ride
                </button>
            </form>

        </div>
    )
}

export default WelfareMain