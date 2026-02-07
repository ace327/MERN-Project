import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
  return (
   <section className='HeroSection' id = "heroSection">
    <Navbar/>
    <div className="container">
        <div className="banner">
            <div className="largeBox">
                <h1 className="title">
                    Delicious
                </h1>
                <div className="combined_boxes">
                    <div className="imageBox">
                        <img src="./hero1.png" alt="" srcset="" />
                    </div>
                    <div className="textAndLogo">
                        <div className="textWithSvg">
                            <h1 className="title">Food</h1>
                            <h1 className="title dishes-title">Dishes</h1>
                            <img src="./threelines.svg" alt="" srcset="" />
                        </div> 
                        <img src="" alt="./logo.svg" srcset="" className='logo'/>
                    </div>
                </div>
            </div>

            
        </div>
        <div className="banner">
            <div className="imageBox">
                <img src="./hero2.png" alt="" srcSet="" />
            </div>  

            <div className="title dishes title">Dishes</div>

        </div>
        </div>

   </section>
  )
}

export default HeroSection
