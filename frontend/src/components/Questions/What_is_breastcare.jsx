import React from "react";

const What_is_breastcare = () => {
  return (
    <div className="w-screen h-auto flex flex-col items-center px-5 md:px-20">
      <h1 className="h-[15vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#072AC8]">
        What is BreastCare ?
      </h1>
      <p className="w-full text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
      BreastCare is a cutting-edge platform designed to assist in the early
      detection of breast cancer using advanced machine learning technology.
      With BreastCare, users can input diagnostic data related to breast cancer,
      such as tumor size and cell characteristics, and receive a prediction on
      the likelihood of malignancy or benignity. 
      <br />
      <br />
      Our goal is to empower users
      with information that can help them make informed decisions about their
      health, emphasizing the importance of early detection and proactive care.
      BreastCare provides an intuitive, user-friendly interface to simplify the
      process of understanding and managing breast health, while also offering
      educational resources and support.
      <br />
      <br />
      At BreastCare, we blend healthcare
      expertise with modern technology to offer a valuable tool in the fight
      against breast cancer.
      </p>
    </div>
  );
};

export default What_is_breastcare;
