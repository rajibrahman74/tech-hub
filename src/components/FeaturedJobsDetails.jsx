import React from "react";
import dollarIcon from "../../public/assets/Icons/Frame.png";
import locationIcon from "../../public/assets/Icons/Frame-4.png";
import { Link } from "react-router-dom";

const FeaturedJobsDetails = ({ fj, handleViewDetails }) => {
  const {
    id,
    company_logo,
    company_name,
    job_title,
    location,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
  } = fj;
  return (
    <div className="w-[100%] md:w-[612px] rounded-lg border border-gray-300 mx-auto py-10 pl-10 relative">
      <img className="w-40 mb-8" src={company_logo} alt="" />
      <h3 className="text-[#474747] text-2xl font-bold pb-2">{job_title}</h3>
      <p className="text-[#757575] font-semibold text-xl">{company_name}</p>
      <div className="flex justify-start items-center gap-4 pt-4 pb-4">
        <span className="px-2.5 py-1.5 rounded text-[#7E90FE] font-bold border border-[#7E90FE]">
          {remote_or_onsite}
        </span>
        <span className="px-2.5 py-1.5 rounded text-[#7E90FE] font-bold border border-[#7E90FE]">
          {fulltime_or_parttime}
        </span>
      </div>
      <div className="flex gap-6 items-center pb-8">
        <span className="flex items-end gap-2">
          <img src={locationIcon} alt="" />
          <p className="text-[#757575] text-lg font-semibold">{location}</p>
        </span>
        <span className="flex items-end gap-2">
          <img src={dollarIcon} alt="" />
          <p className="text-[#757575] text-lg font-semibold">
            Salary: {salary}
          </p>
        </span>
      </div>
      <Link to={`/jobdetails/${id}`}>
        <button
          onClick={() => {
            handleViewDetails(fj);
          }}
          className="px-4 py-2.5 flex justify-center items-center font-bold text-base rounded-[4px] text-white bg-gradient-to-r from-blue-400 to-purple-600 absolute bottom-0 mb-5"
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FeaturedJobsDetails;