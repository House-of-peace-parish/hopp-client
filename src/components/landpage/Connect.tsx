import { connectLink } from '@/data/landbody'
import Link from 'next/link'
import React from 'react'

function Connect() {
  return (
    <div>
        {
            connectLink.map((item) => (
                <div key={item.id}>
                    <div>
                        <h4>{item.title}</h4>
                        <h3>{item.header}</h3>
                        <Link href={item.link}>
                            <span>{item.text}</span>
                        </Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Connect