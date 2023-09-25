import React from "react";
import { Link } from "react-router-dom";
import galleryData from "../gallery/galleryData.json";
const SideBar = () => {
  return (
    <div
      className="container w-[250px]  border border-rose-600 
    mt-5 ml-2 cursor-pointer rounded-lg  
    bg-slate-100 hover:overflow-auto overflow-hidden h-[70vh] transition "
    >
      <div className="latest-event">
        <h1
          className="text-xl py-2 border-b border-rose-600 font-semibold
            bg-gradient-to-r  mb-2 from-rose-800 via-rose-500 to-rose-800 text-white text-center "
        >
          Latest Event
        </h1>
        <div className="w-[78%] mx-2">
          {galleryData.map((props, k) => {
            // const dt = props.detail;
            // const a = dt.slice(0, 200);
            return (
              <>
                <Link to={"/gallery/" + props.id}>
                  <p>{props.sideTitle}</p>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
