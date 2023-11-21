import React from "react";
import { motion } from "framer-motion";
const YTVideo = () => {


  return (
    <div className="h-full w-full flex md:justify-between items-center flex-col gap-y-5 mt-[70px] md:flex-row">
      <motion.div
        whileInView={{ x: [-100, 0] }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-[500px] md:ml-9 w-[300px]">
          <h2
            className="md:text-3xl text-2xl font-bold 
        bg-gradient-to-r from-rose-700 to-rose-200 bg-clip-text text-transparent"
          >
            College Virtual Tour
          </h2>
          <p className="text-gray-600 mt-4 text-[12px] md:text-[16px]">
            Step into the world of Govt Muncipal Graduate College, where excellence meets
            opportunity. Our virtual tour invites you to explore our vibrant
            campus and cutting-edge facilities from the comfort of your screen.
            Nestled in the heart of Faisalabad, our campus boasts lush gardens
            and state-of-the-art amenities. Dive into our modern laboratories,
            well-equipped libraries, and collaborative spaces designed to nurture
            innovation. Experience the warmth of our community as you virtually
            stroll through classrooms and lecture halls. Our dedicated faculty is
            committed to your growth, offering guidance and expertise to shape
            your academic journey.
          </p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [100, 0] }}
        transition={{ duration: 1 }}>
        <div className="rounded overflow-hidden md:mr-9  shadow-lg">
          <iframe
            width="560"
            height="380"
            src="https://www.youtube.com/embed/oMQIgZPf5Ng?si=GnACWA7GBk4REomA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[300px] md:w-[550px] "
          ></iframe>
          {/* <ReactPlayer url="https://youtu.be/oMQIgZPf5Ng?si=COeN44aRPi7-c7oo" /> */}
        </div>
      </motion.div>


    </div>
  );
};

export default YTVideo;
