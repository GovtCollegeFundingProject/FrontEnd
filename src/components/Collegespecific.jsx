// src/App.js

import React, { useState } from "react";
import Steps from "./Steps";
import UserDetails from "./UserDetails";
import DistrictSelection from "./DistrictSelection";
import CollegeSelection from "./CollegeSelection";
import PaymentForm from "./PaymentForm";

const user = {
  name: "John Doe",
  phone: "+91 1234567890",
  whatsapp: "+91 1234567890",
  aadhar: "1234 5678 1234",
  pan: "1234 5678 1234",
};

function Collegespecific() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");

  const renderRightComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <DistrictSelection
            setSelectedDistrict={setSelectedDistrict}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <CollegeSelection
            district={selectedDistrict}
            setSelectedCollege={setSelectedCollege}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return <PaymentForm />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <Steps currentStep={currentStep} />
      <div className="flex">
        <UserDetails user={user} />
        {renderRightComponent()}
      </div>
    </div>
  );
}

export default Collegespecific;
