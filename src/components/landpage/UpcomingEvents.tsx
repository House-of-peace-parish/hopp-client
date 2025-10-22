import { upcomingEvents } from '@/data/landbody'
import Image from 'next/image'
import React from 'react'

function UpcomingEvents() {
  return (
    <div>
        <h3>Upcoming Events</h3>
        <p>Stay up to date with our programs and events</p>

        <div>
            {
                upcomingEvents.map((item) => (
                    <div>
                        <div>
                            <Image src={item.image} alt="" />
                        </div>
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.date} | {item.time}</p>
                            <p>{item.location}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default UpcomingEvents