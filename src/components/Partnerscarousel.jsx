
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Partner from '../assets/data/Partners';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Colab = () => {

  useEffect(() => {
    setInterval(() => {
      AOS.init({ duration: 3000 });

    }, 1000);

  }, []);



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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


      <Carousel responsive={responsive}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}

      >


        {Partner.map((partners, index) => {
          return (

            <div className='  flex items-center justify-center   py-4 ' key={index} 
            >

  

    <img src=  {partners.Picture} alt='ourthrive-image ' className='  p-y w-100' />


   
            

          </div>


          )

        })}




      </Carousel>






    </>
  )
}

export default Colab;