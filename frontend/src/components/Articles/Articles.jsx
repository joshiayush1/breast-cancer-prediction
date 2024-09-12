import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import article1 from "../../assets/article1.jpg";
import article2 from "../../assets/article2.avif";
import article3 from "../../assets/article3.jpg";

const Articles = () => {
  return (
    <div className="h-[60vh] md:h-[110vh] w-screen flex flex-col items-center">
      <h1 className="h-[10vh] md:h-[12vh] mb- w-full flex justify-center items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#404040]">
        Articles
      </h1>
      <p className="w-3/4 text-center mb-28 text-xs md:text-md text-[#404040] opacity-50 font-semibold">
        Some articles that might help you
      </p>
      <div className="px-20 hover:opacity-90 cursor-pointer">
        <Carousel>
          <Carousel.Item>
            <a href="https://www.cancer.gov/news-events/cancer-currents-blog/2023/pausing-breast-cancer-treatment-to-conceive">
              <img
                className="w-auto lg:h-[500px] object-contain rounded-2xl bg-red-100 "
                src={article1}
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3 className="text-[#404040] font-semibold text-xs">
                National Cancer Institute
              </h3>
              <p className="text-[#404040] font-semibold text-xs">
                Pausing Long-Term Breast Cancer Therapy to Become Pregnant
                Appears to Be Safe
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.cancer.gov/news-events/cancer-currents-blog/2022/early-breast-cancer-shorter-radiation-therapy">
              <img
                className="w-auto lg:h-[500px] object-contain rounded-2xl bg-red-100"
                src={article2} // You can replace this with another image
                alt="Second slide"
              />
            </a>
            <Carousel.Caption>
              <h3 className="text-[#404040] font-semibold text-xs">
                National Cancer Institute
              </h3>
              <p className="text-[#404040] font-semibold text-xs">
                Shorter Course of Radiation Is Effective, Safe for Some with
                Early-Stage Breast Cancer
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://www.cancer.gov/news-events/cancer-currents-blog/2020/breast-cancer-fertility-preservation-safe">
              <img
                className="w-auto lg:h-[500px] object-contain rounded-2xl bg-red-100"
                src={article3} // You can replace this with another image
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <h3 className="text-[#404040] font-semibold text-xs">
                National Cancer Institute
              </h3>
              <p className="text-[#404040] font-semibold text-xs">
                Fertility Preservation Safe for Young Women with Breast Cancer
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Articles;
