import React from 'react'
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone, } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaInstagram, } from "react-icons/fa"
export default function Footer() {



  const today = new Date().getFullYear();
  const [newDay] = useState(today)



  return (
    <div className='bg-gradient-to-t from-blue-100 px-6 md:px-24 mx-auto to-blue-100 py-12 '>

      <div className='grid md:grid-cols-3 grid-cols-1'>


        {/* first grid */}
        <div className='contact  md:mt-0 mt-6 flex flex-col'>
          <h3 className='text-darkBlue font-bold text-2xl'>Navigation</h3>

          <div className='flex-row my-4 '>
            <p className='text-lg'>Home</p>
            <p className='text-lg'>Services</p>
            <p className='text-lg'>About</p>
            <p className='text-lg'>Training</p>
           <a href="/https://wa.me/2349031821590" target="_blank" ><button className="text-base   rounded-md px-6  mt-3 py-3  text-white fonr-medium my-3 bg-blue-600 " value="Submit">Contact Us</button></a>


            <h3 className='text-darkBlue font-bold py-3 text-lg'>Quick Links</h3>
          </div>
          <p className='text-lg'>Intership</p>
          <p className='text-lg'>Opening</p>

        </div>


        {/* second grid */}



        <div className='contact md:mt-0 mt-12 flex flex-col'>

          <div className='flex flex-row  '>
          
          
      
              <img src="/jvec_logo.png"
                width={60}
                height={60}
                alt="image" />

           
            <h3 className='text-darkBlue font-bold  text-2xl'>JVEC Solutions</h3>
           


          </div>

          <p className='font-thin text-base pt-3 '>At JVEC, we believe that whatever is worth doing, is worth doing well.

            This mindset is responsible for our conscientious approach to achieving quality service delivery. Over the years, we have built our brand on the foundation of excellence.</p>



        </div>




        {/* last contact grid */}







        <div className='contact md:mt-0 mt-16 flex flex-col'>
          <h3 className='text-darkBlue font-bold text-2xl'>Contact</h3>

          <div className="flex flex-row  justify-start items-center">
            <span className=" rounded-[100%]   my-3   bg-orangeRed  text-3xl">< BsTelephone className="p-1 text-darkBlue" /></span>

            <p className="text-xl pl-6 text-black"> +234-8100-100-489</p>
          </div>




          <div className="flex flex-row justify-start items-center">

            <span className=" rounded-[100%]   my-3  bg-orangeRed  text-3xl">   < BiEnvelope className="p-1 text-darkBlue" /></span>

            <p className="text-xl pl-6 text-black">hello@jvecsolutions.com </p>

          </div>


          <div className="flex flex-row  items-center">
            <span className=" rounded-[100%]   my-3  mbg-orangeRed  text-3xl">< BsWhatsapp className="p-1 text-darkBlue" /></span>

            <p className="text-lg pl-6 text-black"> +234-903-577-8224</p>
          </div>

          <div className="flex flex-row justify-left items-center pt-3">

            <span className=" rounded-[100%]    bg-orangeRed  text-black text-4xl">    <MdLocationOn className=" p-1 fill-darkBlue " /></span>
            <p className="text-lg pl-6  text-black ">12 Rev. Ogunbiyi Street, Off Oba Akinjobi, Ikeja GRA, Lagos, Nigeria.</p>
          </div>






        </div>







      </div>



      {/* bottom links */}

      <div className='flex items-center my-10 md:flex-row md:space-x-36 justify-center flex-col '>

        <div className="flex flex-col justify-between row  md:flex-row">
          <p className=" text-center md:text-left font-lighter text-base text-black py-2">  &copy; Copyright <span className="  text-black">{newDay} </span> JVEC Solutions </p>

        </div>


        <div className='Email  flex  justify-start'>
          <span className=" rounded-[100%] my-5 mx-2 text-darkBlue  bg-orangeRed text-3xl"><a href="https://linkedin.com/in/austinosaz"><BsLinkedin className="p-1" /></a></span>

          <span className=" rounded-[100%]   my-5 me-2 text-darkBlue bg-orangeRed  text-3xl"><a href="https://twitter.com/OmozemojeAugus1" target="_blank"><BsTwitter className="p-1" /></a></span>
          <span className="rounded-[100%] my-5  mx-2  text-darkBlue  text-3xl"><a href="https://m.facebook.com/omozemoje.augustineoisasoje" target="_blank"><FaFacebookF className="p-1" /></a></span>
          <span className=" rounded-[100%] my-5 mx-2 text-darkBlue  bg-orangeRed text-3xl"><a href="https://instagram.com/austineosaz/"><FaInstagram className="p-1" /></a></span>

        </div>







      </div>
    </div>
  )
}
