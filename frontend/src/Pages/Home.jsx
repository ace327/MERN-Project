import React from 'react'
import HeroSection from '../Components/HeroSection.jsx'
import Qulities from '../Components/Qulities.jsx'
import Menu from '../Components/Menu.jsx'
import WhoAreWe from '../Components/WhoAreWe.jsx'
import Team from '../Components/Team.jsx'
import Footer from '../Components/Footer.jsx'

function Home() {
  return (
    <div>
      < HeroSection/>
      < About/>
      <Qulities />
      <Menu />
      <WhoAreWe />
      <Team/>
      <Footer />

    </div>
  )
}

export default Home
