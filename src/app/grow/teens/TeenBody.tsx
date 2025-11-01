import MeetPastor from '@/components/growPage/MeetPastor'
import Teen from '@/components/growPage/Teen'
import { meetPastor } from '@/data/growBody'
import React from 'react'

function TeenBody() {
  return (
    <div className='overflow-hidden'>
      <Teen />
      <MeetPastor meetData={meetPastor} />
    </div>
  )
}

export default TeenBody