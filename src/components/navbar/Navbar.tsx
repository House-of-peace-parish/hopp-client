import React from 'react';
import logoMark from '../../assets/logo/Logomark.png';
import parishLogoW from '../../assets/logo/Logo Black.png';
import Image from 'next/image';
import { navbarHeader } from '@/data/navbar';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Navbar() {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <Image src={logoMark} alt="Main logo of rccg" />
                        <div></div>
                        <Image src={parishLogoW} alt="Main logo of House of peace parish" />
                    </div>
                    {
                        navbarHeader.map(({ id, icon: Icon, title, text, link }) => (
                            <div key={id}>
                                <Icon size={24} />
                                <div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <div>
                    <Link href=''>Home</Link>
                    <Link href=''>Live</Link>
                    <Link href=''>Donate</Link>
                    <Link href=''>Grow</Link>
                    <Link href=''>New Here?</Link>
                    <Link href=''>Resources</Link>
                </div>
                <div>
                    <Link href=''>
                        <FaInstagram size={24} />
                    </Link>
                    <Link href=''>
                        <FaFacebook size={24} />
                    </Link>
                    <Link href=''>
                        <FaYoutube size={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar