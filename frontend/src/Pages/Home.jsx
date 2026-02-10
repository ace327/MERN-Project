import React from 'react'
import HeroSection from '../Components/HeroSection.jsx'
import Qulities from '../Components/Qulities.jsx'
import Menu from '../Components/Menu.jsx'
import WhoAreWe from '../Components/WhoAreWe.jsx'
import Team from '../Components/Team.jsx'

function Home() {
  return (
    <div>
      < HeroSection/>
      < About/>
      <Qulities />
      <Menu />
      <WhoAreWe />
      <Team/>

    </div>
  )
}

export default Home
