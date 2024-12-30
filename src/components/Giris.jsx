import React from "react";
import "../css/Giris.css";
import girisimage from "../img/giris.png";
import backgroundImage from "../img/backgrounds/hero-bg.png";
import githubIcon from "../img/iconlar/github.png";
import LinkedIcon from "../img/iconlar/LinkedIn.png";
function Giris({ userName }) {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Header Bölümü */}
      <header className="flex justify-between items-center p-4 bg-gray-800 bg-opacity-75 text-white">
        <h3 className="text-lg font-semibold">{userName}</h3>
        <div className="flex space-x-4">
          <button className="hover:underline">Türkçeye Geç</button>
          <button className="hover:underline">Dark Mode</button>
        </div>
      </header>

      {/* İçerik Alanı */}
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12 rounded-lg ">
          {/* Metin Alanı */}
          <div className="text-center md:text-left ">
            <h1 className="primary text-6xl font-bold mb-4">
              I am a Frontend <br /> Developer
            </h1>
            <p className="text-white mb-6 text-2xl	">
              ...who likes to craft solid and scalable frontend <br /> products
              with great user experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[127px] h-[52px] rounded-[6px] border-[1px] bg-[#FFFFFF] border-white px-[12px] py-[12px]  "
              >
                <span className=" leading-7 font-medium font-inter text-[18px] text-[#3730A3]">
                  Github
                </span>
              </button>
              <button
                href="https://github.com"
                className="w-[127px] h-[52px] rounded-[6px] border-[1px] bg-[#FFFFFF] border-white px-[12px] py-[12px]  "
              >
                <span className=" leading-7 font-medium font-inter text-[18px] text-[#3730A3]">
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

export default Giris;
