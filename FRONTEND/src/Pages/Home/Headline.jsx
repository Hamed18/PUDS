import { Link } from "react-router-dom";
import { FaBullhorn, FaTimes, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Headline = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide component when not visible

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-violet-500 py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg">
      {/* Close button */}
      {/* <button
        className="absolute top-2 right-2 md:right-4 text-white hover:text-gray-300 transition"
        onClick={() => setIsVisible(false)}
        aria-label="Close"
      >
        <FaTimes className="text-xl md:text-2xl ml-2 space-x-2 md:space-x-4" />
      </button> */}

      {/* Message with icon */}
      <div className="flex items-center gap-3">
        <FaBullhorn className="text-yellow-300 text-2xl md:text-4xl" />
        <h3 className="text-sm md:text-xl font-semibold md:font-bold text-white">
          5th PUDS BP Casual Coming Soon!
        </h3>
      </div>

      {/* Register Now button */}
      <Link
        to="https://www.facebook.com/groups/307162657708"
        target="_blank"
      >
        <button className="flex items-center text-sm md:text-xl font-semibold md:font-bold bg-yellow-400 hover:bg-yellow-500 text-violet-500 px-2 md:px-3 py-1 md:py-2 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg ">
          View Event
          <FaArrowRight className="ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default Headline;
