import React from 'react'
import HeroSection from '../Components/HeroSection.jsx'
import Qulities from '../Components/Qulities.jsx'
import Menu from '../Components/Menu.jsx'
import WhoAreWe from '../Components/WhoAreWe.jsx'

function Home() {
  return (
    <div>
      < HeroSection/>
      < About/>
      <Qulities />
      <Menu />
      <WhoAreWe />

    </div>
  )
}

export default Home
