import React from "react";
import { Link } from "react-router-dom";
const DeptCard = (props) => {
  return (
    <div className="relative h-[350px] w-[250px] rounded-2xl overflow-hidden hover:scale-105 transition-all shadow-lg">
      <img
        src={props.imgSrc}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover bg-center "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white"> {props.title}</h1>
        <p className="mt-2 text-sm text-gray-300"></p>
        <Link to={"/department/" + props.id}>
          <button className="mt-2 inline-flex cursor-pointer 
          items-center text-sm font-semibold text-white hover:underline">
            View Profile &rarr;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeptCard;
