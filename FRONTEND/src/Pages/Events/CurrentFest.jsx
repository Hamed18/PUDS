import a from "../../../src/assets/Events/gatewayCover1.jpg";
import CurrentFestBanner from "./CurrentFestBanner";

const CurrentFest = () => {
  return (
    <div>
      <CurrentFestBanner></CurrentFestBanner>
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
        <h1 className="text-2xl font-bold text-center text-violet-600 mb-4">
          6th PUDS Gateway 2024 Workshops
        </h1>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-violet-500">
              What was it?
            </h2>
            <p className="my-4 text-center text-gray-700">
              "Premier University Debating Society" is bringing the "6th PUDS Gateway 2024" for newcomers — a grand initiative aimed at self-development and skill enhancement. The goal of PUDS is to foster students as rational and enlightened individuals through the practice of free thinking.
            </p>
          </div>

          <div className="border-b pb-4">
		    <h1 className="text-2xl font-bold text-center text-violet-600 mb-4">
               Segments
            </h1>

            <h2 className="text-xl font-semibold text-violet-500">
              1. Debater
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-700">
              <li>
                Participants will have the opportunity to engage in Asian and British parliamentary-style debates (in both Bengali and English).
              </li>
              <li>
                Through debate, you will enhance your logical thinking and self-expression skills.
              </li>
            </ul>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-violet-500">
              2. Organizers
            </h2>
            <p className="text-gray-700">
              This workshop is focused on acquiring leadership, communication, and organizational skills.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-violet-500">
              3. Business Case Solver
            </h2>
            <p className="text-gray-700">
              This workshop aims to improve problem-solving skills related to various real-life issues and develop habits for generating ideas and plans.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-violet-500">
              4. Creative Content Creator
            </h2>
            <ul className="list-disc list-inside ml-4 text-gray-700">
              <li>
                Opportunity to gain skills in social media, video content, and content writing.
              </li>
              <li>
                Learn strategies to present your thoughts and ideas creatively to the public.
              </li>
            </ul>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-violet-500">
              5. Photographer
            </h2>
            <p className="text-gray-700">
              Development of cinematography, visual, and audio skills. A specialized workshop for those interested in photography or videography.
            </p>
          </div>

          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-violet-500">
              6. Public Speaking
            </h2>
            <p className="text-gray-700">
              This workshop is designed to boost self-confidence, presentation skills, and audience management abilities.
            </p>
          </div>

          <div className="text-gray-700">
		    <h1 className="text-2xl font-bold text-center text-violet-600 mb-4">
               Prerequisites
            </h1>
            <p>✓ No prior experience is required to participate.</p>
            <p>✓ Details of the debate competition:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Language of debate: Bengali</li>
              <li>Format of debate: Bengali parliamentary</li>
              <li>Number of members per team: 3 members</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentFest;
