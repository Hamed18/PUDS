import "../../components/CurrentPanel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

const Achievements = () => {
  const [achieve, setachieve] = useState([]);

  useEffect(() => {
    fetch("/achievements.json")
      .then((res) => res.json())
      .then((data) => setachieve(data.achievements))
      .catch((error) => console.error("Failed to load", error));
  }, []);

  return (
    <div className="bg-white py-4">
      {" "}
      {/* Fixed bg-white-500 to bg-white */}
      <div className="text-center my-4">
        <h3 className="text-4xl font-bold text-violet-800 mb-4 flex items-center justify-center gap-2">
          {/* <Trophy className="w-8 h-8 text-violet-800" /> */}
          Achievements of PUDS
        </h3>
        <p className="text-lg text-black-500">
          PUDS has achieved unparalleled excellence in debate, securing numerous
          national trophies and setting a benchmark for success. The club's
          legacy continues to inspire future debater's dedication and spirit.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {achieve.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg w-full md:w-[40rem] p-6 flex flex-col items-center text-center border hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={member.photo}
                  alt={member.title}
                  className="rounded-none object-cover w-full h-[200px] md:h-[400px] mb-4 shadow-md border-4 border-violet-500"
                />
                <h4 className="text-2xl font-bold text-violet-800 text-gray-800">
                  {member.title}
                </h4>
                <p className="text-xl font-semibold text-violet-500 mb-4">{member.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="flex justify-center items-center mt-10">
        <Link to="/members">
          <button className="bg-violet-600 text-white font-bold px-10 py-3 rounded-full shadow-lg hover:bg-violet-700 transform transition-transform duration-300 hover:scale-105">
            View More
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Achievements;
