import "../../components/CurrentPanel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Achievements = () => {
  const [achieve, setAchieve] = useState([]);

  useEffect(() => {
    fetch("/achievements.json")
      .then((res) => res.json())
      .then((data) => setAchieve(data.achievements))
      .catch((error) => console.error("Failed to load", error));
  }, []);

  return (
    <div className="pt-6 my-6 md:my-8 px-4">
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-violet-600 mb-4">
          Recent Achievements
        </h3>
        <p className="text-xl text-black-500 max-w-3xl mx-auto mb-2">
          PUDS has achieved unparalleled excellence in debate, securing numerous
          national trophies and setting a benchmark for success. The club's legacy
          continues to inspire future debaters' dedication and spirit.
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-4">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {achieve.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-violet-400 shadow-lg rounded-lg w-full md:w-[40rem] h-full p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <img
                  src={member.photo}
                  alt={member.title}
                  className="w-full h-60 md:h-80 object-cover rounded-lg shadow-md border-4 border-violet-500"
                />
                <div className="py-3">
                  <h4 className="text-2xl font-bold text-violet-600">{member.title}</h4>
                  <p className="text-lg font-medium text-gray-600">{member.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Achievements;
