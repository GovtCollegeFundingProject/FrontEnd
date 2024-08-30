import React, { useState } from 'react';

const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Data:', paymentData);
    // Add your logic to handle the payment data here
  };

  const data = {
    fullName: "John Doe",
    phoneNumber: "+91 1234567890",
    whatsappNumber: "+91 1234567890",
    aadharNumber: "1234 5678 1234",
    panNumber: "1234 5678 1234",
    taxExemptionReceipt: {
      question: "Are you looking for TAX exemption receipt (Under Section 80G)",
      answer: "No",
    },
    keepIdentityAnonymous: {
      question: "Do you want to keep your identity anonymous",
      answer: "No"
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 flex space-x-8">
        <div className="w-1/2">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="font-semibold">Full Name</label>
              <p className="mt-1">{data.fullName}</p>
            </div>
            <div>
              <label className="font-semibold">Phone Number</label>
              <p className="mt-1">{data.phoneNumber}</p>
            </div>
            <div>
              <label className="font-semibold">WhatsApp Number</label>
              <p className="mt-1">{data.whatsappNumber}</p>
            </div>
            <div>
              <label className="font-semibold">Aadhar Number</label>
              <p className="mt-1">{data.aadharNumber}</p>
            </div>
            <div>
              <label className="font-semibold">PAN</label>
              <p className="mt-1">{data.panNumber}</p>
            </div>
            <div>
              <label className="font-semibold">{data.taxExemptionReceipt.question}</label>
              <div className="mt-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="taxExemption"
                    checked={data.taxExemptionReceipt.answer === "Yes"}
                    readOnly
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="taxExemption"
                    checked={data.taxExemptionReceipt.answer === "No"}
                    readOnly
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold">{data.keepIdentityAnonymous.question}</label>
              <div className="mt-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="keepIdentityAnonymous"
                    checked={data.keepIdentityAnonymous.answer === "Yes"}
                    readOnly
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="keepIdentityAnonymous"
                    checked={data.keepIdentityAnonymous.answer === "No"}
                    readOnly
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Payment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-semibold">Amount</label>
              <input
                type="text"
                name="amount"
                value={paymentData.amount}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="font-semibold">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="font-semibold">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="font-semibold">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="font-semibold">Country</label>
              <input
                type="text"
                name="country"
                value={paymentData.country}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center justify-center mt-8">
              <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800">
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
