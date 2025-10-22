import { meetPastor } from '@/data/growBody'
import Image from 'next/image'
import React from 'react'

function MeetPastor() {
  return (
    <div>
        <h3>{meetPastor.header}</h3>
        <p>{meetPastor.title}</p>

        <div>
            {
                meetPastor.pastors.map((item) => (
                    <div key={item.id}>
                        <div>
                            <Image src={item.image} alt='' />
                        </div>
                        <div>
                            <h4>{item.name}</h4>
                            <h5>{item.role}</h5>
                            <p>{item.bio}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MeetPastor