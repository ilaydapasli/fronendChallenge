import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container  max-h-screen flex flex-col text-center mt-20 px-4 mb-20">
      <div className="footer-content flex flex-col p-4 ">
        <h1 className="p-8 text-[48px]" style={{ color: "#4731D3" }}>
          Send me a message!
        </h1>
        <p className="p-8 text-[24px] leading-9	">
          Got a question or proposal, or just want <br /> to say hello? Go
          ahead.
        </p>
        <a className="text-[#4731D3] leading-9	underline  text-[20px] " href="">
          almilasucode@gmail.com
        </a>

        <div className=" flex gap-2 justify-center mt-3">
          <FontAwesomeIcon
            className=""
            icon={faTwitter}
            style={{ color: "#4731D3" }}
          />
          <FontAwesomeIcon
            className=""
            icon={faCodepen}
            style={{ color: "#4731D3" }}
          />

          <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#4731D3" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#4731D3" }} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
