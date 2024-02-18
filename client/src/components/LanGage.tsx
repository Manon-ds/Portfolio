import React from "react";
import './Experience.css';
import screenshot from '../assets/lang.png'

export default function Langage(){
  return(
    <div className="moodflow two">
      <div className="textcont">
        <div className="text">
          <p className="moodP">LanGage is a chatbot allowing <br/>users to have conversations <br/>with an AI generated spanish teacher,<br/>giving feedback and translations in real time.</p>
        </div>
        <div>
          <p className="bold"><span className="realistic-marker-highlight5">React - Redux - TypeScript - Jest - React-testing-library - MongoDB - OpenAI API</span></p>
        </div>
      </div>
      <div className="imgcont">
        <img className='img2' src={screenshot} alt="" />
      </div>
      

    </div>

  )
}
