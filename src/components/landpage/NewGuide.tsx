import { newGuide } from '@/data/landbody'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewGuide() {
    return (
        <div>
            <div>
                <h4>{newGuide.title}</h4>
                <h3>{newGuide.header}</h3>
                <p>{newGuide.desc}</p>

                <Link href={newGuide.link}>
                    <span>{newGuide.text}</span>
                </Link>
            </div>
            <div>
                <Image src={newGuide.img} alt='' />
            </div>
        </div>
    )
}

export default NewGuide