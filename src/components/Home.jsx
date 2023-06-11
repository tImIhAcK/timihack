import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaHandSparkles } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImage from "../assets/images/heroImage.png";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Backend Engineer", "AI Engineer"],
      startDelay: 200,
      typeSpeed: 300,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      name="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={heroImage} alt="my profile" className="md:w-2/3" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="flex justify-center md:justify-start font-signature text-[#0a63c3] md:text-6xl text-5xl">
              Hola{" "}
              <FaHandSparkles size={30} color={"yellow"} className="mx-2" />,
            </span>
            <br />
            My Name is <span>John Adeniran</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 my-4 font-bold text-gray-500">
            Software Developer
          </h4>
          <span ref={el} className="pt-4 text-3xl text-white"></span>
          <button className="group mt-8 btn-primary">
            Porfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineArrowRightAlt size={25} className="ml-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
