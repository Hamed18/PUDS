import { Link } from "react-router-dom";
import a from "../../../src/assets/Events/gatewayCover1.jpg";
import { FaArrowRight } from "react-icons/fa";

  // const handleScrollToTop = () => {
  //   // Scroll to the top of the page
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Add smooth scrolling
  //   });
  // };


const CurrentEvent = () => {
  return (
    <div className="flex flex-col items-center my-2 md:my-4">
      <h2 className="font-bold text-3xl md:text-4xl text-violet-500 text-center py-2">Recent Event</h2>
      <Link to="/events">
        <img
          src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736013961/gatewayCover1_bkarra.jpg"
          alt="Current Event"
          className="py-2 md:py-4 max-w-full h-auto rounded-lg shadow-md"
        />
      </Link>
      <Link to="/events" /*onClick={handleScrollToTop}*/ >
        <button className="flex items-center text-blue-500 underline hover:text-blue-700 mt-4 px-4 py-2 rounded-none">
          <h3 className="mr-2 text-2xl">View Event</h3>
          <FaArrowRight className="text-blue-500" />
        </button>
      </Link>
    </div>
  );
};

export default CurrentEvent;
