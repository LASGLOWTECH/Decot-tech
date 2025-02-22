

import React from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import Lady from '../assets/images/Lady1.jpeg'
import Button from '../Button';
const AboutUs = () => {
  return (

    <div className="min-h-screen px-4  w-full py-16 md:px-8">

      {/* Main Container */}

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className=" flex items-center flex-row mb-10 md:mb-20">
          <hr className='border-Secondarycolor w-56 md:w-[50px] border-1 py-2'></hr>

          <h2 className="text-center text-darkBlue text-3xl md:text-4xl lg:text-5xl font-semibold">
            About  <span className="text-Secondary">Us</span>
          </h2>
        </div>


        {/* Text Content */}
        <div className="">
          <h3 className="md:leading-10 bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor2 to-Textcolor3  bg-size-200 animate-gradient text-2xl md:text-3xl lg:text-4xl font-bold">
            Excellence in Information, Communication
            and Technology
          </h3>

          <p className="max-w-[369px] md:max-w-[540px]    text-slate-500 text-sm md:text-base lg:text-lg mb-5 mt-5 md:mb-10 lg:mb-16 lg:mt-10 ">
            Established with the goal to lead in the world of Technology, where day to day
            activities strives with ease.
            It is a dream of 10years playing today and with all her well experienced engineers, IT
            and System experts, data/records professionals, innovators, passionate partners and entrepreneurs.
            DE-COT Technology and Digital Solutions Ltd was Founded to solve all problems of
            Technology, develop Solutions and build worlds of satisfaction to all her clients.
          </p>

          <Button primary='default' >Learn More
            <BiArrowToRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300" />
          </Button>

        </div>





        {/* Content Grid */}
        <div className="flex flex-col justify-center items-center lg:flex-row  gap-12 ">
          {/* Image Container */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src={Lady}
              alt="about-picture"
              className="md:w-[560px] md:h-[480px] w-[369px] h-[318px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>


        </div>
      </div>
    </div>
  );
};

export default AboutUs;