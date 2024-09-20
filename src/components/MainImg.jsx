import React from 'react'
import './MainImg.css'
import img from '../assets/main-img.jpg'
import {Link} from 'react-router-dom'

const MainImg = () => {
  return (
    <div className='main'>
         <div className='mask'>
             <img className='main-img' src={img} alt='Main'/>
         </div>
         <div className='content'>
            <p>Hi, I'm a software developer.</p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to='/project' className='btn'>projects</Link>
                <Link to='/contact' className='btn btn-light'>contact me</Link>
            </div>
         </div>
    </div>
  )
}

export default MainImg