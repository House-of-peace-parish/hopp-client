import { fundChurch } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'

function Giving() {
    return (
        <div>
            <h3>Fund Raising</h3>
            <p></p>

            <div>
                {
                    fundChurch.map((item) => (
                        <div key={item.id}>
                            <div>
                                <Image src={item.image} alt="" />
                            </div>
                            <div>
                                <h4>{item.title}</h4>
                                <span>{item.days}</span>
                                <div>
                                    <span>Amount raised: {item.amountRaised}</span>
                                    <span>Goal: {item.goalAmount}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Giving