import React from "react";
import './Experience.css';
import screen2 from '../assets/screenshot2.png'
import screen3 from '../assets/screenshot3.png'
import screen1 from '../assets/screenshot1.png'

export default function Moodflow(){
  return(
    <div className="moodflow">
      <div className="imgcont">
        <img className='img' src={screen2} alt="" />
        <img className='img' src={screen3} alt="" />
        <img className='img' src={screen1} alt="" />
      </div>
      <div>
        <div className="text">
          <p className="moodP"><span className="realistic-marker-highlight3">Moodflow is a mental health task tracking app    .</span><br/><span className="realistic-marker-highlight3">offering users different features to track    .</span><br/><span className="realistic-marker-highlight3">and improve their mood.    .</span></p>
        </div>
        <div>
          <p className="bold"><span className="realistic-marker-highlight3">React-native - Redux - TypeScript - Jest - React-native Reanimated - SQLite - Bcrypt - Neo4J</span></p>
        </div>
      </div>

    </div>

  )
}
