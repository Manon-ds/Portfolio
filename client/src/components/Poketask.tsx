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
        <h2>PokeTask</h2>
        <div className="text">
          <p className="moodP">An app to create task lists offering a game-like experience by earning points with each task completed, and a character leveling up accordingly.</p>
        </div>
        <div>
          <p className="bold"><span className="realistic-marker-highlight6">React - JavaScript - Jest - Express - MongoDB</span></p>
        </div>
      </div>

    </div>

  )
}
