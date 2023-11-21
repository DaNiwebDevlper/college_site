import React from "react";
import galleryData from "./galleryData.json";
import { Link } from "react-router-dom";
// import { BsFillCalendarDateFill } from "react-icons/fa";
function GalleryCard() {
  return (
    <div className="w-[90%] mx-2">
      {galleryData.map((data, index) => {
        const dt = data.detail;
        const a = dt.slice(0, 200);
        return (
          <>
            <div
              key={index}
              className="flex flex-col bg-gray-100 rounded-md hover:border-rose-700 
          border cursor-pointer my-5 md:flex-row"
            >
              <div className="h-full md:w-[300px] overflow-hidden">
                <Link to={"/gallery/" + data.id}>
                <img
                  src={data.imgSrc[0]}
                  alt={data.title}
                  className="h-[200px] rounded-tl-md md:rounded-tr-none 
          rounded-tr-md md:rounded-bl-md object-cover w-full hover:scale-110 duration-200"
                />
                </Link>
              </div>
              <div className="p-5 grid gap-y-4 ">
                <div className="">
                  <h1 className="inline-flex items-center text-xl font-semibold">
                    {data.title}
                  </h1>
                  <p className="mt-3 text-sm text-gray-600 md:w-[800px]">
                    {a + "..."}
                  </p>
                </div>

                <div className="w-full flex justify-between">
                  <Link to={"/gallery/" + data.id}>
                    <button className="text-rose-600 hover:underline font-semibold">
                      Read more &rarr;
                    </button>
                  </Link>
                  <div className="flex gap-2">
                  <svg
                        className="w-5 h-5 text-rose-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                      </svg>
                    <p>
                      {" "}
                      
                      {data.date}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default GalleryCard;
