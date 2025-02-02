import { useEffect } from "react";
import UnderConstruction from "../../Shared/UnderConstruction";
import Headline from "../Home/Headline";
import CurrentFest from "./CurrentFest";
import EventNews from "./EventNews";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
  }, []);
  return (
    <div className="">
      <EventNews></EventNews>
      <CurrentFest></CurrentFest>
      {/* <UnderConstruction></UnderConstruction> */}
      <div className="my-2 pb-4">
        <Headline></Headline>
      </div>
    </div>
  );
};

export default Event;
