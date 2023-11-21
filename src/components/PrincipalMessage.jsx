import React from "react";
import { motion } from "framer-motion";
const PrincipalMessage = () => {
  return (
    <div>
      <div className="w-full h-[80px] shadow-lg bg-gradient-to-r my-5 mb-2 from-rose-900 via-rose-600 to-rose-900 flex items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-semibold text-center text-white/90">
          Principal's Message
        </h1>
      </div>
      
      <div className="flex md:justify-evenly py-9 justify-center items-center flex-col md:flex-row">
        <motion.div
          whileInView={{ x: [-100, 0] }}
          transition={{ duration: 1 }}>
          <div className="img-overlay">
            <img
              src="/images/principal.jpg"
              alt="principal-img"
              className="md:w-[450px] w-[350px] rounded-xl shadow-lg"
            />
            <div className="overlay text-center md:text-2xl text-lg  font-semibold">
              Muhammad Iqbal Chohan <br />
              2022-12-31
            </div>
            {/* <h2 className="text-center py-3 font-semibold text-xl">
              Muhammad Iqbal Chohan <br />
              2022-12-31
            </h2> */}
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 1 }}
          className="flex justify-center">

          <div className="md:w-[500px] w-[80%]">
            <div className="heading pt-3">
              <h2 className="mb-2 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Principal Message</h2>
            </div>

            <p className="text-slate-600 text-justify md:text-lg text-md ">
              For a system to flourish and thrive, every member of it should carry
              out their responsibilities sincerely. The progress and betterment of
              the college not only depends on the teacher but also on the
              students. It is a duty of student to work hard and focus on their
              studies to become better person and succeed in life. I have served
              as Professor before and by the grace of Allah Almighty I have been
              blessed with an opportunity to serve as a Principal in this
              prestigious college and I hope to leave better system behind me. As
              I have said before, along with staff and teachers the role of
              student play a massive role in the advancement of the college So, I
              urge our students to study and work hard for their dreams.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
