import React from "react";
import './Skills.css'

export default function Skills(){
  return(
    <div className="skillsmain">
      <h2 className="title">Tech stack</h2>
      <div className="skillscont">
        <div className="skill">
          <h3 className="skillName"><span className="realistic-marker-highlight">Software   </span> <br/><span className="realistic-marker-highlight">Development</span></h3>
          <p>Skilled in both OOP <br/>and Functional programming: <br/>with <span className="skill-span">JavaScript</span> and <span className="skill-span">TypeScript</span></p>
        </div>
        <div className="skill">
          <h3><span className="realistic-marker-highlight2">Frontend:</span> <br/><span className="realistic-marker-highlight2">React, React Native</span></h3>
          <p>Enthusiastic about <span className="skill-span">UI/UX</span> <br/>with a background spanning over 3 years in <br/><span className="skill-span">HTML, CSS, JS, Redux, React, React Native, Expo</span></p>
        </div>
        <div className="skill">
          <h3><span className="realistic-marker-highlight3">Backend: </span><br/><span className="realistic-marker-highlight3">Node.js, APIs</span></h3>
          <p>Skilled in developing <span className="skill-span">RESTful APIs</span> <br/>using <span className="skill-span">Node.js</span> and <span className="skill-span">Express.js</span>, <br/>as well as <span className="skill-span">SQL and NoSQL</span> databases, <br/>and <span className="skill-span">Jest</span> and <span className="skill-span">Cypress</span> for testing</p>
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
