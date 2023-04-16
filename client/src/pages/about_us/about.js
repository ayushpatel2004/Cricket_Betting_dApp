import React from 'react'
import './about.css'
import Ayush from './images/Ayush.png'
import { Navbar } from '../../containers'
const About=() => {
  return (<>
    <Navbar/>
    <div className='page'>About Us</div>
    <div className='about_us_page'>
        
        <div className="team-card">
            <img className='team-image' src="" alt="" />
            <h2>Aarya Agarwal</h2>
        </div>
        <div className="team-card">
            <img className='team-image' src="" alt="" />
            <h2>Arya Deshmukh</h2>
        </div>
        <div className="team-card">
            <img className='team-image' src={Ayush} alt="" />
            <h2>Ayush Patel</h2>
        </div>
        <div className="team-card">
            <img className='team-image' src="" alt="" />
            <h2>Rudransh Agarwal</h2>
        </div>
        <div className="team-card">
            <img className='team-image' src="" alt="" />
            <h2>Sanidhya Bhatia</h2>
        </div>
        <div className="team-card">
            <img className='team-image' src="" alt="" />
            <h2>Shreya Shivkumar</h2>
            
        </div>
    </div>
    </>
  )
}
export default About