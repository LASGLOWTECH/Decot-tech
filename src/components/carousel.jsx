
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Creatives from '../assets/data/creative';
import { useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './Button';



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
    className="absolute   bg-darkBlue backdrop-brightness-50  inset-0  bg-gradient-to-l from-transparent to-black h-full w-full"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-20"
  >
    <div className="py-6">
      <h1 className="text-5xl md:text-6xl  leading-tight lg:tracking-wider  lg:max-w-3xl lg:leading-tight font-bold  text-white">
      Building Technologies <span className='text-Secondrycolor'>Digital Solutions</span>

   
      </h1>

      <p className="pt-4 text-lg lg:text-xl max-w-xl text-grey md:text-left   font-normal">
     Welcome to Decot-Technology,  Where We grow your business with our digital solutions
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
          < a
          href="#"
          
        >
          <Button variant='default'>Get Started</Button>
         
        </a>

        <a
          href="#"
        >
          <Button variant='primary'>Learn More</Button>
        </a>
      </div>
    </div>
  </div>
</section>





    </>
  )
}

export default Carouselitem;