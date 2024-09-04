import React, { useEffect, useState } from "react";

const CollegeSelection = ({ district, setSelectedCollege, setCurrentStep, goBack }) => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Filter colleges based on the selected district
    const allColleges = {
      Anakapalli: [
        "Visakha Govt Jr College",
        "Dr Vs k Govt Jr College",
        "Govt Jr College, Pendurthy",
      ],
      // Add other districts and their respective colleges here...
    };
    setColleges(allColleges[district] || []);
  }, [district]);

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
    setCurrentStep(3);
  };

  return (
    <div className="w-1/2 bg-white p-6 shadow-md">
      <h2 className="text-blue-700 font-bold text-lg mb-4">Select College</h2>
      <div className="space-y-4">
        {colleges.map((college, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={college}
              name="college"
              value={college}
              onClick={() => handleCollegeClick(college)}
            />
            <label htmlFor={college} className="ml-2">
              {college}
            </label>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start mt-8">
        <button onClick={goBack} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
          Back
        </button>
      </div>
    </div>
  );
};

export default CollegeSelection;
