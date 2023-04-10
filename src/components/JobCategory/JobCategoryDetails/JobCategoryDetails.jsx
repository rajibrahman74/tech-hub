import React from "react";

const JobCategoryDetails = ({ data }) => {
  const { category_logo, category_name, jobs_available } = data;
  return (
    <div className="h-[230px] w-[294px] bg-red-300 rounded-lg py-10 pl-10 flex flex-col gap-8 bg-gradient-to-r from-purple-100 to-blue-100">
      <img className="w-16 h-16" src={category_logo} alt="" />
      <span>
        <h3 className="text-[#474747;] text-xl font-extrabold">
          {category_name}
        </h3>
        <p className="text-[#A3A3A3] font-semibold mt-2">
          {jobs_available} jobs available
        </p>
      </span>
    </div>
  );
};

export default JobCategoryDetails;