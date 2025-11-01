import Connect from '@/components/landpage/Connect'
import NewGuide from '@/components/landpage/NewGuide'
import QuickLink from '@/components/landpage/QuickLink'
import React from 'react'

function NewMain() {
  return (
    <div className='overflow-hidden'>
      <NewGuide />
      <Connect />
      <QuickLink />
    </div>
  )
}

export default NewMain