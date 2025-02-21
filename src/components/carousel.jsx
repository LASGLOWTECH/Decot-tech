
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Creatives from '../assets/data/creative';
import { useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';




const Carouselitem = () => {

  useEffect(() => {
    setInterval(() => {
      AOS.init({ duration: 3000 });

    }, 1000);

  }, []);



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <>

{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute   bg-Secondarycolor backdrop-brightness-50  inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-lg  ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-xl md:text-7xl    font-bold tracking-wider text-white">
      Building Technologies Digital Solutions

   
      </h1>

      <p className="pt-4 text-[18px] max-w-md text-white text-center shadow-sm font-normal">
      Building and Digitizing a World of Satisfaction..
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded-sm bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow-sm hover:text-rose-700 focus:ring-3 focus:outline-hidden sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>





    </>
  )
}

export default Carouselitem;