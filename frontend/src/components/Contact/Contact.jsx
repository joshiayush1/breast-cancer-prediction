import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="contactSection h-[80vh] md:h-[75vh] w-screen flex flex-col items-center">
      <h1 className="h-[10vh] md:h-[20vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#404040]"></h1>
      <div className="w-full h-[100vh] flex flex-col md:flex-row justify-evenly items-center bg-slate-100">
        <div className="w-1/2 h-full flex flex-col md:px-20">
          <h1 className="text-3xl font-semibold tracking-tighter text-[#072AC8] my-5">
            <a href="">BreastCare</a>
          </h1>
          <p className="text-[#404040] text-xs font-semibold">
            We’re here to help with any questions or concerns you might have
            about our cancer prediction model or our website. Feel free to reach
            out to us using the contact details below.
          </p>
          <p className="mt-5 text-[#404040] text-sm font-semibold ">
            Interested in exploring how BreastCare was built? Check out the
            source code on GitHub!{" "}
            <span className="text-[#072AC8] font-semibold text-sm hover:underline"><a href="https://github.com/joshiayush1/breast-cancer-prediction/tree/main">Tap here</a></span>
          </p>
        </div>
        <div className="w-1/2 h-full md:px-20">
          <h1 className="text-3xl font-medium tracking-tighter text-[#404040] my-5">
            Reach out here
          </h1>
          <span className="text-sm font-semibold text-[#404040] cursor-pointer hover:underline">
            Email : ayushjoshi207@gmail.com
          </span>
          <span className="flex mt-2">
            <FaLinkedin className="cursor-pointer text-blue-600 h-7 w-7" />
            <IoLogoGithub className="cursor-pointer h-7 w-7" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
