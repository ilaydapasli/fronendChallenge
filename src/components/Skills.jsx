import React from "react";
import { useContext } from "react";
import { skillsData } from "../api/data";
import { skillsHeader } from "../api/data";
import { SiteGlobalContext } from "../context/SiteGlobalProvider";

function Skills() {
  const { lang, theme } = useContext(SiteGlobalContext);
  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        theme === "dark" ? "bg-[#252128]" : "bg-gray-100"
      }`}
    >
      {/* İçerik Alanı */}
      <div className="flex items-center">
        <div className="grid md:grid-cols-3 max-w-fit max-h-fit">
          {/* Sol Alan: H1 */}
          <div className="col-span-1 flex items-start ml-12">
            <h1
              className={`font-inter font-bold text-[48px] leading-[58.09px] tracking-[1%] ${
                theme === "dark" ? "text-[#CBF281]" : "text-[#4832D3]"
              }`}
            >
              {lang === "en" ? skillsHeader.en : skillsHeader.tr}
            </h1>
          </div>

          {/* Sağ Alan: Resimler */}
          <div className="col-span-2 grid grid-cols-2 gap-12">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`flex items-center justify-center max-w-[290px] max-h-[120px] gap-7 mr-10 p-10`}
              >
                <img
                  src={skill.image}
                  alt={`Skill ${index + 1}`}
                  className="w-[120px] h-[120px] object-cover rounded-md"
                />
                <h4
                  className={`w-[69px] h-[36px] font-inter font-medium text-[24px] leading-[36px] ${
                    theme === "dark" ? "text-[#FFFFFF]" : "text-[#777777]"
                  }`}
                >
                  {skill.text}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
