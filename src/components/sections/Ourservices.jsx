import React from 'react';  
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Services from '../../assets/data/serviceslist'

function Ourservices() {
    return (
        <div className=" mx-auto mt-20  md:mt-24 w-full  md:px-20" id="Ourservices">

            {/* Main Container */}

            <div className=" mx-auto ">

                {/* Header */}
                <div className=" flex items-center  justify-center flex-row mb-4 md:mb-6 ">
                    <hr className='border-Secondarycolor w-[50px] md:w-[50px] border-[2px]'></hr>

                    <h2 className="text-center text-darkBlue text-2xl md:text-2xl lg:text-4xl font-medium">
                        Our Services
                    </h2>
                    <hr className='border-Secondarycolor w-[50px] md:w-[50px] border-[2px]'></hr>
                </div>


                {/* Text Content */}

                <h3 className=" text-3xl md:text-4xl text-center flex-1 mx-auto font-semibold my-4 leading-snug md:leading-tight text-darkBlue max-w-xl  bg-size-200 animate-gradient  lg:text-4xl">
                    At DE-COT Technology and  <span className='text-Secondarycolor'> Digital Solutions LTD, </span>  
                </h3>
                <p className="my-6 text-lg text-center text-gray-600 max-w-2xl mx-auto">
                we renders the following services to our  customers;

          </p>

                     
            </div>



<div className="w-full  mx-auto py-16   relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        loop
        className="rounded-2xl bg-gray-50 p-4 shadow-md"
      >
        {Services.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-6 p-8 items-center"
            >
              {/* Left - Text */}
              <div>
                <h2 className=" text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-4">
                  {item.Title}
                </h2>
                <p className="text-gray-700  text-base mb-4">{item.subtext}</p>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>

              {/* Right - Image with overlay */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.Picture}
                  alt={item.Title}
                  className="w-full md:h-100 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                
                </div>
               
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows with React Icons */}
      <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-Secondarycolor w-10 h-10 rounded-full flex items-center justify-center shadow-md">
        <FiChevronLeft className="text-xl text-gray-800" />
      </button>
      <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-Secondarycolor w-10 h-10 rounded-full flex items-center justify-center shadow-md">
        <FiChevronRight className="text-xl text-gray-800" />
      </button>
    </div>











     
{/* 
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 px-6 md:px-20">
            

            {Services.map((services, index) => (
                < div className=" items-center justify-center mt-6  mx-auto " key={index}>

            
                    <div className=" h-auto  mb-5  md:mb-10 bg-white pb-6 rounded-lg shadow-md">
                    <div className=" overflow-hidden">
                            <img
                                src={services.Picture}
                                width={200}
                                height={200}
                                
                                alt="about-picture"
                                className=" w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <h3 className=" tracking my-3 md:leading-10  pt-4 px-3  text-base md:text-3xl lg:text-base font-medium">
                            {services.Title}
                        </h3>



                        <p className=" w-full  text-slate-500 text-sm md:text-[12px] lg:text-[14px] mb-5 px-2 md:mb-5 lg:mb-5 lg:mt-5 ">
                            {services.subtext}
                        </p>

                    </div>
                   

                       
                     </div>

            ))}


</div> */}


      

        </div>

    )
}

export default Ourservices
