import React from "react";
import { girisData } from "../api/data";

function Skills() {
  const leftSkills = girisData.skills.slice(0, 3);
  const rightSkills = girisData.skills.slice(3);

  return (
    <div className="h-screen bg-white flex justify-center items-center">
      {/* İçerik Alanı */}
      <div className="w-full max-w-[960px] flex flex-col justify-start pl-12">
        {/* Başlık */}
        <h1 className=" font-inter font-bold text-[48px] leading-[58.09px] tracking-[1%] text-[#4832D3] flex">
          Skills
        </h1>

        {/* İkonların Bulunduğu Konteyner */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          {/* Sol Sütun */}
          <div className="flex flex-col  md:w-1/2">
            {leftSkills.map((skill, index) => (
              <div
                key={index}
                className=" flex items-center justify-center  mx-auto gap-[24px]"
              >
                <img
                  src={skill.image}
                  alt={`Skill ${index + 1}`}
                  className="w-[290px] h-[210px] "
                />
              </div>
            ))}
          </div>

          {/* Sağ Sütun */}
          <div className="flex flex-col  md:w-1/2">
            {rightSkills.map((skill, index) => (
              <div
                key={index}
                className=" flex items-center justify-center gap-[24px] mx-auto"
              >
                <img
                  src={skill.image}
                  alt={`Skill ${index + 4}`}
                  className="w-[290px] h-[210px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
