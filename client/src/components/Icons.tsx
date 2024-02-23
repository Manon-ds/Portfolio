import React from 'react';
import './NavBar.css';
import linkedinIcon from '../assets/linkedinIcon.png';
import gitHubIcoon from '../assets/download.png'

export default function Icons(){
  return(
    <div className='icons'>
      <a href="https://www.linkedin.com/in/manon-brun182/" target='_blank' rel="noreferrer"> <img className='linkicon icon' src={linkedinIcon} alt="linkedin logo linked to Linkedin account"/>
      </a>
      <a href="https://github.com/Manon-ds" target='_blank' rel="noreferrer"> <img className='giticon icon' src={gitHubIcoon} alt="github logo linked to github account" />
      </a>
    </div>
  )
}
