import React from "react";
import { SiteGlobalContext } from "../context/SiteGlobalProvider";
import { projectData } from "../api/data";
import { projectsHeader } from "../api/data";
import { useContext } from "react";
import darkbg from "../img/backgrounds/projects-bgdark.png";
import bg from "../img/backgrounds/projects-bg.png";

function Projects() {
  const { theme, lang } = useContext(SiteGlobalContext);

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-6"
      style={{
        backgroundImage: `url(${theme === "dark" ? darkbg : bg})`,
      }}
    >
      {/* Sayfa Başlığı */}
      <h1 className="text-4xl font-bold ml-[360px]   mb-8 text-[#4338CA]">
        {lang === "tr" ? projectsHeader.tr : projectsHeader.en}
      </h1>

      {/* Proje Kartları */}
      <div className="flex flex-col items-center gap-8">
        {projectData.map((project, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-white w-full md:w-[960px] dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden"
          >
            {/* Proje Resmi */}
            <div className="w-full md:w-1/3">
              <img
                src={project.image}
                alt={project.header}
                className="w-full h-full object-cover  "
              />
            </div>

            {/* Proje Detayları */}
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold mb-4 text-[#4338CA]">
                {project.header}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {lang === "tr"
                  ? project.description.tr
                  : project.description.en}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.buttons.map((button, i) => (
                  <button
                    key={i}
                    className="bg-[#4731D3] text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-violet-600 transition dark:bg-violet-400 dark:hover:bg-violet-500"
                  >
                    {button}
                  </button>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-[#120B39] hover:underline text-sm"
                  >
                    {lang === "tr" ? link.tr : link.en}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
