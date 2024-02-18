import React from "react";
import './Experience.css';
import screenshot from '../assets/lang.png'

export default function Langage(){
  return(
    <div className="moodflow two">
      <div className="textcont">
        <h2>LanGage</h2>
        <div className="text">
          <p className="moodP">A chatbot letting users have beginner level conversations in Spanish with an AI generated spanish teacher, giving feedback and translations in real time.</p>
        </div>
        <div>
          <p className="bold"><span className="realistic-marker-highlight5">React - TypeScript - Jest - MongoDB - OpenAI API</span></p>
        </div>
      </div>
      <div className="imgcont">
        <img className='img2' src={screenshot} alt="" />
      </div>
      

    </div>

  )
}
