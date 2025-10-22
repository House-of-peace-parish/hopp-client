import { broadCastSchedule } from '@/data/liveBody'
import Image from 'next/image'
import React from 'react'

function BroadcastSchedule() {
    return (
        <div>
            <div>
                <Image src={broadCastSchedule.image} alt='' />
            </div>
            <div>
                <h4>{broadCastSchedule.title}</h4>
                <h3>Raising Kingdom Stars ...</h3>

                <div>
                    {
                        broadCastSchedule.schedule.map(({ id, day, time, icon: Icon }) => (
                            <div key={id}>
                                <div>
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <span>{day}</span>
                                    <span>{time}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BroadcastSchedule