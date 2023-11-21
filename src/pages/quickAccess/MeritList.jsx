import React from "react";
import meritList from "./meritList.json";
const MeritList = () => {
  return (
    <div className="bg-black/10 w-full flex flex-col items-center">
      {/* ////////////--------Heading---------///////////// */}
      <div className="w-full h-[80px] shadow-lg bg-gradient-to-r mb-2 from-rose-900 via-rose-600 to-rose-900 flex items-center justify-center">
        <h1 className="md:text-4xl text-2xl font-semibold text-center text-white/90">
          Merit List
        </h1>
      </div>
      {/* ////////////--------Description of table---------///////////// */}
      <div className="w-[80%] my-5">
        <h1 className="text-rose-700 text-2xl font-semibold">
          Merit List of BS Programs & Intermidate
        </h1>
        <p className="text-black/70 my-3">
          Here you can download and view the merit list of BS Programs and also
          Intermediate, to simply download and view the merit list click the "Download & View" button in table
        </p>
      </div>

      {/* ////////////--------TAble---------///////////// */}
      <table className="border border-rose-500 bg-white/30 mb-5 shadow-md 
      shadow-black/20 mt-9">
        <tr className="border-b border-rose-500 bg-rose-500 text-white/90">
          <th
            className="border-r border-rose-500 py-2 font-bold md:text-xl 
          uppercase md:min-w-[200px] min-w-[100px] text-center"
          >
            Title
          </th>

          <th className=" py-2 font-bold md:text-xl uppercase md:min-w-[200px] min-w-[80px] text-center border-r border-rose-500">
            Action
          </th>
          <th className=" py-2 font-bold md:text-xl uppercase md:min-w-[200px] min-w-[80px] text-center ">
            Date
          </th>
        </tr>
        {meritList.map((merit, i) => (
          <tr className="text-sm md:text-lg">
            <td
              className="border-r border-b border-rose-500 p-1 md:p-2 
            text-center max-w-[150px]  md:max-w-[400px] "
            >
              {merit.title}
            </td>
            <td
              className="border-r transition-all border-b border-rose-500 p-1 md:p-2 
            text-center max-w-[150px] md:max-w-[400px]"
            >
               <a
                                className="hover:underline text-green-700 "
                                href={merit.imgSrc}
                                target="_blank"
                            >
                                View
                            </a>
                            <a
                                className="hover:underline text-rose-700"
                                href={merit.imgSrc}
                                target="_blank"
                                download={merit.imgSrc}
                            >
                                /Download
                            </a>

            </td>
            <td
              className="border-r border-b border-rose-500 p-1 md:p-2 
            text-center max-w-[200px] md:max-w-[400px]"
            >
              {merit.date}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MeritList;
