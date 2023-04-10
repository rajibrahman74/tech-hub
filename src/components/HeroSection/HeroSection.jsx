import React from "react";
import person from "../../assets/All Images/P3OLGJ1 copy 1.png";

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-[40px] mb-[130px] flex flex-col-reverse md:flex-row justify-center items-center gap-[70px] px-4">
      <div className="flex flex-col gap-[30px] md:w-1/2 md:pl-[30px] xs:text-center">
        <h1 className="text[#1A1919;] text-[45px] md:text-[70px] m-0 font-extrabold">
          One Step
          <br />
          Closer To Your
          <br />
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p className="text[#7E90FE;] text-[17px] m-0">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="w-[145px] h-[55px] flex justify-center items-center font-bold text-[17px] rounded-[8px] text-white bg-gradient-to-r from-blue-400 to-purple-600">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="max-w-full" src={person} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;