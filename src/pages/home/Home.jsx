// src/components/LandingPage.js
import React from "react";
import YTVideo from "../../components/YTVideo";
import "/src/styles/common.css";
import "/src/index.css";
import PrincipalMessage from "../../components/PrincipalMessage";
import CardDefault from "../../components/CardDefault"
import Slider from "../../components/Slider";
import testimonials from "/src/data/testimonials.json";
import { Link } from "react-router-dom";
import Annocument from "../annocument/Annocument";
import { motion } from "framer-motion";

const Home = () => {
  var imageStyle = {
    background:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("/images/landing-img.jpg") no-repeat',
    backgroundSize: "cover",
    width: "100wh",
    height: "87vh",
    backgroundPosition: "center",

    // Adjust the height as needed
  };
  return (
    <>
      {/* ////////////////////////---Landing-Page---///////////////////////// */}
      <div
        className="bg-cover bg-center md:h-[86vh]  w-full justify-center flex items-center relative"
        style={imageStyle}
      >

        <motion.div
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 1 }}
          >
          <div className="text-slate-200 text-center p-4">
            <h1 className="md:text-3xl text-2xl font-semibold">
              Unlock Your Future at
              <span className="text-rose-700"> GMGC</span> Where Knowledge Meets
              Adventure{" "}
            </h1>
            <p className="md:text-xl text-[14px]  mt-4 text-slate-300">
              Your Journey Starts Here
              <span className="text-slate-200 font-bold">
                {" "}
                Govt Muncipal Graduate College FSD
              </span>
            </p>
            <Link>
              <button
                type="button"
                className=" mt-9 inline-flex items-center rounded-full bg-rose-800 px-5 py-3 md:text-lg font-semibold text-white hover:bg-rose-600"
              >
                Annoucement &rarr;
              </button>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* ///////////////---Annocument Page---///////////////////// */}
      <Annocument />

      {/* ///////////////---YouTube Video Virtual College View---///////////////////// */}
      <YTVideo />

      {/* ////////////////////---Principal--Message----///////////////////////////// */}
      <PrincipalMessage />

      {/* ////////////////////////////---Card-Slider---////////////////////// */}
      <main className={`md:flex md:min-h-screen min-h-[75vh] flex-col my-9`}>
        <div className="w-full h-[80px] shadow-lg bg-gradient-to-r my-5 mb-2 from-rose-900 via-rose-600 to-rose-900 flex items-center justify-center">
          <h1 className="md:text-3xl text-2xl font-semibold text-center">
            Previos Principals
          </h1>
        </div>
        {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
        <div className="px-9">
          <Slider options={{ align: "center" }}>
            {testimonials.map((testimonial, i) => (
              // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
              // for mobile devices we use 90% width
              <div key={i} className="flex-[0_0_90%] md:flex-[0_1_50%] pt-7 md:ml-0 ml-[80px] md:mt-9">
                <CardDefault {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </>
  );
};

export default Home;
