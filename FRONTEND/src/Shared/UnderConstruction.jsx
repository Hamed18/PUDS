import { Link } from "react-router-dom";
import img from "../../src/assets/later.png";

const UnderConstruction = () => {
	return (
		<div className="my-12 md:my-24">
		  <h3 className="text-center text-xl mb-4">This Page Is Under Construction!</h3>
		  <div className="flex items-center justify-center">
		      <img src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736009708/later_sod2rc.png" alt="" className="flex items-center justify-center w-[400px] h-[300px]"/>
		  </div>
          <div className="text-center my-4">
			<button>
			   <Link to="/" className="btn btn-outline btn-error text-center font-bold p-2 rounded-xl flex justify-center">Home</Link>
			</button>
		  </div>
		</div>
	);
};

export default UnderConstruction;