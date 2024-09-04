// src/components/DistrictSelection.js

import React from "react";

const DistrictSelection = ({ setSelectedDistrict, setCurrentStep }) => {
  const districts = [
    "Anantapur",
    "Anakapalle",
    "Annamayya",
    "Alluri Seetharama Raju",
    "Ntr",
    "Eluru",
  ];

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
    setCurrentStep(2);
  };

  return (
    <div className="w-1/2 bg-white p-6 shadow-md">
      <h2 className="text-blue-700 font-bold text-lg mb-4">Select District</h2>
      <div className="space-y-4">
        {districts.map((district, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={district}
              name="district"
              value={district}
              onClick={() => handleDistrictClick(district)}
            />
            <label htmlFor={district} className="ml-2">
              {district}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistrictSelection;
