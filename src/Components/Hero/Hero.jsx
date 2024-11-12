import React from 'react'
import './Hero.css'
import profile from '../../assets/logo-4.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img width={500} src={profile} alt="" />
        <h1><span>IT Training at Home</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos eveniet maiores blanditiis neque quam enim excepturi commodi</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero