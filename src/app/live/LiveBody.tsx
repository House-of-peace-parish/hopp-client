import Giving from '@/components/landpage/Giving'
import BroadcastSchedule from '@/components/livePage/BroadcastSchedule'
import StreamingPlatform from '@/components/livePage/StreamingPlatform'
import React from 'react'

function LiveBody() {
  return (
    <div>
        <StreamingPlatform />
        <BroadcastSchedule />
        <Giving />
    </div>
  )
}

export default LiveBody