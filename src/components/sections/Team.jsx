import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Chidiebere O. Brian",
    role: "Founder",
    image: "/images/mark.png",
  },
  {
    id: 2,
    name: "Emmanuel Igwe",
    role: "Growth & Marketing Lead",
    image: "/images/nicholason.png",
  },
  {
    id: 3,
    name: "Abdulrahaman Mja",
    role: "Administrator/ EDMS Instructor",
    image: "/images/fola.png",
  },
  {
    id: 4,
    name: "Elizabeth Adamu ",
    role: "Health/Safety Manager",
    image: "/images/zam.png",
  },

  {
    id: 5,
    name: "Faruk Yanusa",
    role: "Building Instructor",
    image: "/images/zam.png",
  },
];

export default function TeamSection() {
  return (
    <section className="px-6 md:px-16 py-12 bg-gray-50 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-darkBlue mb-10">
        Meet Our Team
      </h2>

      {/* Navigation buttons */}
      <div className="absolute inset-y-1/2 left-2 z-10">
        <button className="custom-prev bg-darkBlue text-white p-3 rounded-full shadow hover:bg-Secondarycolor transition">
          <FaChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-2 z-10">
        <button className="custom-next bg-darkBlue text-white p-3 rounded-full shadow hover:bg-Secondarycolor transition">
          <FaChevronRight size={20} />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 15 }, // Mobile overflow
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="pb-12"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-white shadow"
              />
              <h3 className="text-lg font-semibold text-darkBlue">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2 text-center">
                {member.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
