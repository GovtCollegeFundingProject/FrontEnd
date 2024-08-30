import React from 'react';
import { useNavigate } from 'react-router';

const ContributionDetails = () => {
    const navigate = useNavigate();

    const data = {
        fullName: "John Doe",
        phoneNumber: "+91 1234567890",
        whatsappNumber: "+91 1234567890",
        aadharNumber: "1234 5678 1234",
        panNumber: "1234 5678 1234",
        taxExemptionReceipt: {
            question: "Are you looking for TAX exemption receipt (Under Section 80G)",
            answer: "Yes",
            mandatoryFields: ["Aadhar Number", "PAN Number"]
        },
        keepIdentityAnonymous: {
            question: "Do you want to keep your identity anonymous",
            answer: "Yes"
        }
    };

    const handleEdit = () => {
        navigate('/');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl w-full">
                <h2 className="text-xl font-bold text-blue-700 mb-6">General Specific Contribution</h2>
                <h3 className="text-lg font-semibold mb-6">Your Details</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="font-semibold">Full Name</p>
                        <p className="text-gray-800">{data.fullName}</p>
                    </div>
                    <div>
                        <p className="font-semibold">WhatsApp number</p>
                        <p className="text-gray-800">{data.whatsappNumber}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Phone Number</p>
                        <p className="text-gray-800">{data.phoneNumber}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="font-semibold">Aadhar Number</p>
                        <p className="text-gray-800">{data.aadharNumber}</p>
                    </div>
                    <div>
                        <p className="font-semibold">PAN</p>
                        <p className="text-gray-800">{data.panNumber}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <p className="font-semibold">{data.taxExemptionReceipt.question}</p>
                    <div className="flex items-center mt-2">
                        <div className="flex items-center mr-4">
                            <input type="radio" name="taxReceipt" checked={data.taxExemptionReceipt.answer === "Yes"} readOnly className="mr-2" />
                            <p className="text-gray-800">Yes</p>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="taxReceipt" checked={data.taxExemptionReceipt.answer === "No"} readOnly className="mr-2" />
                            <p className="text-gray-800">No</p>
                        </div>
                    </div>
                    {data.taxExemptionReceipt.answer === "Yes" && (
                        <p className="text-red-600 text-sm mt-2">
                            If Yes, Aadhar and PAN Number are mandatory
                            <button 
                                onClick={handleEdit} 
                                className="bg-[#06038D] text-white ml-2 py-1 px-3"
                            >
                                Edit
                            </button>
                        </p>
                    )}
                </div>

                <div className="mb-6">
                    <p className="font-semibold">{data.keepIdentityAnonymous.question}</p>
                    <div className="flex items-center mt-2">
                        <div className="flex items-center mr-4">
                            <input type="radio" name="identityAnonymous" checked={data.keepIdentityAnonymous.answer === "Yes"} readOnly className="mr-2" />
                            <p className="text-gray-800">Yes</p>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" name="identityAnonymous" checked={data.keepIdentityAnonymous.answer === "No"} readOnly className="mr-2" />
                            <p className="text-gray-800">No</p>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-center">
                <button className="bg-[#06038D] text-lg text-white py-2 px-10">
                    NEXT
                </button>
                </div>
            </div>
        </div>
    );
};

export default ContributionDetails;
