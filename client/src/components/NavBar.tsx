import React from 'react';
import './NavBar.css';
import 'animate.css';


export default function NavBar(){
  return(
    <div className='navCont'>
      <div className='nav'>
        <a href="#home" className='btn'>Home</a>
        <a href="#skills" className='btn animate__headShake'>Skills</a>
        <a href="#experience" className='btn animate__headShake'>Experience</a>
        <a href="#contact" className='btn animate__headShake' >Contact</a>
      </div>
      <div className='bar'></div>
    </div>
  )
}
