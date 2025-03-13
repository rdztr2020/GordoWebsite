import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaArrowUp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div
      id="contact"
      className="bg-black w-full px-8 py-[80px] flex flex-col justify-center items-center gap-5 text-white"
    >
      <h1
        data-aos="zoom-in"
        className="capitalize font-white text-[25px] font-semibold font-poppins"
      >
        Contact
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-gray-300 text-[16px] text-center font-poppins leading-8"
      >
        29735 NY-10, Walton, NY 13856 <br /> contactinfo@test.test <br />
        914-674-4422
      </p>
      <div
        id="social-icons"
        data-aos="zoom-in"
        data-aos-delay="400"
        className="w-full flex justify-center items-center gap-3 mt-6"
      >
        <div className="bg-[#2f2f2f] hover:bg-themered hover:scale-110 rounded-full p-3 cursor-pointer">
          <a href="https://www.facebook.com/groups/414186977978889">
            <FaFacebook className="fill-white size-8" />
          </a>
        </div>

        <div className="bg-[#2f2f2f] hover:bg-themered hover:scale-110 rounded-full p-3 cursor-pointer">
          <a href="https://x.com/?lang=en" target="_blank">
            <FaSquareXTwitter className=" fill-white size-8" />
          </a>
        </div>

        <div className="bg-[#2f2f2f] hover:bg-themered hover:scale-110 rounded-full p-3 cursor-pointer">
          <a href="https://www.instagram.com/gordomikesbbq/" target="_blank">
            <RiInstagramFill className="fill-white size-8" />
          </a>
        </div>
      </div>
      <p className="text-gray-300 text-[15px] text-center font-poppins leading-8 ">
        Copyright © 2025 <br />
        Gordo Mikes BBQ, LLC
        <br />
        All Rights Reserved
      </p>
      <div
        id="icon-box"
        className="bg-themered text-white p-3 rounded-full hover:bg-gray-700 hover:text-themered cursor-pointer fixed bottom-7 right-7 "
      >
        <Link to="home" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-7" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
