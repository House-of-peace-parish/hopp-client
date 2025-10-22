import { coreMinistries } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'

function CoreMin() {
  return (
    <div>
        <h3>Core Ministries</h3>

        <div>
            {
                coreMinistries.map((item) => (
                    <div>
                        <div>
                            <Image src={item.image} alt="" />
                        </div>
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CoreMin