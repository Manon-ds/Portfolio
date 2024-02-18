import React from 'react';
import './Presentation.css';
import Arrow from './Arrow';

export default function Presentation(){
  return(
    <div className='container' id='home'>
      <div className='nameCont'>
        <h2 className='name'>Manon Brun</h2>
      </div>
      <div className='presCont'>
        <p>I'm a software engineer <br />
          specializing in creating innovative applications <br />with a great design and user experience. </p>
      </div>
      <Arrow/>
      <div  id="skills"></div>
    </div>
  )
}
