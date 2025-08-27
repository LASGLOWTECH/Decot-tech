import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Creatives from '../../assets/data/creative';
import useAOS from '../../hooks/useAos';
import 'aos/dist/aos.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
const Carouselitem = () => {
  const refreshAOS = useAOS(); // Use the custom hook

  const handleSlideChange = () => {
    refreshAOS(); // Refresh AOS on slide change
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      afterChange={handleSlideChange}
      customTransition="all .5s"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={10000}
    >
      {Creatives.map((creative, index) => (
        <section
          key={index}
          className="relative h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${creative.Picture})` }}
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-darkBlue via-darkBlue/95 to-dark opacity-95"></div>

          {/* Content */}
          <div className="relative mx-auto max-w-screen-xl px-6 py-32 lg:flex lg:h-screen lg:items-center lg:px-20">
            <div className="py-6">
              {/* Hero Heading */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl font-extrabold leading-tight text-white drop-shadow-md"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {creative.Title}{' '}
                <span className="text-Secondarycolor">{creative.Highlight}</span>
              </h1>

              {/* Subtext */}
              <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                {creative.Subtext}
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#contact" className="flex">
    <Button variant="default" size="lg">Get Started</Button>
  </a>
  <a href="#about">
    <Button variant="primary" size="lg">Learn More</Button>
  </a>

              </div>
            </div>
           </div>
        </section>
      ))}   
    </Carousel>
  );
};

export default Carouselitem;
