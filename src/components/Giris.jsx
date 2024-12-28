import React from "react";
import "../css/Giris.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"; // Doğru seti kullanın
import girisimage from "../img/giris.png";

function Giris() {
  return (
    <div className="site-wrapper">
      <div className="content">
        <header className="header">
          <h2>İlayda</h2>
          <div className="navbar-giris">
            <h4 style={{ color: "#D9D9D9" }}>
              <span style={{ color: "#CAF181" }}>TÜRKÇE</span>’YE GEÇ
            </h4>
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
            <h4 style={{ color: "#c8c5da" }}>DARK MODE</h4>
          </div>
        </header>
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              I am a Frontend <br /> Developer...{" "}
            </h1>

            <p className="giris-p">
              ...who likes to craft solid and scalable frontend <br /> products
              with great user experiences.
            </p>
            <button
              style={{
                color: "#3730A3",
                fontSize: "18px",
                border: "1px solid #3730A3",
                lineHeight: "28px",
                fontWeight: "500px",
              }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  width: "26px",
                  height: "26.26px",
                }}
              />
              Github
            </button>
            <button
              style={{
                color: "#3730A3",
                fontSize: "18px",
                lineHeight: "28px",
                fontWeight: "500px",
                border: "1px solid #3730A3",
              }}
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{
                  width: "24px",
                  height: "25.21px",
                }}
              />
              Linkedin
            </button>
          </div>
          <div className="image-giris">
            <img src={girisimage}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Giris;
