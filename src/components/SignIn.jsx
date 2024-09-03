import LessThanIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router'
import React, { useState } from 'react';
import axios from 'axios';  
import { useDispatch, useSelector } from 'react-redux';
import { selectToken, setMail, setToken } from '../redux/authSlice';
const Signin = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const handleClicks = () => {
    navigate('/');
  };
  const [selectedTab, setSelectedTab] = useState('individual');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(`${BASE_URL}auth/login/`, formData, {
        withCredentials: true,
      });
  
      if (response && response.data) {
        dispatch(setToken(response.data.token));
        console.log(response.data.user?.email);
        dispatch(setMail(response.data.user?.email));
        console.log(response.data);
  
        if (token) {
          navigate('/');
        }
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <>
      <div className=" flex flex-row hover:cursor-pointer mt-20 ml-52" onClick={handleClicks} >
        <LessThanIcon className=" text-2xl text-gray-800 cursor-pointer mt-2" />
        <h2 className="text-3xl font-medium text-[#06038D]">Sign In</h2>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-full max-w-md p-8 border border-gray-300 shadow-2xl">
          <div className="flex justify-around mb-6">
            <h2
              className={`cursor-pointer text-lg pb-2 border-b-2 ${selectedTab === 'individual' ? 'border-blue-900 text-blue-900 font-bold' : 'border-transparent'
                }`}
              onClick={() => setSelectedTab('individual')}
            >
              Individual
            </h2>
            <h2
              className={`cursor-pointer text-lg pb-2 border-b-2 ${selectedTab === 'company' ? 'border-blue-900 text-blue-900 font-bold' : 'border-transparent'
                }`}
              onClick={() => setSelectedTab('company')}
            >
              Company
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="">
              <h2 className="text-sm text-left text-[#8E8E8E] mb-3">Enter Details</h2>
            </div>
            <input
              type="email"
              name="email"
              placeholder="E-Mail Id"
              value={formData.mail}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="flex justify-between items-center w-full mb-4">
              <div className="text-sm">
                <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
              </div>
            </div>
            <button
              className="w-full p-3 text-md bg-blue-900 text-white font-semibold rounded"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
