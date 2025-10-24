import CommunityInit from '@/components/landpage/CommunityInit'
import Giving from '@/components/landpage/Giving'
import React from 'react'

function CommunityBody() {
  return (
    <div className='overflow-hidden'>
      <CommunityInit />
      <Giving />
    </div>
  )
}

export default CommunityBody