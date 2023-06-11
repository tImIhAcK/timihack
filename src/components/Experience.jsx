import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiReact,
  SiPhp,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiLinux,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Experience = () => {
  const languages = [
    { icon: <AiFillHtml5 size={60} color="orange" />, name: "HTML5" },
    { icon: <DiCss3 size={60} color="navyblue" />, name: "CSS" },
    { icon: <SiPython size={60} color="blue" />, name: "Python" },
    { icon: <SiPhp size={60} color="purple" />, name: "PHP" },
    { icon: <SiJavascript size={60} color="yellow" />, name: "JavaScript" },
  ];
  const frameworks = [
    { icon: <SiDjango size={60} color="forestgreen" />, name: "Django" },
    { icon: <SiFlask size={60} color="gray" />, name: "Flask" },
    { icon: <SiFastapi size={60} color="darkcyan" />, name: "FastAPI" },
    { icon: <SiTensorflow size={60} color="firebrick" />, name: "Tensorflow" },
    { icon: <SiPytorch size={60} color="crimson" />, name: "Pytorch" },
    {
      icon: <SiScikitlearn size={60} color="midnightblue" />,
      name: "Sci-kit Learn",
    },
    { icon: <SiReact size={60} color="royalblue" />, name: "React" },
    {
      icon: <SiTailwindcss size={60} color="dodgerblue" />,
      name: "TailwindCSS",
    },
    { icon: <FaBootstrap size={60} color="blueviolet" />, name: "Bootstrap" },
  ];
  const tools = [
    { icon: <SiGit size={60} color="darkred" />, name: "Git" },
    { icon: <SiGithub size={60} color="darkslategray" />, name: "GitHub" },
    { icon: <SiLinux size={60} color="maroon" />, name: "Linux" },
    { icon: <SiMysql size={60} color="mediumturquoise" />, name: "MySQL" },
    { icon: <SiPostgresql size={60} color="slateblue" />, name: "Postgresql" },
    { icon: <SiMongodb size={60} color="lawngreen" />, name: "MongoDB" },
    { icon: <SiPostman size={60} color="tomato" />, name: "Postman" },
  ];
  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-8 text-white text-center">
        <h3 className="text-4xl font-bold">
          My{" "}
          <span className="text-[#0a63c3] border-b-2 border-b-white">
            Skills
          </span>
        </h3>
        <p className="text-gray-600 my-3 text-lg font-signature">
          My knowledge
        </p>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="text-gray-200 text-2xl">Languages</h1>
            <div className="flex flex-wrap items-center justify-center my-4 px-7 gap-12">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="border-2 border-[#0a63c3] relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-3 rounded-xl"
                >
                  <div className="w-32 h-32 flex items-center justify-center rounded-full">
                    {language.icon}
                  </div>
                  <p className="text-white mt-3 text-lg text-center">
                    {language.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="text-gray-200 text-2xl">Frameworks/Libraries</h1>{" "}
            <div className="flex flex-wrap items-center justify-center my-4 px-7 gap-12">
              {frameworks.map((language, index) => (
                <div
                  key={index}
                  className="border-2 border-[#0a63c3] relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-3 rounded-xl"
                >
                  <div className="w-32 h-32 flex items-center justify-center rounded-full">
                    {language.icon}
                  </div>
                  <p className="text-white mt-3 text-lg text-center">
                    {language.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="text-gray-200 text-2xl">Tools</h1>
            <div className="flex flex-wrap items-center justify-center my-4 px-7 gap-12">
              {tools.map((language, index) => (
                <div
                  key={index}
                  className="border-2 border-[#0a63c3] relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-3 rounded-xl"
                >
                  <div className="w-32 h-32 flex items-center justify-center rounded-full">
                    {language.icon}
                  </div>
                  <p className="text-white mt-3 text-lg text-center">
                    {language.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
