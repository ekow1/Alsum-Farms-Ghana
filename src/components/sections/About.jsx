import React , {useEffect} from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

import AboutImage from '../../image/farm.jpg'
import Video from './Video';
const About = () => {

   useEffect(() => {
  AOS.init({
    
    duration: 2000,
    easing: 'ease-in-out'
  }
  );
}, []);
  return (
    <div className='w-full min-h-auto flex flex-col  items-center justify-center  lg:px-10 lg:py-16 lg:mt-20 py-10 '
    >
        <div className=" w-full  h-[850px] lg:w-full flex flex-col  items-center justify-center  ">
            <div className="w-[90%] h-[50%] flex flex-col  items-center justify-center gap-5 lg:gap-0 lg:flex-row  lg:justify-between mb-28 lg:mb-28">
                <div className=" w-full lg:w-[30%]  " data-aos='fade-right'>
                 <div className=" flex flex-col gap-3 mb-5">
                <h1 className='font-serif font-bold text-5xl' >about us</h1>
                <p className=' text-sm' > Unveiling the Story of Alsum Farms.</p>

                 </div>
                 <NavLink to='/about'>

                 <button type="button" className='  mt-5 cursor-pointer  flex items-center justify-center   gap-2  px-3 py-2 outline outline-1 hover:bg-slate-900 hover:text-white  rounded-full' >  know us more  <FiArrowUpRight /> </button>
                 </NavLink>
                  

                
                </div>
                <div className=" w-full  lg:w-[70%]   lg:text-3xl font-thin " data-aos='fade-in'>
                <p>
                  Alsum Farms envisions a future where innovative agricultural practices flourish, fostering sustainable growth and prosperity for communities in Ghana</p>

                </div>
            </div>
            <Video />

        </div>

    </div>
  )
}

export default About