import Banner from "../../Shared/Banner";
import About from "./About";
import Achievements from "./Achievements";
import BreakingNews from "./BreakingNews";
import CurrentEvent from "./CurrentEvent";
import CurrentPanel from "./CurrentPanel";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<BreakingNews></BreakingNews>
			<About></About>
			<Achievements></Achievements>
			<CurrentEvent></CurrentEvent>
			<CurrentPanel />
		</div>
	);
};

export default Home;