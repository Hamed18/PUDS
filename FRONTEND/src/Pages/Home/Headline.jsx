import { Link } from "react-router-dom";
import { FaBullhorn, FaTimes, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Headline = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null; // Hide component when not visible

	return (
		<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between bg-violet-500 p-2 md:p-4 pr-10 md:pr-12 rounded-lg shadow-lg gap-4">
			{/* Close button */}
			<button
				className="absolute top-2 right-2 md:right-4 text-white hover:text-gray-300 transition"
				onClick={() => setIsVisible(false)}
				aria-label="Close"
			>
				<FaTimes className="text-xl md:text-2xl" />
			</button>

			{/* Message with icon */}
			<div className="flex items-start md:items-center text-white space-x-2">
				<FaBullhorn className="text-yellow-300 text-4xl md:text-4xl" />
				<h3 className="text-sm md:text-xl lg:text-2xl font-semibold leading-tight">
					Recruitment of new members is going on!
				</h3>
							{/* Register Now button with icon */}
			<Link
				to="https://docs.google.com/forms/d/e/1FAIpQLSd1CI_pErJQuAYz5qbxjVbWyW4LXc1E4aWLFXVupdww2AS8-w/viewform"
				target="_blank"
				className="self-start md:self-auto"
			>
				<button className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-violet-900 font-bold px-2 py-1 md:px-4 md:py-2 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg text-sm md:text-base">
					Register Now
					<FaArrowRight className="ml-2" />
				</button>
			</Link>

			</div>

		</div>
	);
};

export default Headline;
