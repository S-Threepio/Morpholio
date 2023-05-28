import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BasicButtons = () => {
  const handleClick = (url) => {
    console.log("myurl" + url);
  };

  return (
    <div className="flex flex-row gap-4 my-6 text-base font-semibold md:gap-2 md:text-md">
      <Link
        to="/resume"
        className="px-12  py-0.5  bg-white transition duration-100 ease-out hover:scale-105 hover:bg-[#F4ECE6] text-gray-800 border border-gray-400 rounded-full shadow"
      >
        Resume
      </Link>
      <Link
        to="/projects"
        className="px-12  py-0.5  bg-white transition duration-100 ease-out hover:scale-105 hover:bg-[#F4ECE6] text-gray-800 border border-gray-400 rounded-full shadow"
      >
        Projects
      </Link>
    </div>
  );
};

export default BasicButtons;
