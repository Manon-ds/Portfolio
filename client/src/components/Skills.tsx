import React from "react";
import './Skills.css'

export default function Skills(){
  return(
    <div className="skillsmain">
      <h2 className="title">My Skills</h2>
      <div className="skillscont">
        <div className="skill">
          <h3 className="skillName"><span className="realistic-marker-highlight">Software   </span> <br/><span className="realistic-marker-highlight">Development</span></h3>
          <p>Skilled in both OOP <br/>and Functional programming: <br/>with JavaScript and TypeScript</p>
        </div>
        <div className="skill">
          <h3><span className="realistic-marker-highlight2">Frontend:</span> <br/><span className="realistic-marker-highlight2">React, React Native</span></h3>
          <p>Enthusiastic about UI/UX <br/>with a background spanning over 3 years in <br/>HTML, CSS, JS, Redux, React, React Native, Expo</p>
        </div>
        <div className="skill">
          <h3><span className="realistic-marker-highlight3">Backend: </span><br/><span className="realistic-marker-highlight3">Node.js, APIs</span></h3>
          <p>Skilled in developing RESTful APIs <br/>using Node.js and Express.js, <br/>as well as SQL and NoSQL databases, <br/>and Jest and Cypress for testing</p>
        </div>
      </div>

      <svg xmlns="//www.w3.org/2000/svg" version="1.1" className="svg-filters" >
        <defs>
          <filter id="marker-shape">
            <feTurbulence type="fractalNoise" baseFrequency="0 0.15" numOctaves="1" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
          </filter>
        </defs>
      </svg>

      <div id="experience"></div>
      
    </div>

  )
}
