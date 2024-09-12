import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import banner2 from "../../assets/banner2.png";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Home = () => {
  return (
    <section className="w-screen h-[84vh] flex flex-col md:flex-row">
      <div className="leftSide h-full w-full md:w-1/2 heroLeft flex flex-col justify-center px-5 md:px-20">
        <h1 className="text-2xl md:text-4xl tracking-tighter font-semibold text-stone-700 text-wrap leading-tight">
          {" "}
          <span className="text-[#072AC8]">Don’t let</span> breast cancer take
          away the motivation to achieve your dreams .
        </h1>
        <span className="text-2xl md:text-4xl tracking-tighter font-semibold text-stone-700  text-wrap leading-tight text-end">
          - Diana Cohen
        </span>
        <p className="mt-5 text-xs text-stone-700 opacity-50 font-bold">
          In the fight against breast cancer, your courage is your greatest
          weapon. Keep pushing forward, for each battle won brings you closer to
          healing.
        </p>
        <button className="bg-[#072AC8] hover:opacity-80 text-white h-12 w-60 rounded-lg flex justify-center items-center mt-10">
          Start Prediction <FaArrowRightLong className="ml-8 text-xl" />
        </button>
        <p className="mt-5 text-xs text-stone-700 font-bold">
          Want to learn how it works?{" "}
          <span className="text-[#072AC8] cursor-pointer hover:underline"><a href="">Tap here</a></span>
        </p>
      </div>
      <div className="rightSide h-full w-full md:w-1/2 heroRight flex items-center justify-center">
        <img
          src={banner2}
          alt="Banner"
          className="h-auto w-7/12 relative bg-auto rounded-full z-10 shadow-xl"
        />
        <div className="w-96 h-96 z-20 absolute">
        <div className="w-1/3 h-10 lg:w-7/12 lg:h-14 top-16 right-52 lg:top-0 lg:right-64 absolute rounded-lg shadow-lg flex items-center bg-white hover:cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <FaSearch className="w-6 h-6 ml-4 mr-4 text-[#072AC8]"/>
        <div>
          <h3 className="text-stone-700 text-xs lg:text-sm">Well trained tool </h3>
          <p className="hidden lg:block text-xs text-stone-700 opacity-50 font-semibold">Upto 97% accuracy</p>
        </div>
        </div>
        <div className="w-1/3 h-10 lg:w-7/12 lg:h-14 absolute bottom-36 left-56 lg:left-64 rounded-lg shadow-lg flex items-center bg-white hover:cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <div className="ml-6">
          <h3 className="text-stone-700 text-xs lg:text-sm">No Signup required</h3>
        </div>
        <FaCheck className="w-6 h-6 ml-6 text-[#072AC8]"/>
        </div>
        <div className="w-1/3 h-10 lg:w-7/12 lg:h-14 absolute bottom-20 right-56 lg:bottom-10 lg:right-64 rounded-lg shadow-lg flex items-center bg-white hover:cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <FaLock className="w-6 h-6 ml-4 mr-4 text-[#072AC8]"/>        
        <div>
          <h3 className="text-stone-700 text-xs lg:text-sm">Data privacy</h3>
          <p className="hidden lg:block text-xs text-stone-700 opacity-50 font-semibold">Confidentiality ensurity </p>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
