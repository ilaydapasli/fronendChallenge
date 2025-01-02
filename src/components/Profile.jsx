import React from "react";
import { SiteGlobalContext } from "../context/SiteGlobalProvider";
import { useContext } from "react";
import { profileData } from "../api/data";
import ProfileBg from "../img/backgrounds/profile-bg.png";
import darkProfileBg from "../img/backgrounds/profile-bg-dark.png";

function Profile() {
  const { theme, lang } = useContext(SiteGlobalContext);

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-center"
      style={{
        backgroundImage: `url(${theme === "dark" ? darkProfileBg : ProfileBg})`,
      }}
    >
      {/* Sol içerik alanı */}
      <div className="lg:w-1/3 text-left p-8 space-y-4 bg-transparent">
        <h2 className="text-[#CBF281] font-bold text-4xl">
          {lang === "tr" ? profileData.header.tr : profileData.header.en}
        </h2>
        <div className="space-y-3">
          <div>
            <h6 className="text-[#CBF281] font-semibold text-lg">
              {lang === "tr"
                ? profileData.personal.birthdate.tr
                : profileData.personal.birthdate.en}
            </h6>
            <p className="text-white text-lg">02.06.1999</p>
          </div>
          <div>
            <h6 className="text-[#CBF281] font-semibold text-lg">
              {lang === "tr"
                ? profileData.personal.location.tr
                : profileData.personal.location.en}
            </h6>
            <p className="text-white text-lg">Rize</p>
          </div>
          <div>
            <h6 className="text-[#CBF281] font-semibold text-lg">
              {lang === "tr"
                ? profileData.personal.education.tr
                : profileData.personal.education.en}
            </h6>
            <p className="text-white text-lg">
              Sivas Cumhuriyet Üniversitesi, 2020
            </p>
          </div>
          <div>
            <h6 className="text-[#CBF281] font-semibold text-lg">
              {lang === "tr"
                ? profileData.personal.role.tr
                : profileData.personal.role.en}
            </h6>
            <p className="text-white text-lg">Fullstack</p>
          </div>
        </div>
      </div>

      {/* Ortadaki resim alanı */}
      <div className="lg:w-1/3 flex justify-center items-center">
        <img
          src={profileData.image}
          alt="Profile"
          className="w-[300px] h-[300px] rounded-lg shadow-lg"
        />
      </div>

      {/* Sağdaki açıklama alanı */}
      <div className="lg:w-1/3 p-8 space-y-4 bg-transparent">
        <h4 className="text-white text-3xl font-semibold">
          {lang === "tr"
            ? profileData.lastHeader.tr
            : profileData.lastHeader.en}
        </h4>
        <p className="text-white text-lg leading-relaxed">
          {profileData.description1}
        </p>
        <p className="text-white text-lg leading-relaxed">
          {profileData.description2}
        </p>
      </div>
    </div>
  );
}

export default Profile;
