import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">
                        <p>The only thing we're seroius about is food.</p>
                    </h1>
                </div>
                <p className="mid">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius enim ea tenetur necessitatibus sed veniam?
                </p>
                <Link to={"/"}>Explore Menu
                <span>
                    <HiOutlineArrowNarrowRight/>
                </span></Link>
            </div>
        </div>
    </section>
  )
}

export default About
