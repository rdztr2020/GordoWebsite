import React from "react";
import logo from "../assets/logo.png"

const Header = () => {
    
  return (
    <header className="bg-themeblack py-4 lg:px-[80px] px-7 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center items-center">
        <div className="text-themered font-bold ">
          <img src={logo} alt="" className="" />
        </div>
        
      </div>      
    </header>
  );
}


export default Header;
