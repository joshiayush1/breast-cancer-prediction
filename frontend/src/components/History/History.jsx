import React from "react";
import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";

const History = () => {
  return (
    <div className="historySection h-[100vh] md:h-[75vh] w-screen flex flex-col items-center">
      <h1 className="h-[10vh] md:h-[30vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#404040]">
        Patients History
      </h1>
      <p className="w-3/4 text-center text-xs md:text-md text-[#404040] opacity-50 font-semibold">
        Last few recorded patients.
      </p>
      <p className="w-3/4 text-center text-xs md:text-md text-[#404040] opacity-50 font-semibold">
        Only final output is shown because of confidentiality
      </p>
      <div className="w-full h-[100vh] flex flex-col md:flex-row justify-evenly items-center px-20">
        <div className="w-72 h-52 lg:w-80 lg:h-48 flex gap-6 flex-col justify-center items-center shadow-xl rounded-2xl hover:bg-slate-100 cursor-pointer">
          <div className="flex mr-24">
            <FaUserCircle className="w-14 h-14 text-[#072AC8]" />
            <div className="mt-2">
              <h4 className="text-md text-[#404040] font-semibold ml-3">
                Anonymous
              </h4>
              <p className="text-sm text-[#404040] opacity-50 font-semibold ml-3">
                Patient
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-sm font-semibold text-[#404040]">Diagnosis: Benign</h6>
            <h6 className="text-sm font-semibold text-[#404040]">Probability of Benign: 90%</h6>
            <h6 className="text-sm font-semibold text-[#404040]">Probability of Malignant: 10%</h6>
          </div>
        </div>
        <div className="w-72 h-52 lg:w-80 lg:h-48 flex gap-6 flex-col justify-center items-center shadow-xl rounded-2xl hover:bg-slate-100 cursor-pointer">
          <div className="flex mr-24">
            <FaUserCircle className="w-14 h-14 text-[#072AC8]" />
            <div className="mt-2">
              <h4 className="text-md text-[#404040] font-semibold ml-3">
                Anonymous
              </h4>
              <p className="text-sm text-[#404040] opacity-50 font-semibold ml-3">
                Patient
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-sm font-semibold text-[#404040]">Diagnosis: Benign</h6>
            <h6 className="text-sm font-semibold text-[#404040]">Probability of Benign: 90%</h6>
            <h6 className="text-sm font-semibold text-[#404040]">Probability of Malignant: 10%</h6>
          </div>
        </div>
        <div className="w-72 h-52 lg:w-80 lg:h-48 flex gap-6 flex-col justify-center items-center shadow-xl rounded-2xl hover:bg-slate-100 cursor-pointer">
          <div className="flex mr-24">
            <FaUserCircle className="w-14 h-14 text-[#072AC8]" />
            <div className="mt-2">
              <h4 className="text-md text-[#404040] font-semibold ml-3">
                Anonymous
              </h4>
              <p className="text-sm text-[#404040] opacity-50 font-semibold ml-3">
                Patient
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-sm font-semibold text-[#404040]">Diagnosis: Benign</h6>
            <h6 className="text-sm font-semibold text-[#404040]">Probability of Benign: 90%</h6>
            <h6 className="text-sm font-semibold text-[#404040]">Probability of Malignant: 10%</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
