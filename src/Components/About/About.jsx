import React from 'react'
import './About.css'
import logo from '../../assets/logo-4.jpg'
import fake from '../../assets/fake-logo.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img width={400} src={logo} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio qui reprehenderit repellat possimus et voluptatibus enim fuga quod ducimus doloremque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum pariatur exercitationem nisi ratione quaerat fugit non ad ipsum assumenda.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JAVA SCRIPT</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Spring</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>years of experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>projects completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About