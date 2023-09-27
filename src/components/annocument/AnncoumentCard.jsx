import React from "react";
import { useParams } from "react-router-dom";
import anncoumnetData from "./anncoumentData.json";
const AnncoumentCard = () => {
  let param = useParams();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      {anncoumnetData.map((anncoumnetdata, i) => {
        if (param.id === anncoumnetdata.id) {
          return (
            <>
              <div key={i} className=" w-[80%]">
                <div className="py-4">
                  <h1 className="font-bold text-rose-600 md:text-3xl py-5 text-2xl">
                    Anncoument:{" "}
                    <span
                      className="font-semibold text-slate-800 md:text-2xl text-xl
                      "
                    >
                      {anncoumnetdata.sideTitle}
                    </span>
                  </h1>

                  <h1 className="font-bold text-rose-600 md:text-2xl text-xl">
                    Detail of Anncoument:{" "}
                    <span className="font-normal text-slate-500 md:text-[18px] text-sm">
                      {anncoumnetdata.detail}
                    </span>
                  </h1>
                </div>

                {/* /////////////////--Images-Section--///////////////// */}
                <div className="border border-rose-600 p-1 my-5">
                  <img src={anncoumnetdata.url} alt="" className="w-full h-[80vh] " />
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default AnncoumentCard;
