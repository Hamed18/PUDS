import { Link } from "react-router-dom";
import a from "../../../src/assets/Events/gatewayCover1.jpg";
import { FaArrowRight } from "react-icons/fa";

const CurrentEvent = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <h2 className="my-4 font-bold text-3xl text-center">Latest Event</h2>
      <Link to="/events">
        <img
          src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736013961/gatewayCover1_bkarra.jpg"
          alt="Current Event"
          className="my-4 max-w-full h-auto rounded-lg shadow-md"
        />
      </Link>
      <Link to="/events">
        <button className="flex items-center text-blue-500 underline hover:text-blue-700 mt-4 px-4 py-2 rounded-none">
          <h3 className="mr-2 text-2xl">View Event</h3>
          <FaArrowRight className="text-blue-500" />
        </button>
      </Link>
    </div>
  );
};

export default CurrentEvent;
