import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import portfolio1 from "../assets/portfolio/portfolio1.png";
import portfolio2 from "../assets/portfolio/portfolio2.png";
import portfolio3 from "../assets/portfolio/portfolio3.png";
import portfolio4 from "../assets/portfolio/portfolio4.png";
import portfolio5 from "../assets/portfolio/portfolio5.png";

const portfolios = [
  {
    id: 1,
    src: portfolio1,
    title: "Job Search Web",
    github: "/",
    liveDemo: "/",
  },
  { id: 2, src: portfolio2, title: "Project 2", github: "/", liveDemo: "/" },
  { id: 3, src: portfolio3, title: "Project 3", github: "/", liveDemo: "/" },
  { id: 4, src: portfolio4, title: "Project 4", github: "/", liveDemo: "/" },
  { id: 5, src: portfolio5, title: "Project 5", github: "/", liveDemo: "/" },
  {
    id: 6,
    src: portfolio1,
    title: "Job Search Web",
    github: "/",
    liveDemo: "/",
  },
];

const Portfolio = () => {
  return (
    <section id="project" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-bold">
          My{" "}
          <span className="text-[#0a63c3] border-b-2 border-b-white">
            Projects
          </span>
        </h3>
        <p className="text-gray-600 my-3 text-lg font-signature">
          My awesome work
        </p>
      </div>
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={500}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            loop={true}
            touchRatio={1.5}
            modules={[EffectFade, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={true}
          >
            {portfolios.map((portfolio) => (
              <SwiperSlide key={portfolio.id}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={portfolio.src} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{portfolio.title}</h3>
                  <div className="flex gap-3">
                    <a
                      href={portfolio.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a63c3] bg-gray-900 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={portfolio.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a63c3] bg-gray-900 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
