import React from "react";
import './Experience.css';
import screen from '../assets/poketask.png'


export default function Poketask(){
  return(
    <div className="moodflow three">
      <div className="imgcont">
        <img className='img2' src={screen} alt="" />
      </div>
      <div className="textcont">
        <div className="text">
          <p className="moodP"><span className="realistic-marker-highlight6">Poketask is a to-do list app    .</span><br/><span className="realistic-marker-highlight6">offering a game-like experience including    .</span><br/><span className="realistic-marker-highlight6">a point counter and a leveling-up character.    .</span></p>
        </div>
        <div>
          <p className="bold"><span className="realistic-marker-highlight6">React - JavaScript - Jest - Express - MongoDB</span></p>
        </div>
      </div>

    </div>

  )
}
