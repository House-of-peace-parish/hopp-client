'use client';
import { VolunteerData } from '@/interfaces/interface';
import { AppDispatch } from '@/store/store'
import { postVolunteer } from '@/store/volunteerStore/volunteerApiSlice';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function VolunteerBody() {
    const dispatch = useDispatch<AppDispatch>();

    const [volunteerData, setVolunteerData] = useState<VolunteerData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        volunteer: ''
    })

    const [error, setError] = useState<Partial<VolunteerData>>({});

    const validateForm = () => {
        const newError: Partial<VolunteerData> = {};

        // First Name
        if (!volunteerData.firstName.trim()) {
            newError.firstName = 'First name is required';
        } else if (volunteerData.firstName.trim().length < 3) {
            newError.firstName = 'First name must be at least 3 characters';
        } else if (volunteerData.firstName.trim().length > 20) {
            newError.firstName = 'First name cannot exceed 20 characters';
        }

        // Last Name
        if (!volunteerData.lastName.trim()) {
            newError.lastName = 'Last name is required';
        } else if (volunteerData.lastName.trim().length < 3) {
            newError.lastName = 'Last name must be at least 3 characters';
        } else if (volunteerData.lastName.trim().length > 20) {
            newError.lastName = 'Last name cannot exceed 20 characters';
        }

        // Email
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!volunteerData.email.trim()) {
            newError.email = 'Email is required';
        } else if (!emailRegEx.test(volunteerData.email.trim())) {
            newError.email = 'Invalid email address';
        }

        // Phone
        const phoneRegEx = /^[0-9]+$/;
        if (!volunteerData.phone.trim()) {
            newError.phone = 'Phone number is required';
        } else if (!phoneRegEx.test(volunteerData.phone.trim())) {
            newError.phone = 'Invalid phone number';
        } else if (volunteerData.phone.trim().length < 10) {
            newError.phone = 'Phone number must be at least 10 digits';
        }

        // Volunteer
        if (!volunteerData.volunteer) {
            newError.volunteer = 'Volunteer is required';
        }

        // Update state and return validation result
        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setVolunteerData({
            ...volunteerData,
            [name]: value
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await dispatch(postVolunteer(volunteerData));

                if (postVolunteer.fulfilled.match(response)) {
                    const payload = response.payload;
                    toast.success(
                        payload.message ||
                        'Your volunteer request has been sent. Our welfare team will reach out to you soon.'
                    );
                    setVolunteerData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        volunteer: ''
                    })
                } else {
                    toast.error(response.error.message);
                    console.log(error)
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
                <h3 className='text-[40px] font-semibold text-center'>Serve with Us</h3>
                <p className='text-center'>Use the form below to sign up as a volunteer and be part of what God is doing in our community.</p>
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
                                value={volunteerData.firstName}
                                onChange={handleChange}
                                type="text"
                                placeholder="First name"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2 outline-0"
                            />
                            {error.firstName && <p className="text-red-600">{error.firstName}</p>}
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                value={volunteerData.lastName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Last name"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2 outline-0"
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
                                value={volunteerData.email}
                                onChange={handleChange}
                                placeholder="Email address"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2 outline-0"
                            />
                            {error.email && <p className="text-red-600">{error.email}</p>}
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="rideDate">Your contact address</label>
                            <input
                                id="email"
                                type="phone"
                                name="phone"
                                value={volunteerData.phone}
                                onChange={handleChange}
                                placeholder="+1 (351) - XXX - XXXX"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2 outline-0"
                            />
                            {error.phone && <p className="text-red-600">{error.phone}</p>}
                        </div>
                    </div>

                    {/* Volunteer */}
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="rideDate">What would you like to volunteer for?</label>
                            <select name='volunteer' onChange={handleChange} value={volunteerData.volunteer} className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2 outline-0">
                                <option value="choir">Choir team</option>
                                <option value="media-team">Media team</option>
                                <option value="ushering-team">Ushering team</option>
                                <option value="technical-team">Technical team</option>
                                <option value="sanctuary-team">Sanctuary team</option>
                                <option value="welfare-team">Welfare team</option>
                            </select>
                            {error.volunteer && <p className="text-red-600">{error.volunteer}</p>}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex justify-center items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] w-full sm:w-[200px] sm:mx-auto h-[50px] rounded-md hover:bg-[#1E5631] transition text-[#F5F5F5]"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default VolunteerBody