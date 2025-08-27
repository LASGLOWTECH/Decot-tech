

import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import { Lady1 } from '../images';

import Button from '../Button';
const AboutUs = () => {
  return (

    <div className="min-h-screen px-6  grid gap-2 grid grid-cols-1 md:grid-cols-2 grid-flow-reverse items-center justify-center mt-20  md:mt-24 w-full  md:px-20" id="about">

      {/* Main Container */}

      <div className="max-w-7xl mx-auto   ">

        {/* Header */}
        <div className=" flex items-center flex-row mb-5  md:mb-10 ">
          <hr className='border-Secondarycolor w-[50px] md:w-[50px] border-[2px]'></hr>

          <h2 className="text-center text-darkBlue text-2xl md:text-3xl lg:text-4xl font-semibold">
            About  <span className="text-Secondary">Us</span>
          </h2>
        </div>


        {/* Text Content */}
        
          <h3 className=" md:leading-10 bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor max-w-xl  bg-size-200 animate-gradient text-2xl md:text-4xl lg:text-4xl font-semibold">
            Excellence in Information, Communication
            and <span className='text-darkBlue'> Technology</span>
          </h3>

          <p className="max-w-3xl text-slate-500 text-sm md:text-base lg:text-lg mb-5 lg:mt-5 leading-relaxed mx-aut">
  Established with the goal of leading in the world of technology, where daily 
  activities are simplified with ease, DE-COT Technology and Digital Solutions Ltd 
  embodies innovation and excellence. 

  <br /><br />
  What began as a ten-year dream is now a reality, driven by experienced engineers, 
  IT and system experts, data and records professionals, innovators, passionate 
  partners, and entrepreneurs. 

  <br /><br />
  Founded in 2024 by C.O. Brian, DE-COT LTD brings together a network of experts 
  and companies under one umbrella with a shared mission — to solve technological 
  challenges, develop cutting-edge solutions, build human capacity, create wealth 
  opportunities, deliver client satisfaction, and transform environments into 
  better places for mankind.
</p>


          <Button primary='default' className='flex flex-row ' >Learn More
            <BiArrowToRight className="w-auto h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300" />
          </Button>

        </div>





        {/* Content Grid */}
        <div className="flex flex-col justify-center items-center lg:flex-row  gap-12 ">
          {/* Image Container */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src={Lady1}
              alt="about-picture"
              className="md:w-[560px] md:h-[480px] w-[369px] h-[318px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>


        </div>
      </div>
  
  );
};

export default AboutUs;