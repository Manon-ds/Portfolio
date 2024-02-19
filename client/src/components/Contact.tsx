import React from "react";
import './Contact.css';
import resume from '../assets/resume.jpg'
import copyIcon from '../assets/icons8-copy-24.png'

export default function Contact(){

  function copyNum() {
    navigator.clipboard.writeText
        ("+44 07949 537 698");
  }
  function copyMail() {
    navigator.clipboard.writeText
        ("manonbranc@outlook.fr");
  }

  return(
    <div className="main_contact_container">
      <div>
        <h2 className="conttitle">Contact</h2>
      </div>
      <div className="contact_container">
        <div className="contacts">
          <p><span className="contact-span">Phone:</span> +44 07949 537 698</p>
          <button onClick={copyNum} className="copy"><img src={copyIcon} alt="" className="copy"/></button>
        </div>
        <div className="contacts">
          <p><span className="contact-span">email:</span> manonbranc@outlook.fr</p>
          <button onClick={copyMail} className="copy"><img src={copyIcon} alt="" className="copy"/></button>

        </div>
        <div className="contacts resume">
          <a className='resume_btn' href={resume} download="Manon_Brun_Resume">Download Resume</a>
        </div>
      </div>
    </div>
  )
}
