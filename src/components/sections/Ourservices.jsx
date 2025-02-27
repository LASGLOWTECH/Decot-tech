import React from 'react'
import Services from '../../assets/data/serviceslist'

function Ourservices() {
    return (
        <div className="px-6  mx-auto mt-20  md:mt-24 w-full  md:px-20" id="Ourservices">

            {/* Main Container */}

            <div className=" mx-auto ">

                {/* Header */}
                <div className=" flex items-center  justify-center flex-row mb-4 md:mb-6 ">
                    <hr className='border-Secondarycolor w-[50px] md:w-[50px] border-[2px]'></hr>

                    <h2 className="text-center text-darkBlue text-xl md:text-2xl lg:text-4xl font-medium">
                        Our Services
                    </h2>
                    <hr className='border-Secondarycolor w-[50px] md:w-[50px] border-[2px]'></hr>
                </div>


                {/* Text Content */}

                <h3 className=" mx-auto text-center tracking-wider md:leading-10 text-darkBlue max-w-2xl  bg-size-200 animate-gradient text-2xl md:text-2xl lg:text-3xl font-semibold">
                    At DE-COT Technology and  <span className='text-Secondarycolor'> Digital Solutions LTD, </span>  we renders the following services to our  customers;

                </h3>



            </div>


<div className='grid grid-cols-1 md:grid-cols-4  gap-5 mt-10 md:mt-20'>

            {Services.map((services, index) => (
                < div className="  items-center justify-center mt-6  mx-auto " key={index}>

                    {/* grid one */}
                    <div className=" h-auto  mb-5  md:mb-10 ">
                    <div className=" overflow-hidden">
                            <img
                                src={services.Picture}
                                width={200}
                                height={200}
                                
                                alt="about-picture"
                                className=" w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <h3 className=" tracking mt-3 md:leading-10  pt-4 px-3  text-base md:text-3xl lg:text-base font-medium">
                            {services.Title}
                        </h3>



                        <p className=" w-full  text-slate-500 text-sm md:text-[12px] lg:text-[14px] mb-5 px-2 md:mb-5 lg:mb-5 lg:mt-5 ">
                            {services.subtext}
                        </p>

                    </div>
                   

                       
                     </div>

            ))}


</div>


            {/* Content Grid */}

        </div>

    )
}

export default Ourservices
