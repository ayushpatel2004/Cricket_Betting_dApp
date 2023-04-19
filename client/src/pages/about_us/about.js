import React from 'react'
import './about.css'
import Arya from '../../assets/Arya.jpg'
import Rudy from '../../assets/Rudy.jpg'
import Bhatia from '../../assets/Bhatia1.jpg'
import Ayush from '../../assets/Ayush.jpg'
import Butki from '../../assets/Butki1.jpg'
import Shreya from '../../assets/Shreya1.jpg'
import { Navbar } from '../../containers'
const About=() => {
  return (<>
    <Navbar/>
    <div className='page'>About Us</div>
    <div className='about_us_page'>
        
        <div className="team-card">
            <img className='team-image' src={Butki} alt="" />
            <h2>Aarya Agarwal</h2>
            <h2>21114001</h2>
        </div>
        <div className="team-card">
            <img className='team-image' src={Arya} alt="" />
            <h2>Arya Ashish Deshmukh</h2>
            <h2>21114017</h2>
        </div>
        <button className="team-card">
            <img className='team-image ayush' src={Ayush} alt="" />
            <h2>Patel Ayush Pravinkumar</h2>
            <h2>21114071</h2>
        </button>
        <div className="team-card">
            <img className='team-image rudy' src={Rudy} alt="" />
            <h2>Rudransh Aggarwal</h2>
            <h2>21114085</h2>
        </div>
        <div className="team-card">
            <img className='team-image' src={Bhatia} alt="" />
            <h2>Sanidhya Bhatia</h2>
            <h2>21114090</h2>
        </div>
        <div className="team-card">
            <img className='team-image shreya' src={Shreya} alt="" />
            <h2>Shreya Shivkumar</h2>
            <h2>21114098</h2>
            
        </div>
    </div>
    </>
  )
}
export default About