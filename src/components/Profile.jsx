import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/authSlice';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const token = useSelector(selectToken);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}user/getUser`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProfileData(response.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, [token]);

    if (!profileData) return <div>Loading...</div>;

    const { user, individual } = profileData;

    return (
        <div className="p-4 w-full">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Profile</h2>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Your Details</h3>
                <div className="mt-2">
                    <div className="mb-2">
                        <span className="font-semibold">Select type of Resident:</span>
                        <div>{individual.residency ? 'Resident of India' : 'Non-Resident of India'}</div>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Select Salutation:</span>
                        <div>{individual.salutation || 'N/A'}</div>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Full Name:</span>
                        <div>{individual.name || 'N/A'}</div>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Phone Number:</span>
                        <div>{user.phoneNumber || 'N/A'}</div>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">WhatsApp number:</span>
                        <div>{user.whatsappCompatible ? user.phoneNumber : 'N/A'}</div>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Identification Details</h3>
                <div className="mt-2">
                    <div className="mb-2">
                        <span className="font-semibold">PAN:</span>
                        <div>{individual.pan || 'N/A'}</div>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Additional Details</h3>
                <div className="mt-2">
                    <div className="mb-2">
                        <span className="font-semibold">Tax Exemption Required:</span>
                        <div>{user.taxExemptionRequired ? 'Yes' : 'No'}</div>
                    </div>
                    <div className="mb-2">
                        <span className="font-semibold">Anonymous Donation:</span>
                        <div>{user.anonymous ? 'Yes' : 'No'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
