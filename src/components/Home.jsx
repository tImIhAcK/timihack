import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import heroImage from "../assets/images/heroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-5/6 h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-8xl font-bold text-white">
            I am a Professional Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 6 years of experience building and develping software.
            Currently, I love to work on web application using technologies like
            React, TailwindCSS, NextJS
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Porfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowRightAlt size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
