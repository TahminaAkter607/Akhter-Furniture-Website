import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import TooltipButton from "../../components/TooltipButton";
const Hero = () => {
  return (
    <section
      className="h-screen px-2 relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className=" md:pt-48  pt-24 text-center space-y-6 md:w-1/2 mx-auto">
        <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug">
          Make Your Interior More minimaslistic & modern
        </h1>
        <p className="text-2xl font-normal lg:w-1/2 mx-auto ">
          Turn your room with panto into a lot more minimaslist amd modern with
          ease and speed
        </p>
        {/* search field */}
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2 bg-white/25 placeholder:text-white rounded-full border border-gray-300 focus:outline-none "
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-orange-500 rounded-full cursor-pointer ">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* bottom blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>

      {/* hover button for display tooltop box */}

      <div className="hidden xl:block absolute bottom-40 left-24">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-52 left-96">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-48 right-[620px]">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-48 right-20">
        <TooltipButton position="bottom" />
      </div>
    </section>
  );
};

export default Hero;
