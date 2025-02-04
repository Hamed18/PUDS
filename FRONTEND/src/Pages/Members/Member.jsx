import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Member = () => {
  const [executiveCommittee, setExecutiveCommittee] = useState([]);

  useEffect(() => {
    fetch("/executiveCommittee.json")
      .then((res) => res.json())
      .then((data) => setExecutiveCommittee(data.executiveCommittee))
      .catch((error) => console.error("Failed to load", error));
  }, []);

  // Animation variants for reusable settings
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
  }, []);

  return (
    <>
      <div className="">
        <div className="my-2 md:my-4 px-2">
          <h3 className="text-center text-violet-500 font-bold text-2xl md:text-3xl">12th Executive Committee</h3>
          <p className="text-center my-2 md:my-4 text-black-500 leading-relaxed text-xl">
            The Executive Body of the Premier University Debating Society (PUDS)
            is the heart and soul of the club's operations. Through their vision and dedication,
            the Executive Body continually elevates PUDS, creating a lasting positive
            impact on its members and the broader community.
          </p>
        </div>

        {/* Responsive grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-10 px-5"
          initial="hidden"
          animate="visible"
        >
          {executiveCommittee.map((res, index) => (
            <motion.div
              key={res.id}
              className="card bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.figure
                className="h-60 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={res.photoUrl}
                  alt={`${res.name}'s photo`}
                  className="w-full h-full object-cover"
                />
              </motion.figure>
              <div className="p-2 md:py-4 text-center">
                  <h2 className="font-bold text-xl text-violet-500">{res.name}</h2>
                  <p className="text-violet-500 font-bold text-sm">{res.position}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        to={res.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="w-8 h-8 text-blue-600" />
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href={`tel:${res.whatsApp}`}
                      >
                        <FaWhatsapp className="w-8 h-8 text-green-500" />
                      </a>
                    </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Member;
