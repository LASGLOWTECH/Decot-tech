
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Creatives from '../../assets/data/creative';

import useAOS from '../../hooks/useAos';

import 'aos/dist/aos.css';
import Button from '../Button';



const Carouselitem = () => {

  const refreshAOS = useAOS(); // Use the custom hook

  const handleSlideChange = () => {
    refreshAOS(); // Refresh AOS on slide change
  };

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
<Carousel  responsive={responsive}
      afterChange={handleSlideChange}
      customTransition="all .5s"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={10000}

      >

        {Creatives.map((creative, index) => {
          return (

            <section
        className="relative  bg-cover bg-center bg-no-repeat h-screen " key={index} data-aos-duration="1000" data-aos="zoom-out"

        style={{
          backgroundImage: `url(${creative.Picture})`,
        }}
      > <div
      className="overlay absolute   inset-0   bg-gradient-to-r from-darkBlue via-darkBlue to-darkBlue-80 opacity-90"
    ></div>

    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-20"
    >
      <div className="py-6">
        <h1 className="text-5xl md:text-6xl  leading-tight lg:tracking-wider  lg:max-w-3xl lg:leading-tight font-bold  text-white" data-aos-duration="1500" data-aos="fade-up">
          {creative.Title}<span className='text-Secondarycolor'> {creative.Highlight}</span>


        </h1>

        <p className="pt-4 text-lg lg:text-xl max-w-xl text-grey md:text-left   font-normal">
         {creative.Subtext}
        </p>

        <div className="mt-12 flex flex-wrap gap-4 text-center">
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


          )

        })}
{/* 

      <section
        className="relative  bg-cover bg-center bg-no-repeat h-screen"
        style={{
          backgroundImage: `url(${Heroimage})`,
        }}
      >
        <div
          className="overlay absolute   inset-0   bg-gradient-to-r from-darkBlue via-darkBlue to-darkBlue-80 opacity-90"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-20"
        >
          <div className="py-6">
            <h1 className="text-5xl md:text-6xl  leading-tight lg:tracking-wider  lg:max-w-3xl lg:leading-tight font-bold  text-white">
              Building Technologies Digital<span className='text-Secondarycolor'> Solutions</span>


            </h1>

            <p className="pt-4 text-lg lg:text-xl max-w-xl text-grey md:text-left   font-normal">
              Welcome to Decot-Technology,  Where We grow your business with our digital solutions
            </p>

            <div className="mt-12 flex flex-wrap gap-4 text-center">
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
      </section> */}

      </Carousel>



    </>
  )
}

export default Carouselitem;