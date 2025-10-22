import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function LandHead() {
    return (
        <header>
            <div>
                <h3>Welcome to RCCG</h3>
                <h1>HOUSE OF PEACE PARISH</h1>
                <p>
                    We are a vibrant parish under The Redeemed Christian Church of God, dedicated to raising Kingdom Stars for global influence through the teaching and application of God’s Word.
                </p>
                <Link href=''>
                    <div>
                        <p>Join us online</p>
                        <FaArrowRight size={24} />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default LandHead