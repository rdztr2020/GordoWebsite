import { useEffect } from "react";
import { useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "GORDO MIKES";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  },[onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-300 flex flex-col items-center justify-center ">
      <div className="mb-4 text-3xl md:text-5xl lg:text-8xl font-bold font-sigmar bg-gradient-to-r from-themered via-red-500 to-red-400 leading-right bg-clip-text text-transparent ">
        {text} <span className="animate-blink ml-1 text-white ">| </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded  relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
          
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen
