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

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

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
            goBack={goBack}  // Pass goBack to CollegeSelection
          />
        );
      case 3:
        return (
          <PaymentForm 
            goBack={goBack}  // Pass goBack to PaymentForm
          />
        );
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
