import React from "react";
import './Experience.css';
import screenshot from '../assets/lang.png'

export default function Langage(){
  return(
    <div className="moodflow">
      <div className="textcont">
        <div className="text">
          <p className="moodP"><span className="realistic-marker-highlight5">LanGage is a chatbot allowing users to have    .</span><br/><span className="realistic-marker-highlight5"> conversations with an AI generated spanish teacher,    .</span><br/><span className="realistic-marker-highlight5"> giving feedback and translations in real time.    .</span></p>
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
