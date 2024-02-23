import React from 'react';
import './Presentation.css';
import Arrow from './Arrow';

export default function Presentation(){
  return(
    <div className='container' id='home'>
      <div className='sec-cont'>
        <p className='hi'>Hi, my name is</p>
        <div className='nameCont'>
          <h2 className='name'>Manon Brun</h2>
        </div>
        <div className='presCont css-typing'>
          <p><span>I'm a software engineer</span></p>
          <p><span>specialising in creating </span><span>innovative applications </span></p>
          <p><span>with great design and </span><span>an engaging UX</span> </p>
        </div>
      </div>
      
      <Arrow/>
      <div  id="skills"></div>
    </div>
  )
}
