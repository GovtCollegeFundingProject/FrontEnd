// src/components/UserDetails.js

import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div className="w-1/2 bg-white p-6 shadow-md">
      <h2 className="text-blue-700 font-bold text-lg mb-4">Your Details</h2>
      <p>
        <strong>Full Name:</strong> {user.name}
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phone}
      </p>
      <p>
        <strong>WhatsApp Number:</strong> {user.whatsapp}
      </p>
      <p>
        <strong>Aadhar Number:</strong> {user.aadhar}
      </p>
      <p>
        <strong>PAN:</strong> {user.pan}
      </p>
      <div className="mt-4">
        <p>
          <strong>
            Are you looking for TAX exemption receipt (Under Section 80G)
          </strong>
        </p>
        <div className="flex items-center mt-2">
          <input type="radio" id="taxYes" name="taxExemption" value="yes" />
          <label htmlFor="taxYes" className="ml-2">
            Yes
          </label>
          <input
            type="radio"
            id="taxNo"
            name="taxExemption"
            value="no"
            className="ml-4"
          />
          <label htmlFor="taxNo" className="ml-2">
            No
          </label>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <strong>Do you want to keep your identity anonymous?</strong>
        </p>
        <div className="flex items-center mt-2">
          <input type="radio" id="anonYes" name="anonymous" value="yes" />
          <label htmlFor="anonYes" className="ml-2">
            Yes
          </label>
          <input
            type="radio"
            id="anonNo"
            name="anonymous"
            value="no"
            className="ml-4"
          />
          <label htmlFor="anonNo" className="ml-2">
            No
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
