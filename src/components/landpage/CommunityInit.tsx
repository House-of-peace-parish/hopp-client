import { community } from '@/data/landbody'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CommunityInit() {
  return (
    <div>
        <div>
            <h3>{community.header}</h3>
            <p>{community.desc}</p>
            <Link href='' >
                <span>Learn More</span>
            </Link>
        </div>

        <div>
            {
                community.initiatives.map((item) => (
                    <div key={item.id}>
                        <div>
                            <Image src={item.img} alt="" />
                        </div>
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CommunityInit