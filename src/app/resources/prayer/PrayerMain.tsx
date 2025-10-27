'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { postContact } from '@/store/contactStore/contactApiSlice';
import { toast } from 'react-toastify';
import { ContactData } from '@/interfaces/interface';

function PrayerMain() {
    const dispatch = useDispatch<AppDispatch>();

    const [contactData, setContactData] = useState<ContactData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        reqType: 'Prayer' // 👈 important difference here
    });

    const [error, setError] = useState<Partial<ContactData>>({});

    const validateForm = () => {
        const newError: Partial<ContactData> = {};

        // First Name
        if (!contactData.firstName.trim()) {
            newError.firstName = 'First name is required';
        } else if (contactData.firstName.trim().length < 3) {
            newError.firstName = 'First name must be at least 3 characters';
        }

        // Last Name
        if (!contactData.lastName.trim()) {
            newError.lastName = 'Last name is required';
        } else if (contactData.lastName.trim().length < 3) {
            newError.lastName = 'Last name must be at least 3 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!contactData.email.trim()) {
            newError.email = 'Email is required';
        } else if (!emailRegex.test(contactData.email.trim())) {
            newError.email = 'Invalid email address';
        }

        // Phone validation
        const phonePattern = /^[0-9+\s-]+$/;
        if (!contactData.phone.trim()) {
            newError.phone = 'Contact address is required';
        } else if (!phonePattern.test(contactData.phone.trim())) {
            newError.phone = 'Invalid contact address';
        }

        // Message validation
        if (!contactData.message.trim()) {
            newError.message = 'Message is required';
        } else if (contactData.message.trim().length < 50) {
            newError.message = 'Message must be at least 50 characters long';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await dispatch(postContact(contactData));

                if (postContact.fulfilled.match(response)) {
                    const payload = response.payload;
                    toast.success(
                        payload.message ||
                        'Your prayer request has been sent. Our prayer team will intercede on your behalf.'
                    );
                    setContactData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        message: '',
                        reqType: 'Prayer'
                    });
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
                                name="firstName"
                                value={contactData.firstName}
                                onChange={handleChange}
                                type="text"
                                placeholder="First name"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.firstName && <span className="text-red-500 text-sm">{error.firstName}</span>}
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                value={contactData.lastName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Last name"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.lastName && <span className="text-red-500 text-sm">{error.lastName}</span>}
                        </div>
                    </div>

                    {/* Contact Fields */}
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                value={contactData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Email address"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="contactAddress">Your Contact Address</label>
                            <input
                                id="contactAddress"
                                name="phone"
                                value={contactData.phone}
                                onChange={handleChange}
                                type="text"
                                placeholder="+1 (xxx)-xxx-xxxx"
                                className="w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                            />
                            {error.phone && <span className="text-red-500 text-sm">{error.phone}</span>}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="form-group w-full flex flex-col gap-2">
                        <label htmlFor="message">Enter your message below</label>
                        <textarea
                            id="message"
                            name="message"
                            value={contactData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full h-[200px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2"
                        ></textarea>
                        {error.message && <span className="text-red-500 text-sm">{error.message}</span>}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex justify-center items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] w-full sm:w-[200px] sm:mx-auto h-[50px] rounded-md hover:bg-[#1E5631] transition text-[#F5F5F5]"
                >
                    Send Message
                </button>
            </form>

        </div>
    )
}

export default PrayerMain