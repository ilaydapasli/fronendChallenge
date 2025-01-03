import React, { useContext } from "react";
import { SiteGlobalContext } from "../context/SiteGlobalProvider";
import { headerData } from "../api/data"; // Yeni veri kaynağını import ettik
import girisimage from "/img/giris.png";
import backgroundImage from "/img/backgrounds/hero-bg.png";
import darkbackgroundImage from "/img/backgrounds/hero-bgdark.png";

import { DarkModeSwitch } from "react-toggle-dark-mode";

function Header({ userName }) {
  const { theme, toggleDarkMode, lang, setLang } =
    useContext(SiteGlobalContext);

  const changeLang = () => {
    lang === "tr" ? setLang("en") : setLang("tr");
  };

  return (
    <div
      className={`h-screen bg-cover bg-center flex flex-col ${
        theme === "dark" ? "dark" : ""
      }`}
      style={{
        backgroundImage: `url(${
          theme === "dark" ? darkbackgroundImage : backgroundImage
        })`, // Tema seçimine göre arka planı değiştiriyoruz
      }}
    >
      {/* Header Bölümü */}
      <header className="flex justify-center items-center p-4 text-white">
        <div className="flex justify-between items-center w-full max-w-6xl">
          <h3 className="text-[#CBF281] font-inter font-bold text-[32px] leading-[72px]">
            {userName}
          </h3>
          <div className="flex items-center space-x-4 mr-14 gap-3">
            <button
              onClick={changeLang}
              className="text-white w-[138px] h-[18px] font-inter font-bold text-[15px]"
            >
              {lang === "en" ? (
                <span>
                  <span className="text-[#CAF181]">Türkçe</span>'ye geçin
                </span>
              ) : (
                <span>
                  Switch to
                  <span className="text-[#CAF181]"> English</span>
                </span>
              )}
            </button>
            <div className="flex items-center space-x-2">
              {/* Custom Toggle */}
              <label
                htmlFor="toggle-dark-mode"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="toggle-dark-mode"
                  onChange={toggleDarkMode}
                  checked={theme === "dark"}
                  className="toggle-checkbox hidden"
                />
                <span className="toggle-label block w-12 h-6 bg-gray-400 rounded-full transition-all duration-300 relative  ml-1">
                  <span
                    className={`dot w-6 h-6 bg-white rounded-full absolute top-0 left-0 transition-all duration-300 ${
                      theme === "dark" ? "transform translate-x-6" : ""
                    }`}
                  />
                </span>
                <span
                  className={`mr-2 font-inter font-bold text-[15px]  ml-2 ${
                    theme === "light" ? "text-[#4731D3]" : "text-[#D9D9D9]"
                  }`}
                >
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* İçerik Alanı */}
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12 rounded-lg">
          {/* Metin Alanı */}
          <div className="text-center md:text-left">
            <h1 className="primary text-6xl font-bold mb-4 text-[#CBF281]">
              {lang === "tr" ? headerData.title.tr : headerData.title.en}{" "}
              {/* Dil seçimine göre başlık */}
            </h1>
            <p className="text-white mb-6 text-2xl">
              {lang === "tr"
                ? headerData.description.tr
                : headerData.description.en}{" "}
              {/* Dil seçimine göre açıklama */}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                className={`flex items-center w-[127px] h-[52px] rounded-[6px] px-[12px] py-[12px] ${
                  theme === "dark"
                    ? "bg-[#252128] border-[#FFFFFF] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] border-white text-[#3730A3]"
                }`}
              >
                <img
                  src={
                    theme === "dark"
                      ? headerData.buttonimg.githubdark
                      : headerData.buttonimg.github
                  }
                  alt="GitHub Icon"
                  className="w-5 h-5 mr-2" // Bu sınıf simgeyi ve metni yan yana getirir
                />
                <span className="leading-7 font-medium font-inter text-[18px]">
                  GitHub
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center w-[127px] h-[52px] rounded-[6px] px-[12px] py-[12px] ${
                  theme === "dark"
                    ? "bg-[#252128] border-[#FFFFFF] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] border-white text-[#3730A3]"
                }`}
              >
                <img
                  src={
                    theme === "dark"
                      ? headerData.buttonimg.LinkedInDark
                      : headerData.buttonimg.LinkedIn
                  }
                  alt="LinkedIn Icon"
                  className="w-5 h-5 mr-2" // Bu sınıf simgeyi ve metni yan yana getirir
                />
                <span className="leading-7 font-medium font-inter text-[18px]">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Resim Alanı */}
          <div className="w-[350px] h-[375.89px] rounded-[18px] overflow-hidden">
            <img
              src={girisimage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
