import { WelfareData } from '@/interfaces/interface';
import { AppDispatch } from '@/store/store'
import { postWelfare } from '@/store/welfareStore/welfareApiSlice';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function WelfareMain() {
    const dispatch = useDispatch<AppDispatch>();

    const [welfareData, setWelfareData] = useState<WelfareData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        pickUp: ''
    })

    const [error, setError] = useState<Partial<WelfareData>>({});

    const validateForm = () => {
        const newError: Partial<WelfareData> = {};

        // First Name
        if (!welfareData.firstName.trim()) {
            newError.firstName = 'First name is required';
        } else if (welfareData.firstName.trim().length < 3) {
            newError.firstName = 'First name must be at least 3 characters';
        } else if (welfareData.firstName.trim().length > 20) {
            newError.firstName = 'First name cannot exceed 20 characters';
        }

        // Last Name
        if (!welfareData.lastName.trim()) {
            newError.lastName = 'Last name is required';
        } else if (welfareData.lastName.trim().length < 3) {
            newError.lastName = 'Last name must be at least 3 characters';
        } else if (welfareData.lastName.trim().length > 20) {
            newError.lastName = 'Last name cannot exceed 20 characters';
        }

        // Email
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!welfareData.email.trim()) {
            newError.email = 'Email is required';
        } else if (!emailRegEx.test(welfareData.email.trim())) {
            newError.email = 'Invalid email address';
        }

        // Phone
        const phoneRegEx = /^[0-9]+$/;
        if (!welfareData.phone.trim()) {
            newError.phone = 'Phone number is required';
        } else if (!phoneRegEx.test(welfareData.phone.trim())) {
            newError.phone = 'Invalid phone number';
        } else if (welfareData.phone.trim().length < 10) {
            newError.phone = 'Phone number must be at least 10 digits';
        }

        // Date
        if (!welfareData.date) {
            newError.date = 'Date is required';
        }

        // Pick-up
        if (!welfareData.pickUp.trim()) {
            newError.pickUp = 'Pick-up location is required';
        } else if (welfareData.pickUp.trim().length < 3) {
            newError.pickUp = 'Pick-up location must be at least 3 characters';
        }

        // Update state and return validation result
        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setWelfareData({
            ...welfareData,
            [name]: value
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await dispatch(postWelfare(welfareData));

                if (postWelfare.fulfilled.match(response)) {
                    const payload = response.payload;
                    toast.success(
                        payload.message ||
                        'Your ride request has been sent. Our welfare team will reach out to you soon.'
                    );
                    setWelfareData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        date: '',
                        pickUp: ''
                    })
                } else {
                    toast.error(response.error.message);
                }
            } catch (error) {
                console.error(error);
                toast.error('Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <div>
                <h3 className='text-[40px] font-semibold text-center'>Do you need a ride to church ?</h3>
                <p className='text-center'>kindly feel the form below</p>
            </div>

            <form action="" className="w-full flex flex-col gap-6 mt-6">
                <div className="w-full md:w-[650px] md:mx-auto grid gap-4">

                    {/* Name Fields */}
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                value={welfareData.firstName}
                                onChange={handleChange}
                                type="text"
                                placeholder="First name"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.firstName && <p className="text-red-600">{error.firstName}</p>}
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                name="firstName"
                                value={welfareData.firstName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Last name"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.lastName && <p className="text-red-600">{error.lastName}</p>}
                        </div>
                    </div>

                    {/* Contact Fields */}
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={welfareData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.email && <p className="text-red-600">{error.email}</p>}
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="rideDate">Your contact address</label>
                            <input
                                id="email"
                                type="phone"
                                name="phone"
                                value={welfareData.phone}
                                onChange={handleChange}
                                placeholder="+1 (351) - XXX - XXXX"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.phone && <p className="text-red-600">{error.phone}</p>}
                        </div>
                    </div>

                    {/* Pickup Address */}
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="rideDate">Select a Date</label>
                            <input
                                id="rideDate"
                                type="date"
                                name="date"
                                value={welfareData.date}
                                onChange={handleChange}

                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.date && <p className="text-red-600">{error.date}</p>}
                        </div>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="pickupAddress">Your Pickup Address</label>
                            <input
                                id="pickupAddress"
                                type="text"
                                name="pickUp"
                                value={welfareData.pickUp}
                                onChange={handleChange}
                                placeholder="Your pickup address"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.pickUp && <p className="text-red-600">{error.pickUp}</p>}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex justify-center items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] w-full sm:w-[200px] sm:mx-auto h-[50px] rounded-md hover:bg-[#1E5631] transition text-[#F5F5F5]"
                >
                    Book Ride
                </button>
            </form>

        </div>
    )
}

export default WelfareMain