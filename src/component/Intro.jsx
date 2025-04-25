import React from 'react'
import heroimg from '../assets/images/hero-img.png'

const Intro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="intro">
          <h1>Our Services</h1>
        </div>
        <div className="intro-logo">
            <img src= {heroimg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Intro
