import React from "react";

const CardDefault = ({imgSrc,title, doj,dor}) => {
  return (
    <div className="w-[265px]  h-[100%] bg-slate-50 border border-gray-200 overflow-hidden rounded-lg shadow-lg dark:border-gray-700">
      <img
        className="rounded-t-lg w-[265px] h-[170px] bg-cover hover:scale-105 ease-in-out duration-200"
        src={imgSrc}
        alt={title}
      />

      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 ">
          <p className="border-b py-1 border-slate-600 w-fit">
            <span className="font-semibold text-green-800 text-[18px]">Date of join: </span>
            {doj}</p>
            <p className="border-b py-1 border-slate-600 w-fit">
            <span className="font-semibold text-rose-800 ">
              Date of retire:{" "}
            </span>{" "}
            {dor}</p>
          
        </p>
      </div>
    </div>
  );
};

export default CardDefault;
