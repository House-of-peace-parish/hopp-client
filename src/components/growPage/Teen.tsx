import { teen } from '@/data/growBody'
import Image from 'next/image'
import React from 'react'

function Teen() {
    return (
        <div>
            <div>
                <Image src={teen.image} alt='' />
            </div>
            <div>
                <h3>{teen.title}</h3>
                <div>
                    <h4>{teen.header1}</h4>
                    <p>{teen.para1}</p>
                </div>
                <div>
                    <h4>{teen.header2}</h4>
                    <div>
                        {
                            teen.para2.map((item) => (
                                <div key={item.id}>
                                    <p>{item.goal}</p>
                                    <p>{item.scripture}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teen