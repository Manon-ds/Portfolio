import React from "react";
import './Experience.css';
import screen2 from '../assets/screenshot2.png'
import screen3 from '../assets/screenshot3.png'
import screen1 from '../assets/screenshot1.png'

export default function Moodflow(){
  return(
    <div className="moodflow one">
      <div className="imgcont">
        <img className='img' src={screen2} alt="screenshot of the home page of the Moodflow mobile app" />
        <img className='img' src={screen3} alt="screenshot of the flowchat page of the Moodflow mobile app" />
        <img className='img' src={screen1} alt="screenshot of the calendar page of the Moodflow mobile app" />
      </div>
      <div className="textcont">
        <h2><span className="span">01.  </span>Moodflow</h2>
        <div className="text">
          <p className="moodP">A mental health tracking app offering users a daily flowchart, giving them feedback to improve their mood, as well as a journal feature, and a feed to reach out and support each other. </p>
        </div>
        <div >
          <p className="bold"><span className="realistic-marker-highlight4">React-native - Redux - TypeScript - Jest - SQLite - Neo4J</span></p>
        </div>
      </div>

    </div>

  )
}
