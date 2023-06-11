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
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidePerView={1.2} // Set to 1 to show one slide at a time
            spaceBetween={20}
            breakpoints={{
              780: {
                slidesPerView: 2, // Show two slides side by side on screens larger than 780px
              },
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            effect="fade"
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
