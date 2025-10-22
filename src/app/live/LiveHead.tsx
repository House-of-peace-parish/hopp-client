import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { FaPlay } from 'react-icons/fa';

function LiveHead() {
    return (
        <header>
            <div>
                <Image src='' alt='Parish Logo' />
            </div>
            <div>
                <Link href=''>
                    <div>
                        <FaPlay size={20} />
                        <span>LIVE</span>
                    </div>
                </Link>
                <h3>Join our services online from any part of the world</h3>
            </div>
        </header>
    )
}

export default LiveHead