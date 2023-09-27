import React from "react";
import ImageSlider from "./ImageSlider";
import SideBar from "./SideBar";

const Annocument = () => {
  return (
    <>
      <div className=" mt-[-20px]">
        <div className="w-full h-[80px] shadow-lg bg-gradient-to-r my-5 mb-2 from-rose-900 via-rose-600 to-rose-900 flex items-center justify-center">
          <h1 className="md:text-3xl text-2xl font-semibold text-center text-white/90">
            Latest-annocuments
          </h1>
        </div>
        <div className="flex justify-evenly ">
          <ImageSlider />
        </div>
      </div>
    </>
  );
};

export default Annocument;
