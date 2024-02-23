import React from 'react';
import './NavBar.css';
import 'animate.css';


export default function NavBar(){
  return(
    <div className='navCont'>
      <div className='nav'>
        <a href="#home" className='btn'>Home</a>
        <a href="#skills" className='btn'>Skills</a>
        <a href="#experience" className='btn'>Experience</a>
        <a href="#contact" className='btn' >Contact</a>
      </div>
      <div className='bar'></div>
    </div>
  )
}
