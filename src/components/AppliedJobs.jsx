import React from "react";
import bgOne from "../assets/All Images/Vector.png";
import bgTwo from "../assets/All Images/Vector-1.png";

const AppliedJobs = () => {
  return (
    <section>
      <style>
        {`.liner-gradient {
          background: linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%);
        }`}
      </style>
      <div className="jobDetails h-[298px] flex justify-center items-center liner-gradient">
        <img
          className="absolute top-0 right-0 bg-no-repeat"
          src={bgTwo}
          alt=""
        />
        <h1 className="text-[#1A1919] text-3xl font-extrabold">Applied Jobs</h1>
        <img className="absolute left-0 top-[151px]" src={bgOne} alt="" />
      </div>
      {/* Pass the dynamic value here */}
    </section>
  );
};

export default AppliedJobs;