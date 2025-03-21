import React, { useEffect } from "react";
import bottle from "../assets/bottle.png";
import accent from "../assets/accent.png";
import gmlogo from "../assets/gmlogo.png"
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="home"
      className="w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[150px] pt-[120px] h-full flex lg:flex-row flex-col justify-between items-center gap-[100px]"
    >
      <div className="lg:w-3/5 w-full flex flex-col justify-center items-center gap-8">
        <h1
          data-aos="zoom-in"
          className="text-gray-200 lg:text-4xl text-3xl font-bold font-sigmar"
        >
          GORDO MIKES
        </h1>
        
        <div className="bg-themeblack rounded-full  flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110 ">
                  <img src={gmlogo} alt="" className=" size-24 " />
                </div>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-gray-300 text-3xl font-semibold font-sigmar"
        >
          BBQ SAUCE
        </h1>
        <div data-aos="zoom-in" className="bg-themered h-[3px] w-28"></div>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-300 lg:text-xl text-2xl font-sigmar text-center"
        >
          The Sauce is The Boss</p>
          <p className="text-gray-300 lg:text-xl text-lg font-sigmar text-center">Just the Right amount of Heat and Sweet</p>
        
      </div>

      <div
        
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <div className="bg-[#2f2f2f] lg:w-[420px] w-full lg:h-[520px] h-[400px] rounded-lg absolute top-[10px] -left-[30px]"></div>
        <img
          src={bottle}
          alt=""
          className="lg:w-[400px] w-full lg:h-[500px] h-[450px] rounded-lg relative z-20 object-contain"
        />
        <img
          src={accent}
          alt=""
          className="absolute -top-6 -right-17 rounded-lg z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
