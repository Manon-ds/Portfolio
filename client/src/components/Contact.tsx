import React from "react";
import './Contact.css';
import resume from '../assets/resume.jpg'

export default function Contact(){
  return(
    <div className="main_contact_container">
      <div>
        <h2 className="conttitle">Contact</h2>
      </div>
      <div className="contact_container">
        <div className="contacts">
          <p>Phone: +44 07949 537 698</p>
        </div>
        <div className="contacts">
          <p>email: manonbranc@outlook.fr</p>
        </div>
        <div className="contacts resume">
          <a className='resume_btn' href={resume} download="Manon_Brun_Resume">Download Resume</a>
        </div>
      </div>
    </div>
  )
}
