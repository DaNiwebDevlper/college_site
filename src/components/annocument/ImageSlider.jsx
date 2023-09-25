import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1695178234643-9656316a0e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url: "https://www.gmdc.edu.pk/admin-panel/images/slider1.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1695189353156-ed6d1c612bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1694804251946-c0bb0234e547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1694823914039-9090e3dedfae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1832&q=80",
    },
  ];
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
  return (
    <>
      <div className="w-[800px] h-[70vh] max-w-[1400px] relative duration-500  group">
        <div
          style={{ backgroundImage: `url(${slides[currIndex].url})` }}
          className="w-full h-full bg-center bg-cover rounded-2xl flex items-end overflow-hidden"
        >
          <div className=" p-5 font-semibold text-white bg-black/40 text-center">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              sapiente unde vero, cupiditate ipsa eligendi pariatur aspernatur,
              quisquam at magni nihil consequuntur veritatis adipisci quidem
              molestiae debitis sunt distinctio architecto?
            </h1>
          </div>
          {/* /////////--Left-Icon--////////// */}
          <div
            onClick={prevSlide}
            className="hidden group-hover:block duration-500  absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactLeft />
          </div>
          {/* /////////--Riight-Icon--////////// */}
          <div
            onClick={nextSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
