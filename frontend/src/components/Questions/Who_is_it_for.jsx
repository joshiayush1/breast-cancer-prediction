import React from "react";

const Who_is_it_for = () => {
  return (
    <div className="w-screen h-auto flex flex-col items-center px-5 md:px-20">
      <h1 className="h-[15vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#072AC8]">
        Who is it for ?
      </h1>
      <p className="w-full text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
        BreastCare is designed for anyone concerned about breast health and
        early detection of breast cancer. Whether you're a patient, a caregiver,
        or a healthcare professional, BreastCare provides a simple and effective
        way to gain insights based on medical data.
        <br />
        <br />
        This platform is especially valuable for:
        </p>
        <ul className="list-disc list-inside text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
          <li className="px-3 md:px-20">
            Patients: Individuals who want to monitor their breast health or
            have recently undergone diagnostic tests and are seeking additional
            clarity.
          </li>
          <li className="px-3 md:px-20">
            Healthcare Providers: Medical professionals looking for a tool to
            assist in early breast cancer detection and risk assessment for
            their patients.
          </li>
          <li className="px-3 md:px-20">
            Caregivers and Advocates: Those supporting loved ones or advocating
            for breast health awareness, who want to understand breast cancer
            risks more effectively.
          </li>
          <li className="px-3 md:px-20">
            Researchers and Students: People in the medical or healthcare fields
            interested in exploring how machine learning can be applied to
            predictive healthcare. By providing a prediction based on diagnostic
            data, BreastCare aims to help users make informed decisions, guide
            next steps, and encourage proactive care in maintaining breast
            health.
          </li>
        </ul>
    </div>
  );
};

export default Who_is_it_for;
