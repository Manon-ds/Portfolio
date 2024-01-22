import React from 'react';
import './Presentation.css';
import Arrow from './Arrow';

export default function Presentation(){
  return(
    <div className='container'>
      <div className='nameCont'>
        <h2 className='name'>Manon Brun</h2>
      </div>
      <div className='presCont'>
        <p>Full Stack software engineer <br />
          Creating innovative applications to improve people's lives <br />and giving them a great user experience. </p>
      </div>
      <Arrow/>
    </div>
  )
}
