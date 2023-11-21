import React from "react";
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";
const Annocument = () => {
  return (
    <>
      <div className="w-full h-[80px] shadow-lg bg-gradient-to-r  mb-5 from-rose-900 via-rose-600 to-rose-900 flex items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-semibold text-center text-white/90">
          Latest-annocuments
        </h1>
      </div>
      <motion.div
        whileInView={{ y: [100, 0] }}
        transition={{ duration: .5, ease: "easeInOut" }}
      >
        <div>

          <div className="flex justify-evenly ">
            <ImageSlider />
          </div>
        </div>
      </motion.div>

    </>
  );
};

export default Annocument;
