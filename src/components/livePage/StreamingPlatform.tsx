import { streamingPlatforms } from '@/data/liveBody'
import Image from 'next/image'
import React from 'react'

function StreamingPlatform() {
    return (
        <div>
            <div>
                <Image src='' alt='' />
            </div>
            <div>
                <h3>{streamingPlatforms.title}</h3>
                <h4>{streamingPlatforms.header}</h4>

                <div>
                    {
                        streamingPlatforms.streams.map(({ id, name, text, url, icon: Icon }) => (
                            <div key={id}>
                                <Icon size={24} />
                                <h4>{name}</h4>
                                <p>{text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StreamingPlatform