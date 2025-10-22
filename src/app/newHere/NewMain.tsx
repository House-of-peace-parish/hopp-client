import MeetPastor from '@/components/growPage/MeetPastor'
import Connect from '@/components/landpage/Connect'
import NewGuide from '@/components/landpage/NewGuide'
import QuickLink from '@/components/landpage/QuickLink'
import React from 'react'

function NewMain() {
  return (
    <div>
        <NewGuide />
        <Connect />
        <QuickLink />
        <MeetPastor />
    </div>
  )
}

export default NewMain