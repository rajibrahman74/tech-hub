import React from "react";
import Salary from "../assets/Icons/Frame.png";
import JobTitle from "../assets/Icons/Frame-1.png";
import Phone from "../assets/Icons/Frame-2.png";
import Email from "../assets/Icons/Frame-3.png";
import Address from "../assets/Icons/Frame-4.png";
import { Link } from "react-router-dom";

const JobDetailsData = ({ data }) => {
  console.log(data);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    address,
    contact_information: { phone, email },
  } = data;

  return (
    <div className="my-32 flex justify-center gap-6 md:flex-row flex-col items-center md:items-start max-w-7xl mx-auto px-4">
      <div className="flex flex-col gap-6 max-w-3/2">
        <p className="text-[#757575]">
          <span className="text-[#1A1919] font-bold">Job Description: </span>
          {job_description}
        </p>

        <p className="text-[#757575]">
          <span className="text-[#1A1919] font-bold">Job Responsibility: </span>
          {job_responsibility}
        </p>
        <span className="flex flex-col gap-4">
          <p className="text-[#1A1919] font-bold">Educational Requirements:</p>
          <p>{educational_requirements}</p>
        </span>

        <span className="flex flex-col gap-4">
          <p className="text-[#1A1919] font-bold">Experiences:</p>
          <p>{experiences}</p>
        </span>
      </div>
      <div className="w-3/1 max-w-sm mx-auto flex flex-col gap-6">
        <div className="liner-gradient w-[424px] h-[461px] bg-green-200 rounded-lg py-7 pl-7">
          <h3 className="text-[#1A1919] font-bold text-xl pb-6">Job Details</h3>
          <div className="w-[350px] liner-gradient h-[1.5px] mx-auto mb-6"></div>
          <span className="flex items-center gap-2">
            <img className="w-6" src={Salary} alt="" />
            <span className="text-[#474747] font-bold text-lg">Salary: </span>
            <span className="text-[#474747] text-lg">{salary} (Per Month)</span>
          </span>

          <span className="flex items-center gap-2 mt-4">
            <img className="w-6" src={JobTitle} alt="" />
            <span className="text-[#474747] font-bold text-lg">
              Job Title :
            </span>
            <span className="text-[#474747] text-lg">{job_title}</span>
          </span>
          <h3 className="text-[#1A1919] font-bold text-xl pb-6 mt-8">
            Contact Information
          </h3>
          <div className="w-[350px] liner-gradient h-[1.5px] mx-auto mb-6"></div>

          <span className="flex items-center gap-2">
            <img className="w-6" src={Phone} alt="" />
            <span className="text-[#474747] font-bold text-lg">Phone: </span>
            <span className="text-[#474747] text-lg">{phone}</span>
          </span>

          <span className="flex items-center gap-2 my-4">
            <img className="w-6" src={Email} alt="" />
            <span className="text-[#474747] font-bold text-lg">Email: </span>
            <span className="text-[#474747] text-lg">{email}</span>
          </span>

          <span className="flex items-start gap-2">
            <img className="w-6" src={Address} alt="" />
            <p>
              <span className="text-[#474747] font-bold text-lg">
                Address:{" "}
              </span>
              <span className="text-[#474747] text-lg">{address}</span>
            </p>
          </span>
        </div>
        <Link to="/appliedjobs">
          <button className="w-[425px] h-[65px] font-bold text-white rounded-lg bg-gradient-to-r from-blue-400 to-purple-600">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetailsData;