import React from "react";
import card1 from "../img/card1.png";
import "../css/Card.css";
function Card() {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={card1} alt="" />
      </div>
      <div className="content-container">
        <h2
          style={{
            color: "#4338CA",
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "32px",
          }}
        >
          Workintech
        </h2>
        <p>
          A simple, customizable, minimal setup cookie plugin that allows your
          users to select which cookies to accept or decline. This was created
          with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
          package and the git repository makes any type of customization to code
          and themes possible.
        </p>
        <div>
          <button className="button-profile">react</button>
          <button className="button-profile">redux</button>
          <button className="button-profile">vercel</button>
        </div>

        <a href="">View Site</a>
        <a href="">Github</a>
      </div>
    </div>
  );
}

export default Card;
