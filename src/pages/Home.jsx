import React from 'react'

import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
// import carousel item componentS
import Testifiers from '../components/Trustcarousel';
import Carouselitem from '../components/carousel';
// import Services component
import Services from '../assets/data/serviceslist';

import { Link } from 'react-router-dom';
// creative list

import Whyus from '../assets/data/whyus';

// React icons used
import { FcOnlineSupport } from "react-icons/fc";
import { FaPeopleRobbery } from "react-icons/fa6";
import { SiWorkplace } from "react-icons/si";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

import Colab from '../components/Partnerscarousel';
import Contact from '../components/form';

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
        <div className=' flex md:z-10 rounded-2xl  bg-darkBlue items-center p-2 py-12  text-center text-white justify-center flex-col ' data-aos="fade-up-left">
          <h3 className='font-medium  text-[20px] md:text-3xl px-2 '>
            YOUR FIRST-CLASS ICT CONSULTANTS

          </h3>


        </div>



        {/* dgrid two */}




        <div className=' flex md:z-10 bg-white shadow-2xl items-center px-2 rounded-2xl justify-center flex-col py-4'>
          <FaPeopleRobbery className='fill-darkBlue text-6xl py-2' />
          <h4 className='font-bold py-2 text-center text-2xl'>

            100% Client
            Satisfaction

          </h4>
          <PiDotsThreeOutlineFill className='fill-darkGreen text-5xl' />
          <p className='text-base px-2 text-center'>Our unwavering commitment to excellence empowers us to deliver impeccable services,
            consistently exceeding expectations within every deadline.</p>
        </div>


        {/* dgrid Three */}


        <div className=' flex md:z-10  bg-white shadow-2xl items-center px-2 rounded-2xl justify-center flex-col py-4'>
          <SiWorkplace className='fill-darkBlue text-6xl py-2' />
          <h4 className='font-bold px-4 py-2 text-center text-2xl'>

            6+ Years of Excellence

          </h4>
          <PiDotsThreeOutlineFill className='fill-darkGreen text-5xl' />
          <p className='text-base px-2 text-center'>Distinguished by our relentless pursuit of perfection, we seamlessly provide unparalleled services that redefine industry standards.</p>
        </div>

        {/* grid 4 */}




        <div className=' flex md:z-10 bg-white shadow-2xl items-center px-2 rounded-2xl justify-center flex-col py-4'>
          <FcOnlineSupport className='fill-darkGreen text-6xl py-2' />
          <h4 className='font-bold py-2 text-center text-2xl'>

            5-Star Customer Support
          </h4>
          <PiDotsThreeOutlineFill className='fill-darkGreen text-5xl' />
          <p className='text-base px-2 text-center'>At the heart of our company beats a dedication to unmatched customer support, where we stand by our clients at every turn, offering unwavering assistance throughout their journey with us.</p>
        </div>


      </div>


      {/* A section for Services */}

      <section className='  px-6 py-7 md:p-24 mt-24 ' id='Services'>

        <h1 className='md:text-5xl text-4xl   text-darkBlue text-center font-bold'>
          What We Do Best

        </h1>
        <p className='text-grey-500 text-center font-medium p-4 text-2xl '>our core proficiencies</p>

        <div className='grid gap-5 py-6 mt-6 grid-cols-1 md:grid-cols-3'>

          {Services.map((service, index) => {
            return (
              <div className='bg-blue-100 px-4 md:px-8 py-8 flex flex-col  items-center '  data-aos="slide-up"  key={index}>
                <img src={service.Picture} alt='servive-image' className='w-[80px]' />
                <h4 className='font-medium text-center py-4 text-[20px] px-10 md:px-16 text-black' >{service.Title}</h4>

              </div>
            )
          })}


        </div>

        <div className='flex  justify-center items-center'>
          <a href="/#Services"><button className='bg-blue-600 mx-auto px-6  mt-6 py-3 rounded-md  hover:bg-blue-500 transition duration-500 ease-in-out text-white   text-xl font-medium ' >Learn More</button></a>

        </div>





      </section>



      {/* Our Stive section */}
      <section className='  px-6 py-6 md:p-24' id='about'>

        <div className='grid gap-2 py-6 mt-6 grid-cols-1 md:grid-cols-2'>


          <div className='flex max-w-md flex-col items-center justify-center py-4'>

            <h1 className='md:text-5xl text-3xl  text-center md:text-left   text-darkBlue  font-bold' data-aos="slide-down" duration="500">
              We thrive on Excellence
            </h1>
            <p className='text-grey-500 text-center  md:text-left font-medium pt-4 text-lg '>At JVEC, we’re Excellence driven. This mindset

              is responsible for the high-level commitment and dedication we give in delivering top-notch projects to our clients.
              Our goal is to help our clients stand  out from the crowd with exceptionally crafted products and services.</p>

          </div>


          <div className=''>
            <img src="synergy2.jpeg" alt='ourthrive-image ' className='rounded-3xl  hidden md:flex w-full' />


            <img src="synergy.jpeg" alt='ourthrive-image' className='md:-ml-[50px]  rounded-3xl  w-full md:-mt-[50px]' data-aos="slide-up" duration="500" />

          </div>


        </div>





        <h1 className='md:text-5xl text-3xl mt-24 text-darkBlue text-center font-bold'>
          Why Brands Choose Us
        </h1>
        <p className='text-grey-500 text-center font-medium p-4 text-2xl '>we are outstanding</p>


        <div className='grid gap-5 py-3 mt-6 grid-cols-1 md:grid-cols-3'>

          {Whyus.map((creative, index) => {
            return (
              <div className=' px-4 py-4 flex flex-col  items-center ' data-aos="slide-up" duration="200" key={index}>
                <img src={creative.Picture} alt='servive-image' className='w-[100px]' />
                <h3 className='font-bold  md:font-medium text-center py-4 text-2xl md:text-3xl   text-darkBlue' >{creative.Title}</h3>
                <p className='text-grey-500 text-center  font-medium pt-2 text-lg '>{creative.Subtext}</p>

              </div>
            )
          })}


        </div>




      </section>



      {/* Building trust secton */}
      <section className='  px-6 py-6  md:px-24' id='Building-trust'>


        <h1 className='md:text-5xl text-3xl mt-2 text-darkBlue text-center font-bold'>
          Building Trust

        </h1>
        <p className='text-grey-500 text-center font-medium p-4 text-2xl '>trust earned and preserved</p>


        <Testifiers />






        <h1 className='md:text-5xl mt-24 text-2xl  text-darkBlue text-center font-bold'>
          They Trust Us


        </h1>
        <p className='text-grey-500 text-center font-medium p-4 text-2xl '>you can too</p>




      </section>

      <section className='  px-6 py-6  md:px-24' id='Building-trust'>
        <Colab />





        <h1 className='md:text-5xl mt-24 text-3xl  text-darkBlue text-center font-bold'>
          How can we be of help?



        </h1>
        <p className='text-grey-500 text-center font-medium p-4 text-2xl '>please shoot us a mail</p>

      </section>


      {/* contact section */}
      <section id="contact">

        <Contact />
      </section>
    </>

  )

}

