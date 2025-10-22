import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Generous() {
    return (
        <div>
            <div>
                <h4>Support House of Peace Parish</h4>
                <h3>Thank you for your act of generousity</h3>
                <p>
                    Giving is a lifestyle! By embracing a giving spirit, we sow seeds that yield a bountiful harvest in various aspects of our lives. God ensures doors open, meaningful connections form and favorable opportunities arise when we cultivate this spirit of giving.
                </p>

                <Link href=''>
                    <span>Give Now</span>
                </Link>
            </div>
            <div>
                <Image src='' alt='' />
            </div>
        </div>
    )
}

export default Generous