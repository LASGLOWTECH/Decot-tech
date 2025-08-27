import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Lady1 } from '../images';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 

import Mision from   '../../assets/data/Partners'

;export default function DrivesSection() {
  return (
     <section
      className="relative py-16 px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${Lady1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-Primarycolor/90"></div>

      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="p-4"
        >
          {Mision.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-3 py-16 gap-8 items-center"
              >
                {/* Left - Icon + Title */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center md:items-center text-center md:text-left"
                >
                  <item.Icon className="text-Secondarycolor text-5xl mb-4" />
                  <h2 className="text-3xl md:text-5xl font-bold  text-white">
                    {item.Title}
                  </h2>
                </motion.div>

                {/* Right - Text */}
                <div className="md:col-span-2">
                  <div className="line bg-Secondarycolor h-1 w-20 mb-4"></div>
                  <h3 className="text-lg md:text-2xl font-semibold md:max-w-2xl text-gray-100 leading-snug mb-4">
                    {item.Headers}
                  </h3>
                  <p className="text-gray-300 text-base max-w-2xl">
                    {item.Subtext}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}