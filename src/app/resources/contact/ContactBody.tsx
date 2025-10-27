'use client';
import { ContactData } from '@/interfaces/interface';
import { postContact } from '@/store/contactStore/contactApiSlice';
import { AppDispatch } from '@/store/store'
import React, { ChangeEvent, FormEvent, TextareaHTMLAttributes, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'

function ContactBody() {
    // Setting dispatch
    const dispatch = useDispatch<AppDispatch>();

    // Getting formdata, validating and posting rewquest
    const [contactData, setContactData] = useState<ContactData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        reqType: 'Contact'
    })

    const [error, setError] = useState<Partial<ContactData>>({});
    const validateForm = () => {
        const newError: Partial<ContactData> = {};

        // First name
        if (!contactData.firstName.trim()) {
            newError.firstName = 'First name is required'
        }
        else if (contactData.firstName.trim().length < 3) {
            newError.firstName = 'First name cannot be less than 3 characters';
        }
        else if (contactData.firstName.trim().length > 15) {
            newError.firstName = `First name cannot be greater than 15 characters`;
        };

        // last name
        if (!contactData.lastName.trim()) {
            newError.lastName = 'Last name is required'
        }
        else if (contactData.lastName.trim().length < 3) {
            newError.lastName = 'Last name cannot be less than 3 characters';
        }
        else if (contactData.lastName.trim().length > 15) {
            newError.lastName = `Last name cannot be greater than 15 characters`;
        };

        // Email
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!contactData.email.trim()) {
            newError.email = 'Email account is required';
        }
        else if (!emailRegEx.test(contactData.email.trim())) {
            newError.email = 'Invalid email address';
        };

        // Contact
        const contactPattern = /^[0-9]+$/
        if (!contactPattern.test(contactData.phone.trim())) {
            newError.phone = 'Invalid contact address'
        }

        // last name
        if (!contactData.message.trim()) {
            newError.message = 'Message is required'
        }
        else if (contactData.message.trim().length < 100) {
            newError.message = 'Message must be above 100 characters';
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactData({
            ...contactData,
            [name]: value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await dispatch(postContact(contactData));
                if (postContact.fulfilled.match(response)) {
                    const payload = response.payload;
                    toast.success(payload.message || 'Thank you for contacting House of Peace Parish. A confirmation email has been sent to your inbox.')
                } else {
                    toast.error(response.error.message)
                }
                setContactData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                    reqType: 'Contact'
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className='w-full md:px-24 px-6 py-16'>
            <div>
                <h3 className='text-[40px] font-semibold text-center'>Send us a message</h3>
                <p className='text-center'>Can’t find what you’re looking for? Need help? Feel free to send us a message.</p>
            </div>

            <form action="" className='w-full flex flex-col gap-6 mt-6'>
                <div className='w-full md:w-[650px] md:mx-auto grid gap-4'>
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className='w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2'
                                id="firstName"
                                name='firstName'
                                value={contactData.firstName}
                                onChange={handleChange}
                                type="text"
                                placeholder="First name"
                            />
                            {error.firstName && <span className="text-red-500 text-sm">{error.firstName}</span>}
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className='w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2'
                                id="lastName"
                                name='lastName'
                                value={contactData.lastName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Last name"
                            />
                            {error.lastName && <span className="text-red-500 text-sm">{error.lastName}</span>}
                        </div>
                    </div>
                    <div className='w-full flex sm:flex-row flex-col justify-between items-center gap-4'>
                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="email">Email Address</label>
                            <input
                                className='w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2'
                                id="email"
                                name='email'
                                value={contactData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="Email address"
                            />
                            {error.email && <span className="text-red-500 text-sm">{error.email}</span>}
                        </div>

                        <div className="form-group w-full sm:w-fit flex flex-col gap-2">
                            <label htmlFor="requestTitle">Your contact address</label>
                            <input
                                className='w-full sm:w-[300px] h-10 border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2'
                                id="requestTitle"
                                name='phone'
                                value={contactData.phone}
                                onChange={handleChange}
                                type="text"
                                placeholder="+1 (xxx)-xxx-xxxx"
                            />
                            {error.phone && <span className="text-red-500 text-sm">{error.phone}</span>}
                        </div>
                    </div>
                    <div className="form-group w-full flex flex-col gap-2">
                        <label htmlFor="">Enter your message below</label>
                        <textarea
                            name="message"
                            value={contactData.message}
                            onChange={handleChange}
                            id=""
                            className='w-full h-[200px] border-2 border-[#5A9BD5] text-[#111827] rounded-md p-2' placeholder='Your Message'
                        ></textarea>
                        {error.message && <span className="text-red-500 text-sm">{error.message}</span>}
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    className='flex justify-center items-center gap-2 mt-8 cursor-pointer bg-[#2E8B57] w-full sm:w-[200px] h-[50px] sm:mx-auto rounded-md hover:bg-[#1E5631] transition text-[#F5F5F5]'
                >Send Message</button>
            </form>
        </div>
    )
}

export default ContactBody
