import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaBullhorn, FaTrophy, FaUniversity, FaStar } from "react-icons/fa";

const EventNews = () => {
  return (
    <div className="flex my-4 items-center">
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaBullhorn className="text-blue-500 mr-2" />
          Registration is open for 6th PUDS gateway!
        </Link>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaTrophy className="text-yellow-500 mr-2" />
          New member recruitment is going on!
        </Link>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaUniversity className="text-green-500 mr-2" />
          Registration is open for 6th PUDS gateway!
        </Link>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaStar className="text-purple-500 mr-2" />
          New member recruitment is going on!
        </Link>
      </Marquee>
    </div>
  );
};
export default EventNews;