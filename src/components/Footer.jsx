import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h1 style={{ color: "#4731D3" }}>Send me a message!</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <a href="">almilasucode@gmail.com</a>

        <div>
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#4731D3" }} />
          <FontAwesomeIcon icon={faCodepen} style={{ color: "#4731D3" }} />

          <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#4731D3" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#4731D3" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
