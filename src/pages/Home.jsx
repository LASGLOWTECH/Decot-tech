import React from 'react'

import { useEffect, useState } from "react";
import { FaCircle } from 'react-icons/fa6';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import carousel item componentS
import Testifiers from '../components/sections/Trustcarousel';
import Carouselitem from '../components/sections/carousel';
import { Link } from 'react-router-dom';
// import Services component
import Services from '../assets/data/serviceslist';
import Whyus from '../assets/data/profile';

// creative list



// React icons used
import { FcOnlineSupport } from "react-icons/fc";
import { FaPeopleRobbery } from "react-icons/fa6";
import { SiWorkplace } from "react-icons/si";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import AboutUs from '../components/sections/About';
import Colab from '../components/sections/Team';
import Contact from '../components/form';
import Ourservices from '../components/sections/Ourservices';
import { Synergy, Heroimage} from "../components/images";
import DrivesSection from '../components/sections/OurMission';
import TeamSection from '../components/sections/Team';


  // Add more testimonials here...

export const Home = () => {


  useEffect(() => {
    setInterval(() => {
      AOS.init({ duration: 3000 });

    }, 1000);

  }, []);

  return (
    <>
      <Carouselitem />


      <div className="px-6 md:px-24 shadow-l gap-5 grid grid-cols-1 md:grid-cols-4 mt-6 md:z-10 md:-mt-[50px]">
        
        {/* grid one */}
        
        <div className=' flex md:z-10   hover:bg-white hover:text-darkBlue bg-darkBlue items-center p-2 py-12  text-center text-white justify-center flex-col ' data-aos="zoom-up">
          <h3 className='font-medium  text-lg md:text-2xl px-2 '>
            We Build and Beautify
          </h3>


        </div>



        {/* dgrid two */}




        <div className=' flex md:z-10 bg-white shadow-2xl items-center w-auto h-auto px-2 justify-center flex-col py-4'>
          <FaPeopleRobbery className='fill-darkBlue text-6xl py-2' />
          <h3 className='font-semibold  text-lg md:text-2xl text-center pt-5 px-2'>

            We Network with Industries

          </h3>
          <PiDotsThreeOutlineFill className='fill-Secondarycolor text-5xl' />

        </div>


        {/* dgrid Three */}


        <div className=' flex md:z-10  bg-white hover:bg-darkBlue hover:text-white shadow-2xl items-center px-2 l justify-center flex-col py-4'>
          <SiWorkplace className='fill-Secondarycolor text-6xl py-2' />
          <h4 className='font-semibold  text-lg md:text-2xl text-center pt-5 px-2'>
            We invent and Innovate with Precision

          </h4>
          <PiDotsThreeOutlineFill className='fill-Secondarycolor text-5xl' />        </div>

        {/* grid 4 */}




        <div className=' flex md:z-10 bg-white shadow-2xl items-center px-2  justify-center flex-col py-4'>
          <FcOnlineSupport className='fill-darkBlue text-6xl py-2' />
          <h4 className='font-semibold  text-lg md:text-2xl text-center pt-5 px-2'>

            We Educate         </h4>
          <PiDotsThreeOutlineFill className='fill-Secondarycolor text-5xl' />

        </div>


      </div>

{/* About us */}
<AboutUs /> 


<Ourservices /> 



      {/* A section for Services */}

     <section className="px-6 md:p-24" id="Services">
      <div className='flex flex-col items-center'>


        <h1 className="md:text-5xl text-4xl text-darkBlue text-center font-medium">
    Our Core <span className='text-Secondarycolor'>Proficiencies</span>
  </h1>
  <p className="text-gray-500 text-center font-medium md:max-w-lg p-4 text-base">
  We combine innovation, expertise, and reliability to deliver solutions that empower businesses and individuals across multiple sector
  </p>

      </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 justify-center">
    {/* Left side - Image + Description */}
    <div className="md:col-span-2 w-full">
      <img
        src={Synergy}
        alt="image"
        className="w-full max-h-[450px] object-cover rounded-2xl shadow-md mb-8"
      />
      <p className="text-base md:text-base text-gray-700 leading-relaxed md:pr-6 md:text-justify">
        We offer smart solutions that simplify work and improve daily life. From
        document and data management systems (PDMS/EDMS) to mechanical and
        electrical services, we ensure efficiency and reliability. Our household
        fittings and building materials bring style and strength to homes, while
        our ICT services and custom software keep businesses connected and
        productive. Plus, through our training and workshops, we empower
        individuals and organizations with the skills they need to grow and
        succeed.
      </p>
    </div>

    {/* Right side - Services list */}
    <div className="hover:shadow-xl transition duration-300 rounded-2xl p-8 text-left shadow-md shadow-Primarycolor bg-white">
      <h2 className="text-2xl font-semibold text-Secondarycolor mb-6">
        Key Offers
      </h2>

      <div className="space-y-4">
        {Services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300"
          >
            <FaCircle className="text-Secondarycolor w-3 h-3 flex-shrink-0" />
            <p className="text-gray-700 font-medium">{service.Title}</p>
          </div>
        ))}
      </div>

      <a
        href="/#contact"
        className="inline-block mt-10 px-8 py-3 bg-gradient-to-r from-Primarycolor to-Primarycolor hover:from-Secondarycolor hover:to-Secondarycolor shadow-lg text-white font-semibold rounded-full transition-all duration-300"
      >
        Contact Now
      </a>
    </div>
  </div>

  {/* Learn More Button */}
  {/* <div className="flex justify-center items-center mt-8">
    <a href="/#Services">
      <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-500 transition duration-300 text-white text-lg font-semibold shadow-md">
        Learn More
      </button>
    </a>
  </div> */}
