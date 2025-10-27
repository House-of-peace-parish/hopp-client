'use client';
import { footerLinks } from '@/data/footer'
import { SubscriberData } from '@/interfaces/interface';
import { AppDispatch } from '@/store/store'
import { postSubscriber } from '@/store/subscriberStore/subscriberApiSlice';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function Footer() {
    const dispatch = useDispatch<AppDispatch>();

    const [subscriberData, setSubscriberData] = useState<SubscriberData>({
        fullName: '',
        email: ''
    })

    const [error, setError] = useState<Partial<SubscriberData>>({});

    const validateForm = () => {
        const newError: Partial<SubscriberData> = {};

        if (!subscriberData.fullName.trim()) {
            newError.fullName = 'Your full name is required';
        } else if (subscriberData.fullName.trim().length < 3) {
            newError.fullName = 'Name be at least 3 characters';
        } else if (subscriberData.fullName.trim().length > 50) {
            newError.fullName = 'Full name cannot exceed 20 characters';
        }

        // Email
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!subscriberData.email.trim()) {
            newError.email = 'Email is required';
        } else if (!emailRegEx.test(subscriberData.email.trim())) {
            newError.email = 'Invalid email address';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSubscriberData({
            ...subscriberData,
            [name]: value
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await dispatch(postSubscriber(subscriberData));

                if (postSubscriber.fulfilled.match(response)) {
                    const payload = response.payload;
                    toast.success(payload.message || 'Thanks for subscribing');
                    setSubscriberData({
                        fullName: '',
                        email: ''
                    })
                } else {
                    toast.error(response.error.message);
                }
            } catch (error) {
                console.error(error);
                toast.error('Something went wrong. Please try again.');
            }
        }
    }
    return (
        <div className='w-full'>
            <div className='footer-bg relative w-full md:px-24 px-6 py-16'>
                <div className='flex flex-col text-center items-center w-full'>
                    <h3 className='text-[40px] font-semibold text-[#F5F5F5]'>Subscribe To Our Newsletter</h3>
                    <form action="" className='flex flex-col gap-4 w-full mt-6'>
                        <div className='flex md:flex-row flex-col md:items-center justify-center gap-6'>
                            <div className="flex flex-col gap-1">
                                <input
                                    name="fullName"
                                    value={subscriberData.fullName}
                                    onChange={handleChange}
                                    className="w-full sm:w-[300px] h-10 bg-[#F5F5F5] text-[#111827] rounded-md p-2"
                                    type="text"
                                    placeholder="Enter your full name"
                                />
                                {error.fullName && (
                                    <p className="text-red-400 text-sm">{error.fullName}</p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <input
                                    name="email"
                                    value={subscriberData.email}
                                    onChange={handleChange}
                                    className="w-full sm:w-[300px] h-10 bg-[#F5F5F5] text-[#111827] rounded-md p-2"
                                    type="email"
                                    placeholder="Enter your email address"
                                />
                                {error.email && (
                                    <p className="text-red-400 text-sm">{error.email}</p>
                                )}
                            </div>

                        </div>
                        <button type='submit' onClick={handleSubmit} className='px-4 py-3 bg-[#2E8B57] rounded-md w-fit mx-auto mt-6 text-[#F5F5F5] hover:bg-[#1E5631] transition duration-150 flex sm:self-center'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='w-full md:px-24 px-6 py-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-6 bg-[#111827]'>
                {
                    footerLinks.map(({ id, title, list, icon: Icon, link }) => (
                        <div className='flex flex-col gap-6 text-[#F5F5F5]' key={id}>
                            <div className='flex items-center gap-2'>
                                <Icon className='text-[#A42A2A]' size={40} />
                                <h3 className='font-semibold'>{title}</h3>
                            </div>
                            <div className='flex flex-col gap-2'>
                                {
                                    list.map(({ id, header, text }) => (
                                        <div className='flex items-center gap-2 text-[14px]' key={id}>
                                            <h4 className='font-semibold'>{header}: </h4>
                                            <p>{text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full'>
                <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5079.742883145522!2d-104.61863489999999!3d50.462118600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e596a0128e9%3A0x3dc7265818117213!2s1042%20Albert%20St%2C%20Regina%2C%20SK%20S4R%202P8!5e0!3m2!1sen!2sca!4v1761075967731!5m2!1sen!2sca" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='p-6 flex justify-center bg-[#3B82F6] text-[#F5F5F5]'>
                <p>&copy; All right reserved 2025 House Of Peace Parish</p>
            </div>
        </div>
    )
}

export default Footer