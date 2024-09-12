import React from "react";

const Why_breastcare = () => {
  return (
    <div className="w-screen h-auto flex flex-col items-center px-5 md:px-20">
      <h1 className="h-[15vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#072AC8]">
        Why BreastCare ?
      </h1>
      <p className="w-full text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
        BreastCare stands out as a reliable and innovative platform dedicated to
        supporting early breast cancer detection through machine learning.
        <br />
        <br />
        Here's why BreastCare is the right choice:
      </p>
      <ul className="list-disc list-inside text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
        <li className="px-3 md:px-20">
          Advanced Technology: BreastCare leverages the power of machine
          learning, specifically the Naive Bayes algorithm, to provide accurate
          and data-driven predictions based on key diagnostic features. This
          gives users confidence in the results they receive.
        </li>
        <li className="px-3 md:px-20">
          User-Friendly Interface: The platform is designed with simplicity in
          mind, ensuring that users of all backgrounds can easily navigate and
          input their data, making healthcare insights more accessible.
        </li>
        <li className="px-3 md:px-20">
          Early Detection Saves Lives: Early detection of breast cancer is
          crucial for successful treatment. BreastCare empowers users to be
          proactive by providing early insights into potential risks,
          encouraging timely consultations with healthcare providers.
        </li>
      </ul>
    </div>
  );
};

export default Why_breastcare;