</section>



<section>

  <DrivesSection/>
</section>


<TeamSection/>





      {/* Core Values, Vision and Mission */}
      <section className='  px-6 py-6 md:p-24' id='about'>

        <div className='grid gap-2 py-6 mt-6 grid-cols-1 md:grid-cols-2'>


          <div className='flex  flex-col py-4'>

            <h1 className='md:text-5xl text-4xl text-darkBlue md:text-left text-center font-medium' data-aos="slide-down" duration="500">
             Our Core<span className='text-Secondarycolor'>  Values</span>
            </h1>
            <p className="text-base md:text-base text-gray-700 leading-relaxed py-4 md:pr-6 md:text-justify">In DE-COT Technology and Digital Solutions LTD, there are
fundamental principles that guide to ensure that everyone is on
the same page and working towards a common goal, building
trust with customers and employees and ensuring that
interactions are honest and transparent. Whence working by the
principles that the company must uphold, which are:</p>

          </div>


          <div className=''>
            <img src={Synergy} alt='ourthrive-image ' className='rounded-3xl  hidden md:flex w-[600px] h-[400px]' />


            <img src={Heroimage} alt='ourthrive-image' className='md:-ml-[50px]  rounded-3xl w-[500px]  h-250px] md:-mt-[50px]' />

          </div>


        </div>









      </section>



      <section id="contact" className="py-16">
  <h1 className="md:text-4xl text-3xl mt-24 text-darkBlue text-center font-bold">
    Why Choose Us?
  </h1>

  <p className="text-gray-500 text-center font-regular text-base max-w-2xl mx-auto mt-4">
    DE-COT Technology and Digital Solutions LTD is one of the fastest-growing
    technology service providers in the country today, with a team of
    professionals providing desirable solutions to our customer’s needs.
  </p>

  <div className="grid gap-5 py-3 mt-6 grid-cols-1 md:grid-cols-4">
    {Whyus.map((creative, index) => (
      <div key={index} className="px-4 py-4 flex flex-col  shadow-lg shadow-Primarycolor items-center">
        <creative.Icon className="text-Secondarycolor text-5xl mb-4" />
        <h3 className="font-bold text-Secondarycolor md:font-medium text-center  text-base md:text-2xl">
          {creative.Title}
        </h3>
        <p className="text-gray-500 text-center font-medium py-2 text-base">
          {creative.Subtext}
        </p>
      </div>
    ))}
  </div>
</section>







      

      {/* contact section */}
      <section id="contact">

        <Contact />
      </section>
    </>

  )

}

