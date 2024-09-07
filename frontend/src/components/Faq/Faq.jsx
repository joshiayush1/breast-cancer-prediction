import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How to use BreastCare?",
      answer:
        "To use BreastCare, start clicking on 'Start Prediction', input key health details and genetic factors. Once your information is entered, simply click the 'Predict' button to run the prediction. BreastCare will then analyze your data and display your results, indicating the likelihood of developing breast cancer along with recommendations.",
    },
    {
      question: "How accurate is the prediction?",
      answer:
        "The accuracy of the prediction in BreastCare depends on the quality and completeness of the data you provide. Our model has been trained and tested on a dataset of breast cancer cases and shows an accuracy rate of approximately '97%'. While this gives a solid indication of risk, it is important to remember that no model is 100% accurate. For a more comprehensive assessment, always consult with a healthcare professional.",
    },
    {
      question: "What should I do with this prediction?",
      answer:
        "After receiving your prediction from BreastCare, it’s crucial to consult a healthcare professional to discuss the results, especially if they indicate a higher risk. Regardless of the outcome, continue practicing regular self-examinations and follow recommended screening guidelines. If needed, make lifestyle adjustments, such as improving diet or exercise habits, to lower your risk. Lastly, keep using BreastCare periodically to track your health and stay informed about any changes in your risk profile over time.",
    },
    {
      question: "How can I trust the model’s prediction?",
      answer:
        "You can trust the model's prediction because it has been built using established machine learning techniques, specifically the Naive Bayes algorithm, which is well-suited for probabilistic classification tasks like breast cancer prediction. However, while the model provides valuable insights, it should complement, not replace, medical advice from healthcare professionals.",
    },
  ];

  return (
    <div className="aboutSection h-auto w-screen flex flex-col items-center">
      <h1 className="h-auto mb-14 md:mb-20 w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#404040]">
        Frequently Asked Questions
      </h1>
      <div className="w-4/5 flex flex-col mb-20 shadow-lg">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="box cursor-pointer flex flex-col justify-center items-center hover:bg-slate-100"
            onClick={() => toggleClick(index)}
          >
            <div className="flex justify-between items-center w-full p-5">
              <span></span>
              <h2 className="text-[#404040] text-xl lg:text-3xl font-semibold">
                {faq.question}
              </h2>
              <IoIosArrowDown
                className={`icon w-10 h-10 mr-5 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`pOfBc overflow-hidden transition-max-height duration-500 ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-[#404040] opacity-50 text-xs lg:text-lg font-semibold px-20 pb-5">
                {faq.answer}
              </p>
            </div>
            <hr className="w-full text-[404040]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
