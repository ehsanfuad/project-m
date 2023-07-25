import React from "react";
const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="h-full bg-lime-600 transition-all ease-in-out text-lime-950 px-2"
        style={{ width: `${percentage}%` }}
      >{`${percentage}%`}</div>
    </div>
  );
};

export default ProgressBar;
