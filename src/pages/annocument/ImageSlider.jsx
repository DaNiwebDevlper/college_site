import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import slides from "./anncoumentData.json";
import { Link } from "react-router-dom";
const ImageSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const Detail = slides[currIndex].detail;
  const a = Detail.slice(0, 150);
  return (

    
    <>
      <div className="w-[90%] md:w-[77%] md:h-[80vh] h-[40vh] max-w-[1400px] relative duration-500 mt-5 group">
        <div
          style={{ backgroundImage: `url(${slides[currIndex].url})` }}
          className="w-full h-full bg-center bg-cover rounded-2xl flex items-end overflow-hidden duration-500 shadow-lg shadow-black/40"
        >
          <div className=" p-5 md:text-lg text-[10px] font-semibold text-white bg-black/40 text-center">
            <h1>
              {a+"..."}
              <Link to={"/anncoument/" + slides[currIndex].id} className="text-rose-500 underline"> Read More</Link>
            </h1>
          </div>
          {/* /////////--Left-Icon--////////// */}
          <div
            onClick={prevSlide}
            className="md:hidden block group-hover:block duration-500  absolute top-[40%] -translate-x-0 -translate-y-[-50%] font-bold left-3 md:text-3xl text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer"
          >
            <BsChevronCompactLeft width={40} />
          </div>
          {/* /////////--Riight-Icon--////////// */}
          <div
            onClick={nextSlide}
            className="md:hidden block  group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-3 md:text-3xl text-2xl font-bold rounded-full p-2 bg-black/40 text-white cursor-pointer"
          >
            <BsChevronCompactRight width={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
