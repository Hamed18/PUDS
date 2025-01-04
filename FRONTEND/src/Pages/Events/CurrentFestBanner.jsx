import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // npm install swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import a from "../../../src/assets/Events/gatewayCover1.jpg";
import b from "../../../src/assets/Events/neon.jpg";
import { Link } from "react-router-dom";

const CurrentFestBanner = () => {
  return (
    <div className="flex justify-center w-full bg-gray-100 my-8">
      <div className="w-full h-60 md:h-96 lg:h-[600px] max-w-6xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736013961/gatewayCover1_bkarra.jpg"
                alt="Library Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl md:text-4xl text-white font-bold text-center">
                  Boost your Public Speaking Skill
                </h2>
                <Link to="/join">
                  <button className="mt-4 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition duration-200">
                    Join
                  </button>
                </Link>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736013961/neon_c9skef.jpg"
                alt="Library Image 2"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4">
                <h2 className="text-2xl md:text-4xl text-white font-bold text-center">
                  Be a Part of the Legacy
                </h2>
                <Link to="/join">
                  <button className="mt-4 px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg transition duration-200">
                    Join
                  </button>
                </Link>
              </div> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CurrentFestBanner;
