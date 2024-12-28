import React from "react";
import jsimg from "../img/skillsimg/js.jpeg";
import reactimg from "../img/skillsimg/react.png";
import reduximg from "../img/skillsimg/redux.png";

import nodeimg from "../img/skillsimg/node.jpeg";
import vsimg from "../img/skillsimg/vscode.png";
import figmaimg from "../img/skillsimg/figma.jpeg";
import "../css/Skills.css";

function Skills() {
  return (
    <div className="main-container">
      <div>
        <h2 style={{ color: "#4832D3" }}>Skills</h2>
      </div>

      <div className="skill-container">
        <div className="skill-card">
          <img src={jsimg} alt="" />
          <h3>JAVASCRIPT</h3>
        </div>
        <div className="skill-card">
          <img src={reactimg} alt="" />
          <h3>REACT</h3>
        </div>
        <div className="skill-card">
          <img src={reduximg} alt="" />
          <h3>REDUX</h3>
        </div>
        <div className="skill-card">
          <img src={nodeimg} alt="" />

          <h3>NODE</h3>
        </div>
        <div className="skill-card">
          <img src={vsimg} alt="" />
          <h3>VS CODE</h3>
        </div>
        <div className="skill-card">
          <img src={figmaimg} alt="" />
          <h3>FIGMA</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
