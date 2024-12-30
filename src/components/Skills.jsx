import React from "react";
import { girisData } from "../api/data";

function Skills() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* İçerik Alanı */}
      <div className="flex items-center ">
        <div className="grid md:grid-cols-3 max-w-fit max-h-fit ">
          {/* Sol Alan: H1 */}
          <div className="col-span-1 flex items-start ml-12">
            <h1 className="font-inter font-bold text-[48px] leading-[58.09px] tracking-[1%] text-[#4832D3]">
              Skills
            </h1>
          </div>

          {/* Sağ Alan: Resimler */}
          <div className="col-span-2 grid grid-cols-2 gap-12">
            {girisData.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center max-w-[290px]  max-h-[120px] gap-7 mr-10 p-10 "
              >
                <img
                  src={skill.image}
                  alt={`Skill ${index + 1}`}
                  className="w-[120px] h-[120px] object-cover rounded-md "
                />
                <h4 className="w-[69px] h-[36px] font-inter font-medium text-[24px] leading-[36px] text-[#777777]">
                  {skill.name}
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
