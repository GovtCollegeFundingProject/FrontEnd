import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/authSlice";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const token = useSelector(selectToken);

  // Handle navigation based on role
  const handleEdit = () => {
    if (profileData.user.role === "INDIVIDUAL") {
      navigate("/profile/individualedit", {
        state: { data: user, userDetails },
      });
    } else if (profileData.user.role === "COMPANY") {
      navigate("/profile/companyedit", { state: { data: user, userDetails } });
    }
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}user/getUser`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response.data);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) return <div>Loading...</div>;

  const { user, individual, company } = profileData;
  // const User = user;
  const userDetails = individual || company || {};
  // console.log(user, individual);
  const handleSalutationChange = (event) => {
    console.log(`Salutation changed to: ${event.target.value}`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-700">Profile</h2>
        <button className="text-blue-700" onClick={handleEdit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
          Edit
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Your Details
        </h3>
        <div className="border-t border-gray-300 pt-4">
          <div className="mb-4">
            <span className="block font-semibold text-gray-600">
              Salutation:
            </span>
            <div className="flex items-center space-x-4 mt-2">
              {["Mr.", "Ms.", "Mrs.", "Dr."].map((salutation) => (
                <label key={salutation} className="flex items-center">
                  <input
                    type="radio"
                    name="salutation"
                    value={salutation}
                    checked={userDetails.salutation === salutation}
                    onChange={handleSalutationChange}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">{salutation}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <span className="block font-semibold text-gray-600">
              Full Name:
            </span>
            <div className="mt-2">{userDetails.name || "N/A"}</div>
          </div>
          <div className="mb-4">
            <span className="block font-semibold text-gray-600">
              Phone Number:
            </span>
            <div className="mt-2">{user.phoneNumber || "N/A"}</div>
          </div>
          <div className="mb-4">
            <span className="block font-semibold text-gray-600">
              WhatsApp number:
            </span>
            <div className="mt-2">
              {user.whatsappCompatible ? user.phoneNumber : "N/A"}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Identification Details
        </h3>
        <div className="border-t border-gray-300 pt-4">
          <div className="mb-4">
            <span className="block font-semibold text-gray-600">PAN:</span>
            <div className="mt-2">{userDetails.pan || "N/A"}</div>
          </div>
          {userDetails.aadhar && (
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">Aadhar:</span>
              <div className="mt-2">{userDetails.aadhar}</div>
            </div>
          )}
        </div>
      </div>

      {userDetails.residency && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Residency Details
          </h3>
          <div className="border-t border-gray-300 pt-4">
            <div className="mb-4">
              <span className="block font-semibold text-gray-600">
                Residency:
              </span>
              <div className="mt-2">{userDetails.residency}</div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Additional Details
        </h3>
        <div className="border-t border-gray-300 pt-4">
          <div className="mb-4">
            <span className="block font-semibold text-gray-600">
              Tax Exemption Required:
            </span>
            <div className="mt-2">
              {user.taxExemptionRequired ? "Yes" : "No"}
            </div>
          </div>
          <div className="mb-4">
            <span className="block font-semibold text-gray-600">
              Anonymous Donation:
            </span>
            <div className="mt-2">{user.anonymous ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
