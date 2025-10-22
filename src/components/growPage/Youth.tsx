import { youth } from '@/data/growBody'
import Image from 'next/image'
import React from 'react'

function Youth() {
  return (
    <div>
        <div>
            <h3>{youth.header}</h3>
            <h4>{youth.title}</h4>
            <p>{youth.para}</p>
            <p>{youth.para2}</p>
            <p>{youth.para3}</p>
            <p>{youth.para4}</p>
        </div>
        <div>
            <Image src={youth.image} alt='' />
        </div>
    </div>
  )
}

export default Youth