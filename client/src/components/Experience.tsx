import React from "react";
import './Experience.css';
import Moodflow from "./Moodflow";
import Langage from "./LanGage";
import Poketask from "./Poketask";

export default function Experience(){
  return(
    <div className="exp-container" >
      <h2 className="exptitle" >Experience</h2>
      <div className="cont">
        <Moodflow/>
        <Langage/>
        <Poketask/>
      </div>
      <svg xmlns="//www.w3.org/2000/svg" version="1.1" className="svg-filters" >
        <defs>
          <filter id="marker-shape">
            <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
          </filter>
        </defs>
      </svg>
      <div  id="contact"></div>
    </div>
  )
}
