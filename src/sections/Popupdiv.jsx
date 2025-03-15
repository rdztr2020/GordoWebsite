import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-scroll';

const Popupdiv = () => {

useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5'>
      <div data-aos="zoom-in" className='w-full bg-[#2f2f2f] flex lg:flex-row flex-col justify-between items-center lg:p-20 p-8'>
        <h1 className='text-white lg:w-[50%] w-full lg:text-[35px] text-[30px] leading-10 font-semibold font-sigmar text-center'>Order Your Bottle Today</h1>
        <button
          data-aos="zoom-in"
          data-aos-delay="300"
          className="bg-themered hover:bg-white text-white hover:text-themered font-semibold lg:text-lg text-sm px-8 py-3 rounded-lg mt-5 font-sigmar"
        >
          <Link to='contact'
        smooth={true}
        duration={200}
        spy={true}>
          Contact Me
          </Link>
          
        </button>
      </div>
      
    </div>
  )
}

export default Popupdiv
