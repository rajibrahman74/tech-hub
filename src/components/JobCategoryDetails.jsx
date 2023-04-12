import React from "react";

const JobCategoryDetails = ({ data }) => {
  const { category_logo, category_name, jobs_available } = data;
  return (
    <div className="liner-gradient h-[230px] w-[270px] rounded-lg py-10 pl-10 flex flex-col gap-8">
      <style>
        {`.liner-gradient {
          background: linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%);
        }`}
      </style>
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