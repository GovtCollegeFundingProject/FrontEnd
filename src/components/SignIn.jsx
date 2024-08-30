import GoogleIcon from '@mui/icons-material/Google';
import LessThanIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router'
import React, { useState } from 'react';

const Signin = () => {
  const navigate = useNavigate();
  const handleClicks = () => {
    navigate('/');
  };
  const [selectedTab, setSelectedTab] = useState('individual');
  const [formData, setFormData] = useState({
    mail: '',
    password: '',
    remember: false,
  });

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
              name="mail"
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
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
              </div>
            </div>
            <button
              className="w-full p-3 text-md bg-blue-900 text-white font-semibold rounded"
            >
              Sign In
            </button>
            <p className="my-4 text-center font-semibold text-lg text-gray-600">or</p>
            <button
              className="w-full p-3 text-md bg-[#C1C1C1] text-black font-semibold rounded"
            >
              <GoogleIcon className="text-lg text-black mr-3" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
