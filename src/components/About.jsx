import React from "react";
import aboutImage from "../assets/images/heroImage.png";

const About = () => {
  const info = [
    {
      id: 1,
      count: "08",
      desc: "Years Experience",
    },
    {
      id: 2,
      count: "18",
      desc: "Projects Completed",
    },
    {
      id: 3,
      count: "03",
      desc: "Companies Work",
    },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-bold">
          About{" "}
          <span className="text-[#0a63c3] border-b-2 border-b-white">Me</span>
        </h3>
        <p className="text-gray-600 my-3 text-lg font-signature">
          My Introduction
        </p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="my-3 w-11/12 mx-auto">
              <p className="text-justify leading-10">
                I am an expert in Software Development and have a deep
                understanding of various technologies. I possess strong skills
                in programming languages such as Python (Django, Flask,
                FastAPI), JavaScript (ReactJS), and PHP, along with proficiency
                in working with databases like Postgres, MySQL, and MongoDB.
                Additionally, I specialize in Artificial Intelligence,
                particularly in Machine Learning, Deep Learning (computer
                vision).
              </p>
              <div className="flex justify-center md:justify-start mt-10 items-center gap-7">
                {info.map(({ id, count, desc }) => (
                  <div key={id}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {count}
                      <span className="text-[#0a63c3]">+</span>
                    </h3>
                    <span className="md:text-base text-sm">{desc}</span>
                  </div>
                ))}
              </div>
              <a href="/resume.pdf" download rel="noreferrer">
                <button className="mt-10 btn-primary">Download Resume</button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-7 md:mt-0">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImage}
                alt="/"
                className="w-full object-cover bg-[#0a63c3] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
