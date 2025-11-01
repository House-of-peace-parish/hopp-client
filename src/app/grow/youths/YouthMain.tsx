import MeetPastor from '@/components/growPage/MeetPastor'
import Youth from '@/components/growPage/Youth'
import { meetPastor2 } from '@/data/growBody'
import React from 'react'

function YouthMain() {
  return (
    <div className='overflow-hidden'>
      <Youth />
      <MeetPastor meetData={meetPastor2} />
    </div>
  )
}

export default YouthMain