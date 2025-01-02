import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiteGlobalContext } from "../context/SiteGlobalProvider";
import { footerData } from "../api/data";
function Footer({ email }) {
  const { lang, theme } = useContext(SiteGlobalContext);
  return (
    <div
      className="max-h-screen flex flex-col text-center"
      style={{ backgroundColor: theme === "dark" ? "#252128" : "#fff" }}
    >
      <div className="footer-content flex flex-col p-4 ">
        <h1
          className="p-8 text-[48px]"
          style={{ color: theme === "dark" ? "#8F88FF" : "#4731D3" }}
        >
          {lang === "tr" ? footerData.sendme.tr : footerData.sendme.en}
        </h1>
        <p
          className="p-8 text-[24px] leading-9	"
          style={{ color: theme === "dark" ? "#FFFFFF" : "#120B39" }}
        >
          {lang === "tr"
            ? footerData.description.tr
            : footerData.description.en}
        </p>
        <a className="text-[#4731D3] leading-9	underline  text-[20px] " href="">
          {email}
        </a>

        <div className=" flex gap-2 justify-center mt-3">
          {theme === "dark"
            ? footerData.social_dark.map((e, i) => (
                <a key={i} href="#">
                  <img src={e} />
                </a>
              ))
            : footerData.social.map((e, i) => (
                <a key={i} href="#">
                  <img src={e} />
                </a>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
