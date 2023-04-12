import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import FeaturedJobsDetails from "./FeaturedJobsDetails";

const FeaturedJobs = () => {
  const [showAll, setShowAll] = useState(false);
  const [numToShow, setNumToShow] = useState(4);

  const featuresDatas = useLoaderData();

  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/jobdetails/${id}`);
  };

  const handleShowBtn = () => {
    setShowAll(true);
    setNumToShow(featuresDatas.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-center text-4xl text-gray-900 font-bold">
        Featured Jobs
      </h2>
      <p className="text-[#757575] mt-[16px] text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 place-content-center">
        {featuresDatas.slice(0, numToShow).map((fj) => (
          <FeaturedJobsDetails
            key={fj.id}
            fj={fj}
            handleViewDetails={handleViewDetails}
          />
        ))}
      </div>
      {!showAll && (
        <span className="flex justify-center items-center mt-10">
          <button
            className="w-[145px] h-[55px] flex justify-center items-center font-bold text-[17px] rounded-[8px] text-white bg-gradient-to-r from-blue-400 to-purple-600"
            onClick={handleShowBtn}
          >
            See All Jobs
          </button>
        </span>
      )}
    </section>
  );
};

export default FeaturedJobs;