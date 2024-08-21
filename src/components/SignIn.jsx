import React, { useState } from 'react';
// import logo from '../assets/Google';

const Signin = () => {
  const [selectedTab, setSelectedTab] = useState('individual');

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 border border-gray-300 shadow-lg bg-gray-100">
        <div className="flex justify-around mb-6">
          <h2 
            className={`cursor-pointer text-lg pb-2 border-b-2 ${
              selectedTab === 'individual' ? 'border-blue-900 text-blue-900 font-bold' : 'border-transparent'
            }`}
            onClick={() => setSelectedTab('individual')}
          >
            Individual
          </h2>
          <h2 
            className={`cursor-pointer text-lg pb-2 border-b-2 ${
              selectedTab === 'company' ? 'border-blue-900 text-blue-900 font-bold' : 'border-transparent'
            }`}
            onClick={() => setSelectedTab('company')}
          >
            Company
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <input 
            type="text" 
            placeholder="Enter Username" 
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          </div>
          <button 
            className="w-full p-3 text-lg bg-blue-900 text-white rounded hover:scale-105 transition-transform"
          >
            Sign In
          </button>
          <p className="my-4 text-gray-600">or</p>
          <button 
            className="w-full p-3 text-lg bg-gray-400 text-black rounded hover:scale-105 transition-transform"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
