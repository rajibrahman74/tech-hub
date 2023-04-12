import React from "react";
import Location from "../assets/Icons/Location Icon.png";
import Salary from "../assets/Icons/Frame.png";

const AppliedJobsDetails = ({ job }) => {
  console.log(job);
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    location,
  } = job;
  return (
    <div className="flex flex-col mb-6">
      <div className="relative max-w-[100%] h-[300px] border border-1 border-gray-300 py-[30px] pl-[30px] rounded flex items-center">
        <div className="w-[240px] h-[240px] bg-[#F4F4F4] flex justify-center items-center">
          <img className="w-[145px] h-[49px]" src={company_logo} alt="" />
        </div>
        <div className="flex flex-col gap-2 ml-8">
          <h3 className="text-[#474747] font-bold text-2xl mb-2">
            {job_title}
          </h3>
          <p className="text-[#757575] font-semibold text-2xl mb-4">
            {company_name}
          </p>
          <span className="flex items-center gap-4 mb-6">
            <div className="w-[109px] h-[48px] rounded border border-1 border-[#7e90fe] text-[#7e90fe] flex justify-center items-center font-bold">
              {remote_or_onsite}
            </div>
            <div className="w-[109px] h-[48px] rounded border border-1 border-[#7e90fe] text-[#7e90fe] flex justify-center items-center font-bold">
              {fulltime_or_parttime}
            </div>
          </span>
          <div className="flex items-center gap-6">
            <span className="flex items-center">
              <img className="w-6 h-6" src={Location} alt="" />
              <p className="text-xl">{location}</p>
            </span>

            <span className="flex items-center">
              <img className="w-6 h-6" src={Salary} alt="" />
              <p className="text-xl">Salary: {salary}</p>
            </span>
          </div>
        </div>
        <button className="absolute right-0 mr-[47px] px-4 py-2.5 flex justify-center items-center font-bold text-base rounded-[4px] text-white bg-gradient-to-r from-blue-400 to-purple-600 ">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppliedJobsDetails;