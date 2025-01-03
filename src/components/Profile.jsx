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
      className="min-h-screen	 bg-cover bg-center flex flex-col lg:flex-row justify-around items-center px-4 sm:px-8 md:px-16"
      style={{
        backgroundImage: `url(${theme === "dark" ? darkProfileBg : ProfileBg})`,
      }}
    >
      {/* Sol içerik alanı */}
      <div className="text-left p-5 lg:p-6 space-y-5 bg-transparent">
        <h1 className="text-[#CBF281] font-bold text-[48px] mb-4 leading-[48px] tracking-[0.01em] font-inter sm:text-3xl lg:text-4xl -mt-6">
          {lang === "tr" ? profileData.header.tr : profileData.header.en}
        </h1>
        <div className="space-y-3">
          <h4 className="text-white text-2xl sm:text-3xl font-semibold">
            {lang === "tr"
              ? profileData.firstHeader.tr
              : profileData.firstHeader.en}
          </h4>
          <div className="flex gap-2 items-center">
            <h6 className="text-[#CBF281] font-semibold text-base sm:text-lg">
              {lang === "tr"
                ? profileData.personal.birthdate.tr
                : profileData.personal.birthdate.en}
            </h6>
            <p className="text-white text-base sm:text-lg">02.06.1999</p>
          </div>
          <div className="flex gap-2 items-center">
            <h6 className="text-[#CBF281] font-semibold text-base sm:text-lg">
              {lang === "tr"
                ? profileData.personal.location.tr
                : profileData.personal.location.en}
            </h6>
            <p className="text-white text-base sm:text-lg">Rize</p>
          </div>
          <div className="flex gap-2 items-center">
            <h6 className="text-[#CBF281] font-semibold text-base sm:text-lg">
              {lang === "tr"
                ? profileData.personal.education.tr
                : profileData.personal.education.en}
            </h6>
            <p className="text-white text-base sm:text-lg">
              Piri Reis Üniversitesi
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h6 className="text-[#CBF281] font-semibold text-base sm:text-lg">
              {lang === "tr"
                ? profileData.personal.role.tr
                : profileData.personal.role.en}
            </h6>
            <p className="text-white text-base sm:text-lg">Fullstack</p>
          </div>
        </div>
      </div>

      {/* Ortadaki resim alanı */}
      <div className="lg:w-1/4 flex justify-center items-center p-2 lg:p-4">
        <img
          src={profileData.image}
          alt="Profile"
          className="w-[250px] sm:w-[300px] h-[250px] sm:h-[290px] rounded-lg"
        />
      </div>

      {/* Sağdaki açıklama alanı */}
      <div className="lg:w-1/3 p-4 lg:p-6 space-y-3 bg-transparent">
        <h4 className="text-white text-2xl sm:text-3xl font-semibold">
          {lang === "tr"
            ? profileData.lastHeader.tr
            : profileData.lastHeader.en}
        </h4>
        <p className="text-white text-base sm:text-lg leading-relaxed">
          {profileData.description1}
        </p>
        <p className="text-white text-base sm:text-lg leading-relaxed">
          {profileData.description2}
        </p>
      </div>
    </div>
  );
}

export default Profile;
