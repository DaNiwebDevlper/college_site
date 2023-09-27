import React from "react";
import { Link } from "react-router-dom";
import galleryData from "../gallery/galleryData.json";
import anncoumentData from "./anncoumentData.json";
const SideBar = () => {
  return (
    <div
      className="container w-[250px]  border hover:border-rose-600 
    mt-5 ml-2 cursor-pointer rounded-lg  
    bg-slate-100 hover:overflow-auto overflow-hidden h-[80vh] transition md:block hidden "
    >
      <div className="latest-event">
        <h1
          className="text-xl text-center font-semibold bg-slate-100 border-b border-black/30 py-2 text-rose-600"
        >
          Anncouments
        </h1>
        <div className="">
          {anncoumentData.map((anncoumentdata, k) => {
            // const dt = props.detail;
            // const a = dt.slice(0, 200);
            return (
              <>
                <Link to={"/gallery/" + anncoumentdata.id} className="w-full">
                  <p className="text-lg font-semibold py-2 px-3 border-b
                   border-black/30 hover:border-rose-500 hover:translate-x-1 transition-all">
                    {anncoumentdata.sideTitle}
                  </p>
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
