import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutUs() {
    return (
        <div>
            <div>
                <Image src='' alt='' />
            </div>
            <div>
                <h4>Pastor David and Lola Adeosun</h4>
                <h3>Raising Kingdom Stars ...</h3>
                <p>
                    House of Peace Parish (HOPP) in Regina is a thriving community dedicated to raising Kingdom Stars through the practical teaching and application of God’s Word. We believe the scripture reveals your true potential, helping you understand your identity and divine purpose. As Ephesians 1:11 (MSG) reminds us: 'It’s in Christ that we find out who we are (IDENTITY) and what we are living for (PURPOSE).' At HOPP, discovering your true identity and purpose empowers you to live victoriously and walk fully in your God-given destiny.
                </p>

                <Link href=''>
                    <span>About us</span>
                </Link>
            </div>
        </div>
    )
}

export default AboutUs