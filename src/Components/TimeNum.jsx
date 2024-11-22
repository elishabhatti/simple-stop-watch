import React from "react";

const TimeNum = ({label, value}) => {
    const formatTime = (value) => (value < 10 ? `0${value}` : value);
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-blue-500 font-semibold uppercase">{label}</p>
        <h1 className=" text-[#696975] my-2 mx-2 border border-slate-100 bg-white py-6 px-6 rounded-md text-6xl">
          {formatTime(value)}
        </h1>
      </div>
    </div>
  );
};

export default TimeNum;
