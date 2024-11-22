import { useEffect, useState } from "react";
import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";
import { Link } from "react-router-dom";

const Member = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/members.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  console.log(data);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center place-items-center gap-10 my-10">
        {data.map((res) => (
          <div key={res.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <div className="text-center">
                {" "}
                <h2 className="font-bold text-xl">{res.name}</h2>
                <p className="text-gray-600">{res.designation}</p>
                <div className="flex justify-center gap-7 my-5">
                  <Link to={res.facebook}>
                    <img
                      src={facebook}
                      className="w-8 hover:transition duration-200 ease-in-out hover:w-9 "
                    />
                  </Link>
                  <Link to={res.linkedin}>
                    <img
                      src={linkedin}
                      className="w-8 hover:transition duration-200 ease-in-out hover:w-9 "
                    />
                  </Link>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Member;
