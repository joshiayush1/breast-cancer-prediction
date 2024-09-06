import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import {
  FaLaptopCode,
  FaPersonCircleQuestion,
  FaUserLock,
} from "react-icons/fa6";

const About = () => {
  return (
    <div className="aboutSection h-[100vh] md:h-[75vh] w-screen flex flex-col items-center">
      <h1 className="h-[10vh] md:h-[30vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#404040]">
        About BreastCare
      </h1>
      <p className="w-3/4 text-center text-xs md:text-md text-[#404040] opacity-50 font-semibold">
        BreastCare predicts early cancer detection through advanced AI
        technology, providing accurate and timely predictions to improve patient
        outcomes and support the fight against cancer
      </p>
      <div className="boxes w-full h-[100vh] flex flex-col md:flex-row justify-evenly items-center px-20">
        <div className="w-40 h-40 lg:w-56 lg:h-56 flex gap-6 flex-col justify-center items-center shadow-xl rounded-2xl hover:bg-slate-100 cursor-pointer">
          <FaLaptopCode className="w-20 h-20 text-[#072AC8]" />
          <h4 className="text-sm text-[#404040] font-semibold">
            What is BreastCare ?
          </h4>
        </div>
        <div className="w-40 h-40 lg:w-56 lg:h-56 flex gap-6 flex-col justify-center items-center shadow-xl rounded-2xl hover:opacity-90 bg-[#072AC8] text-white cursor-pointer">
          <FaPersonCircleQuestion className="w-20 h-20 text-white" />
          <h4 className="text-sm text-white font-semibold">
            Who is it for ?
          </h4>
        </div>
        <div className="w-40 h-40 lg:w-56 lg:h-56 flex gap-6 flex-col justify-center items-center shadow-xl rounded-2xl hover:bg-slate-100 cursor-pointer">
          <FaQuestionCircle className="w-20 h-20 text-[#072AC8]" />
          <h4 className="text-sm text-[#404040] font-semibold">
            Why BreastCare ?
          </h4>
        </div>
        <div className="w-40 h-40 lg:w-56 lg:h-56 flex gap-6 flex-col justify-center items-center shadow-xl rounded-2xl hover:bg-slate-100 cursor-pointer">
          <FaUserLock className="w-20 h-20 text-[#072AC8]" />
          <h4 className="text-sm text-[#404040] font-semibold">
          Data Privacy ?
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
