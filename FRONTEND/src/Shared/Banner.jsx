import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // npm install swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-60 md:h-96 lg:h-[600px] bg-gray-100">
      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736009707/FestCover_srjip2.jpg"
              alt="Library Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-8 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-wide drop-shadow-lg font-montserrat">
                Boost your Public Speaking Skills
              </h2>
              <Link to="/events">
                <button className="bg-violet-600 text-white font-bold mt-4 px-6 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736009706/debate1_dtipyw.jpg"
              alt="Library Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center pb-8 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-wide drop-shadow-lg font-montserrat">
                Be a Part of the Legacy
              </h2>
              <Link to="/events">
                <button className="bg-violet-600 text-white font-bold mt-4 px-6 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                  Join
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
