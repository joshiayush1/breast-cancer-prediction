import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { prediction } = location.state || {};
  return (
    <div className="w-screen h-auto flex flex-col items-center px-5 md:px-20">
      <h1 className="h-[15vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#072AC8]">
        {prediction === "Malignant Tumor"
          ? "Please Consult a Doctor!"
          : "There's No Need to Worry!"}
      </h1>
      <p className="w-full text-[#404040] font-semibold opacity-90 text-xs md:text-sm">
        {prediction === "Malignant Tumor" ? (
          <>
            <p>
              We understand that receiving this information can be overwhelming.
              The test results show that the tumor is classified as{" "}
              <span className="text-red-500"> malignant </span>, meaning it is
              cancerous. It's important to remember that a malignant tumor can
              spread and may require medical intervention such as surgery,
              chemotherapy, or radiation therapy. However, advances in medical
              treatments have significantly improved outcomes for patients with
              malignant tumors, and many people have successfully managed their
              condition through treatment.
            </p>
            <br />
            <p>
              It's natural to feel anxious or uncertain, but please know that we
              are here to guide and support you every step of the way. While the
              prediction indicates a malignant tumor, it is essential to consult
              your healthcare provider as soon as possible for a full diagnosis
              and to discuss your options. Your doctor will be able to provide a
              personalized treatment plan based on further evaluations and
              tests.
            </p>
            <br />
            <p>
              We understand that you might have many questions and concerns, but
              your doctor will be able to offer you clear guidance and the most
              appropriate care tailored to your situation. Please make sure to
              reach out to your healthcare provider as soon as possible to start
              the next steps.
            </p>
            <br />
            <p>
              In both cases — whether malignant or benign — it’s crucial to
              follow up with your healthcare provider for further assessment.
              These results are not definitive and do not guarantee an absolute
              diagnosis. Please contact your doctor as soon as possible to
              ensure that you receive the best care.
            </p>
          </>
        ) : (
          <>
            <p>
              The test results show that the tumor is{" "}
              <span className="text-[#072AC8]"> benign </span>, which means it is
              not cancerous. Benign tumors are usually non-threatening and
              typically do not spread to other parts of the body. However, it's
              important to keep in mind that even though benign tumors are
              generally not harmful, they can still cause problems depending on
              their size, location, or how they affect surrounding tissues.
            </p>
            <br />
            <p>
              While benign tumors are not cancerous, we strongly recommend that
              you consult with your healthcare provider to confirm the diagnosis
              and discuss whether any further actions are necessary. Your doctor
              will be able to guide you on whether any monitoring, treatment, or
              surgery is needed based on your specific case.
            </p>
            <br />
            <p>
              In both cases—whether malignant or benign—it’s crucial to follow
              up with your healthcare provider for further assessment. These
              results are not definitive and do not guarantee an absolute
              diagnosis. Please contact your doctor as soon as possible to
              ensure that you receive the best care.
            </p>
          </>
        )}
      </p>
    </div>
  );
};

export default Result;

{
  /* <div className="aboutSection h-[100vh] md:h-[75vh] w-screen flex flex-col items-center">
      <h1 className="h-[10vh] md:h-[30vh] w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#404040]">
        {prediction === "Malignant Tumor"
          ? "Please Consult a Doctor!"
          : "There's No Need to Worry!"}
      </h1>

      <p className="w-3/4 text-center text-xs md:text-md text-[#404040] font-semibold pt-20">
        {prediction === "Malignant Tumor" ? (
          <>
            <p>
              We understand that receiving this information can be overwhelming.
              The test results show that the tumor is classified as malignant,
              meaning it is cancerous. It's important to remember that a
              malignant tumor can spread and may require medical intervention
              such as surgery, chemotherapy, or radiation therapy. However,
              advances in medical treatments have significantly improved
              outcomes for patients with malignant tumors, and many people have
              successfully managed their condition through treatment.
            </p>
            <br />
            <p>
              It's natural to feel anxious or uncertain, but please know that we
              are here to guide and support you every step of the way. While the
              prediction indicates a malignant tumor, it is essential to consult
              your healthcare provider as soon as possible for a full diagnosis
              and to discuss your options. Your doctor will be able to provide a
              personalized treatment plan based on further evaluations and
              tests.
            </p>
            <br />
            <p>
              We understand that you might have many questions and concerns, but
              your doctor will be able to offer you clear guidance and the most
              appropriate care tailored to your situation. Please make sure to
              reach out to your healthcare provider as soon as possible to start
              the next steps.
            </p>
            <br />
            <p>
              In both cases — whether malignant or benign — it’s crucial to
              follow up with your healthcare provider for further assessment.
              These results are not definitive and do not guarantee an absolute
              diagnosis. Please contact your doctor as soon as possible to
              ensure that you receive the best care.
            </p>
          </>
        ) : (
          <>
            <p>
              The test results show that the tumor is benign, which means it is
              not cancerous. Benign tumors are usually non-threatening and
              typically do not spread to other parts of the body. However, it's
              important to keep in mind that even though benign tumors are
              generally not harmful, they can still cause problems depending on
              their size, location, or how they affect surrounding tissues.
            </p>
            <br />
            <p>
              While benign tumors are not cancerous, we strongly recommend that
              you consult with your healthcare provider to confirm the diagnosis
              and discuss whether any further actions are necessary. Your doctor
              will be able to guide you on whether any monitoring, treatment, or
              surgery is needed based on your specific case.
            </p>
            <br />
            <p>
              In both cases—whether malignant or benign—it’s crucial to follow
              up with your healthcare provider for further assessment. These
              results are not definitive and do not guarantee an absolute
              diagnosis. Please contact your doctor as soon as possible to
              ensure that you receive the best care.
            </p>
          </>
        )}
      </p>

    </div> */
}
