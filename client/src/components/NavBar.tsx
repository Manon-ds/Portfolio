import React from 'react';
import './NavBar.css';

export default function NavBar(){
  return(
    <div className='navCont'>
      <div className='nav'>
        <p className='btn'>Home</p>
        <p className='btn'>Skills</p>
        <p className='btn'>Experience</p>
        <p className='btn'>Contact</p>
      </div>
    </div>
  )
}
