import React from "react";

const Data_privacy = () => {
  return (
    <div className="w-screen h-auto flex flex-col items-center px-5 md:px-20">
      <h1 className="h-[15vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#072AC8]">
        Data Privacy ?
      </h1>
      <p className="w-full text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
        At BreastCare, we take your privacy and the security of your personal
        data seriously. We are committed to ensuring that any information you
        provide is handled with the utmost care and confidentiality.
        <br />
        <br />
      </p>
      <ul className="list-disc list-inside text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
        <li className="px-3 md:px-20">
          Secure Data Handling: All data entered on our platform is encrypted to
          protect your personal information from unauthorized access. We use
          industry-standard encryption protocols to ensure that your data
          remains secure.
        </li>
        <li className="px-3 md:px-20">
          No Sharing with Third Parties: Your data is never shared, sold, or
          distributed to third parties without your explicit consent. We respect
          your privacy and use your information solely to provide accurate
          predictions and insights through our platform.
        </li>
        <li className="px-3 md:px-20">
          Anonymized Data: To further ensure privacy, any data used for research
          or improvement of our prediction algorithms is fully anonymized. Your
          personal identifiers are removed, and the data is used in aggregate to
          enhance our model’s accuracy and performance.
        </li>
      </ul>
      <br />
      <p className="w-full text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
        Your trust is our priority, and we are dedicated to safeguarding your
        data while delivering accurate and helpful predictions for your breast
        health.
      </p>
    </div>
  );
};

export default Data_privacy;
