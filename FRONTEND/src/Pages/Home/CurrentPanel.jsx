import "../../components/CurrentPanel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const CurrentPanel = () => {
  const [executiveCommittee, setExecutiveCommittee] = useState([]);

  useEffect(() => {
    fetch("/executiveCommittee.json")
      .then((res) => res.json())
      .then((data) => setExecutiveCommittee(data.executiveCommittee))
      .catch((error) => console.error("Failed to load", error));
  }, []);

  return (
    <div className="bg-white-500 my-4 md:my-6 py-2">
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-violet-500">Current Panel</h3>
        <p className="w-full md:w-2/3 text-lg text-black-500 mx-auto py-2">
          Meet our distinguished Executive Committee members who lead with dedication and vision.
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-2">
        <h1 className="font-bold text-2xl text-black-500 mb-8 text-center">
          12th Executive Committee
        </h1>
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {executiveCommittee.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-lg rounded-lg w-80 md:w-96 p-6 flex flex-col items-center text-center border hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="rounded-full object-cover mb-4 shadow-md border-4 border-violet-500"
                  style={{ width: "200px", height: "200px" }}
                />
                <h4 className="text-2xl font-bold text-violet-500">
                  {member.name}
                </h4>
                <p className="text-lg italic font-semibold text-violet-500 mb-4">{member.position}</p>
                {/* <p className="text-gray-500 mt-4">
                  Dedicated to guiding the organization with expertise and vision.
                </p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center items-center py-2 md:py-4">
        <Link to="/members">
          <button className="bg-violet-500 text-white font-bold px-4 py-2 rounded-full shadow-lg hover:bg-violet-700 transform transition-transform duration-300 hover:scale-105">
            View Full Panel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CurrentPanel;
