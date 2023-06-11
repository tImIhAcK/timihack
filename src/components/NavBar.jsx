import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div
      className={`w-full fixed left-0 top-0 z-[999] ${
        sticky ? "md:bg-gray-500 bg-gray-500 text-gray-900" : "text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="mx-7">
          <h4 className="text-4xl font-signature font-bold">
            ti<span className="text-[#0a63c3]">miha</span>ck
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0" : "bg-white"
          } md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-6 cursor-pointer capitalize text-gray-900 hover:text-[#0a63c3] hover:scale-105 duration-200"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className={`cursor-pointer z-[999] ${
            nav ? "text-gray-900" : "text-white"
          } md:hidden text-3xl m-5`}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <div
            className={`md:hidden w-2/3 h-screen px-7 py-2 bg-white absolute top-0 duration-300 ${
              nav ? "right-0" : "right-[-100%]"
            }`}
          >
            <ul className="flex flex-col justify-center items-center py-2 gap-10 h-full">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-900 hover:text-[#0a63c3]"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
