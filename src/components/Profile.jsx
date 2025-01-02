import React from "react";
//import "../css/Profile.css";
import { SiteGlobalContext } from "../context/SiteGlobalProvider";
import { useContext } from "react";
import { profileData } from "../api/data";
import ProfileBg from "../img/backgrounds/profile-bg.png";

import darkProfileBg from "../img/backgrounds/profile-bg-dark.png";
function Profile() {
  const { theme, toggleDarkMode, lang, setLang } =
    useContext(SiteGlobalContext);

  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col `}
      style={{
        backgroundImage: `url(${theme === "dark" ? darkProfileBg : ProfileBg})`, // Tema seçimine göre arka planı değiştiriyoruz
      }}
    >
      <h2>{lang === "tr" ? profileData.header.tr : profileData.header.en}</h2>
      <div className="profile-main-area">
        <div className="profile-info-area">
          <h4>
            {lang === "tr"
              ? profileData.firstHeader.tr
              : profileData.firstHeader.en}
          </h4>
          <div className="profile-info">
            <h6>
              {lang === "tr"
                ? profileData.personal.birthdate.tr
                : profileData.personal.birthdate.en}
            </h6>
            <p>02.06.1999</p>
          </div>
          <div className="profile-info">
            <h6>
              {lang === "tr"
                ? profileData.personal.location.tr
                : profileData.personal.location.en}
            </h6>
            <p>Rize</p>
          </div>
          <div className="profile-info">
            <h6>
              {lang === "tr"
                ? profileData.personal.education.tr
                : profileData.personal.education.en}
            </h6>
            <p>Sivas Cumhuriyet üniversitesi,2020</p>
          </div>
          <div className="profile-info">
            <h6>
              {lang === "tr"
                ? profileData.personal.role.tr
                : profileData.personal.role.en}
            </h6>
            <p>Fullstack</p>
          </div>
        </div>
        <div className="middle-area">
          <img src={profileData.image} />
        </div>
        <div className="about-area">
          <h4>
            {lang === "tr"
              ? profileData.lastHeader.tr
              : profileData.lastHeader.en}
          </h4>
          <p>{profileData.description1}</p>
          <p>{profileData.description2}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
