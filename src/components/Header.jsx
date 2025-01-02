import React, { useContext } from "react";
import { SiteGlobalContext } from "../context/SiteGlobalProvider";
import { headerData, skillsData, skillsHeader } from "../api/data"; // Yeni veri kaynağını import ettik
import girisimage from "../img/giris.png";
import backgroundImage from "../img/backgrounds/hero-bg.png";
import darkbackgroundImage from "../img/backgrounds/hero-bgdark.png";
import githubIcon from "../img/iconlar/github.png";
import LinkedIcon from "../img/iconlar/LinkedIn.png";
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
      <header className="flex justify-between items-center p-4  text-white">
        <h3 className="text-lg font-semibold">{userName}</h3>
        <div className="flex space-x-4">
          <button onClick={changeLang} className="hover:underline text-white">
            {lang === "tr" ? "English" : "Türkçe"}
          </button>
          <button
            onClick={toggleDarkMode}
            className="hover:underline text-white"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* İçerik Alanı */}
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12 rounded-lg">
          {/* Metin Alanı */}
          <div className="text-center md:text-left">
            <h1 className="primary text-6xl font-bold mb-4 text-[#CBF281]">
              {headerData.title[lang]} {/* Dil seçimine göre başlık */}
            </h1>
            <p className="text-white mb-6 text-2xl">
              {headerData.description[lang]} {/* Dil seçimine göre açıklama */}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-[127px] h-[52px] rounded-[6px] px-[12px] py-[12px] ${
                  theme === "dark"
                    ? "bg-[#252128] border-[#FFFFFF] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] border-white text-[#3730A3]"
                }`}
              >
                <span className="leading-7 font-medium font-inter text-[18px]">
                  Github
                </span>
              </button>
              <button
                href="https://github.com"
                className={`w-[127px] h-[52px] rounded-[6px] px-[12px] py-[12px] ${
                  theme === "dark"
                    ? "bg-[#252128] border-[#FFFFFF] text-[#FFFFFF]"
                    : "bg-[#FFFFFF] border-white text-[#3730A3]"
                }`}
              >
                <span className="leading-7 font-medium font-inter text-[18px]">
                  LinkedIn
                </span>
              </button>
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
