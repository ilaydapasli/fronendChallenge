import React from "react";
import "../css/Giris.css";
import "font-awesome/css/font-awesome.min.css";

function Giris() {
  return (
    <div className="site-wrapper">
      <div className="content">
        <h2>İlayda</h2>
        <div className="navbar-giris">
          <h3>TÜRKÇE’YE GEÇ</h3>
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
          <h3>DARK MODE</h3>
        </div>

        <div>
          <h1>
            I am a Frontend <br /> Developer...{" "}
          </h1>

          <p>
            ...who likes to craft solid and scalable frontend <br /> products
            with great user experiences.
          </p>
          <button>Github</button>
          <button>Linkedin</button>
        </div>
      </div>
    </div>
  );
}

export default Giris;
