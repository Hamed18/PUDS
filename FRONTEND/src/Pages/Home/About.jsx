import a from "../../../src/assets/Images/cover1.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start my-12">
      <div className="text-center md:text-left md:w-1/2 space-y-4 p-4">
        <h3 className="font-bold text-lg md:text-xl">
          Wonder what PUDS is all about?
        </h3>
        <h2 className="font-bold text-2xl lg:text-3xl text-violet-800 md:text-3xl">
          Upgrade Yourself: From Enthusiasts to Experts
        </h2>
        <p className="text-lg md:text-xl">
          At PUDS (Premier University Debating Society), we believe in
          practicing and organizing, preparing the next generation. Our mission
          is to offer Premier University students a platform to engage in debate
          competition, business case and various related programs regardless of
          their department. This community not only grows together but also
          provides a promising platform for both current and future
          contributors.
        </p>
        {/* <p className="text-sm md:text-base lg:text-lg">
          PUDS's success extends beyond the university premises, reaching
          industries and academia nationally. Our members are potential
          contributors, destined to lead and inspire the next generation. We
          strive to bring impactful changes within and beyond our community
          through visionary, imaginative, and efficient collaboration. Moving
          forward with a vision to innovate, impact, and inspire as our motto
          says: Upgrade Yourself!
        </p> */}
      </div>

      <div className="relative md:w-1/2">
        <img src="https://res.cloudinary.com/df5utoo6u/image/upload/v1736009707/FestCover_srjip2.jpg" alt="Description of image" className="rounded-xl w-full" />

        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 rounded-b-xl px-4 py-2">
          <p className="text-white text-center text-lg md:text-xl font-semibold">
            A united and vibrant community with the goal of fostering debate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
