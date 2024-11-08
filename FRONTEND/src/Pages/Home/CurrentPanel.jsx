import "../../components/CurrentPanel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CurrentPanel = () => {
  const [executiveCommittee, setExecutiveCommittee] = useState([]);

  useEffect(() => {
    fetch("/executiveCommittee.json")
      .then((res) => res.json())
      .then((data) => setExecutiveCommittee(data.executiveCommittee))
      .catch((error) => console.error("Failed to load", error));
  }, []);

  console.log(executiveCommittee);

  return (
    <div>
      <div>
        <h3 className="my-4 font-bold text-3xl text-center">Current Panel</h3>
        <p className="w-2/3 text-center mx-auto mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          nulla officia iusto quas sunt, laboriosam cum laudantium illo?
        </p>
      </div>

      <div>
        <>
          <h1 className="font-bold text-gray-700 pt-4 pb-8 text-center">Executive Committee</h1>
          <Swiper
            spaceBetween={30}
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
                <div className="bg-gradient-to-r from-slate-50 to-red-50 flex flex-col items-center justify-center text-center border rounded-lg p-6 ">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="rounded-3xl object-cover mb-4"
                    style={{ width: "220px", height: "128px" }}
                  />
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="italic">{member.position}</p>
                  <p className="mt-2 text-sm">{member.description}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-2 mb-6"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default CurrentPanel;
