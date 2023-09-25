import React from "react";
import deptDetail from "./deptDetail.json";
import { useParams } from "react-router-dom";

const DeptDetailCard = () => {
  
  let params = useParams();

  var imageStyle = {
    background:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("/images/csdept.jpg") no-repeat',
    backgroundSize: "cover",
    width: "100%",
    height: "300px",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="flex justify-center items-center" style={imageStyle}>
        <h1 className="md:text-5xl text-2xl text-white font-semibold">
          Department of 
        </h1>
      </div>
      <div className="flex gap-10 h-full flex-wrap justify-center py-10">
        {deptDetail.map((deptdetail, i) => {
          if (params.id === deptdetail.id) {
            return (
              <>
                <div
                  key={i}
                  className="w-[265px] h-[100%] bg-slate-50 border border-gray-200 
                  overflow-hidden rounded-lg shadow-lg shadow-slate-200 dark:border-gray-700"
                >
                  <img
                    className="rounded-t-lg w-[265px] h-[170px] bg-cover hover:scale-105 ease-in-out duration-200"
                    src={deptdetail.img}
                    alt=""
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                      {deptdetail.name}
                    </h5>

                    
                      <p className="border-b py-2 text-slate-600 border-slate-600 w-full">
                        <span className="font-semibold text-black">
                          Desig:
                        </span>
                        {deptdetail.desig}
                      </p>
                      <p className="border-b py-2 text-slate-600 border-slate-600 w-full">
                        <span className="font-semibold text-black">
                          Education
                        </span>{" "}
                        {deptdetail.edu}
                      </p>
                      <p className="border-b py-2 text-slate-600 border-slate-600 w-full">
                        <span className="font-semibold text-black">
                          Education:
                        </span>{" "}
                        {deptdetail.edu}
                      </p>
                      <p className="border-b py-2 text-slate-600 border-slate-600 w-full">
                        <span className="font-semibold text-black">
                          Dept:
                        </span>{" "}
                        {deptdetail.depart}
                      </p>
                    
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default DeptDetailCard;
