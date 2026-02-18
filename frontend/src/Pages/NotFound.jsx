import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function NotFound() {
  return (
  
    <section className='notFound'>
      <div className="container">
        <img src="/notFound" alt="" />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find you the page you're  </p>
        <Link to={"/"}>
        Back to Home</Link>
        <span>
          <HiOutlineArrowNarrowRight /> 
        </span>
      </div>
    </section>
  )
}

export default NotFound
