import React from "react";
import Clips from "./utils/Clips";
import CarouselComponent from "./carousel/CarouselComponent";

const Hero = ({ heroapi: { title, subtitle, btntext, img, videos } }) => {
  return (
    <div className="relative h-auto w-auto flex flex-col items-center">
      <div className="w-full h-[11vh] bg-zinc-900"></div>
      <div className="w-[70%] h-[550px] mt-[30px] rounded-md">
        <CarouselComponent />
      </div>
      <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
        <div className="grid items-center justify-items-center mt-28 md:mt-24">
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-700">
            {title}
          </h1>
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-700">
            {subtitle}
          </h1>
          <button class="relative inline-flex items-center my-5 justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {btntext}
            </span>
          </button>
          <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
            {videos?.map((val, i) => (
              <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={img}
            alt="hero-img/img"
            className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] cursor-pointer object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
