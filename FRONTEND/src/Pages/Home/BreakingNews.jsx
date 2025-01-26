import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaBullhorn, FaTrophy, FaUniversity, FaStar } from "react-icons/fa";

const BreakingNews = () => {
  return (
    <div className="flex my-8 items-center">
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaBullhorn className="text-blue-500 mr-2" />
          Welcome to Premier University Debating Society.
        </Link>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaTrophy className="text-yellow-500 mr-2" />
          One of the prestigious debate clubs in the heart of port city Chittagong.
        </Link>
        {/* <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaUniversity className="text-green-500 mr-2" />
          Welcome to Premier University Debating Society.
        </Link>
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaStar className="text-purple-500 mr-2" />
          One of the prestigious debate clubs in the heart of port city Chittagong...
        </Link> */}
        <Link className="mr-12 text-3xl font-bold flex items-center" to="/">
          <FaStar className="text-purple-500 mr-2" />
          5th PUDS BP Casual's coming next!
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
