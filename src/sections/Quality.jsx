import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import madeinusa from "../assets/madeinusa.png";
import quality from "../assets/quality.png";
import gmlogo from "../assets/gmlogo.png";

const Quality = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="services"
      className="w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px] h-full flex lg:flex-row flex-col justify-between items-start gap-[100px] text-white"
    >
      <div className="lg:w-[40%] w-full flex flex-col justify-center items-center gap-6">
        <h1
          data-aos="zoom-in"
          className="text-4xl text-center uppercase text-white font-sigmar font-semibold "
        >
          Gordo Mikes
        </h1>

        <div data-aos="zoom-in" className="bg-themered h-[3px] w-20"></div>

        <div className="bg-themeblack rounded-full  flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 ">
          <img src={gmlogo} alt="" className=" size-24 " />
        </div>

        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-300 text-lg font-sigmar text-center"
        >
          Made with the finest ingredients<br /><br />Local Delivery Available</p>
      </div>

      <div className="lg:w-[60%] w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20 gap-12 ">
        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center gap-6 text-center"
        >
          <div className="bg-themered rounded-full  flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 ">
            <img src={madeinusa} alt="" className=" size-24 " />
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-white font-semibold text-[26px]">
              Made in the USA
            </h1>
            <p className="text-gray-300 text-[17px] font-poppins">
              American Made
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col justify-center items-center gap-6 text-center"
        >
          <div className="bg-themered rounded-full  flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 ">
            <img src={quality} alt="" className=" size-24 " />
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-white font-semibold text-[26px] ">
              Premium Quality
            </h1>
            <p className="text-gray-300 text-[17px] font-poppins">
              Only the best Ingredients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
