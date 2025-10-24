import Generous from '@/components/donatePage/Generous'
import Giving from '@/components/landpage/Giving'
import React from 'react'

function DonateBody() {
  return (
    <div className='overflow-hidden'>
      <Giving />
      <Generous />
    </div>
  )
}

export default DonateBody