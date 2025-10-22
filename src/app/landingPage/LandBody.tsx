import AboutUs from '@/components/landpage/AboutUs'
import CommunityInit from '@/components/landpage/CommunityInit'
import Connect from '@/components/landpage/Connect'
import CoreMin from '@/components/landpage/CoreMin'
import Giving from '@/components/landpage/Giving'
import NewGuide from '@/components/landpage/NewGuide'
import QuickLink from '@/components/landpage/QuickLink'
import UpcomingEvents from '@/components/landpage/UpcomingEvents'
import React from 'react'

function LandBody() {
  return (
    <div>
        <AboutUs />
        <UpcomingEvents />
        <QuickLink />
        <NewGuide />
        <Giving />
        <Connect />
        <CoreMin />
        <CommunityInit />
    </div>
  )
}

export default LandBody