import React, { useState, useEffect } from 'react';
import LessThanIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { selectToken } from '../redux/authSlice';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompanyRegister = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const [formData, setFormData] = useState({
    role: 'COMPANY',
    salutation: '',
    name: '',
    contactPersonName: '',
    email: '',
    phoneNumber: '',
    whatsappNumber: '',
    pan: '',
    companyID: '',
    password: '',
    confirmPassword: '',
    taxExemptionRequired: false,
    anonymous: false,
    whatsappCompatible: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value === 'true' || value === 'false' ? value === 'true' : value,
      });
    } else if (name === 'whatsappCompatible') {
      setFormData({
        ...formData,
        [name]: checked,
        whatsappNumber: checked ? formData.phoneNumber : '',
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const validateForm = () => {
    let isValid = true;

    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters long!', { theme: 'dark' });
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.', { theme: 'dark' });
      isValid = false;
    }
    if (formData.pan && formData.pan.length !== 10) {
      toast.error('PAN must be exactly 10 characters long!', { theme: 'dark' });
      isValid = false;
    }
    if (formData.taxExemptionRequired && !formData.pan.trim()) {
      toast.error('PAN number is required for tax exemption.', { theme: 'dark' });
      isValid = false;
    }
    if (!formData.companyID.trim()) {
      toast.error('Company ID (UIN) is required.', { theme: 'dark' });
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const formDataToSend = {
      ...formData,
      taxExemptionRequired: formData.taxExemptionRequired,
      anonymous: formData.anonymous,
    };

    axios.post(`${BASE_URL}auth/registerCompany/`, formDataToSend, {
      withCredentials: true,
    })
      .then((response) => {
        toast.success('Company registered successfully!', { position: 'top-right', autoClose: 3000, theme: 'dark' });
        navigate('/signin');
      })
      .catch((error) => {
        toast.error(`Error: ${error.response?.data.message || error.message}`, { position: 'top-right', autoClose: 3000, theme: 'dark' });
      });
  };

  useEffect(() => {
    const checkFormValidity = () => {
      const { name, phoneNumber, password, confirmPassword, companyID } = formData;
      const isFormValid =
        name &&
        phoneNumber &&
        password &&
        confirmPassword &&
        companyID &&
        password === confirmPassword &&
        (!formData.taxExemptionRequired || formData.pan.trim());

      setIsFormValid(isFormValid);
    };

    checkFormValidity();
  }, [formData]);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col ml-5 mt-3">
        <div className="flex flex-row hover:cursor-pointer" onClick={() => navigate('/register')}>
          <LessThanIcon className="text-2xl text-gray-800 cursor-pointer mt-2" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Now Register as a Company :</h2>
        </div>
        <p className="mb-2 text-xl text-gray-600 ml-6">Please fill the form</p>
      </div>
      <div className="flex justify-center items-center h-full mt-2 ml-3">
        <div className="w-full px-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <p className="mb-2 font-semibold text-gray-800">Select Salutation</p>
              <div className="flex space-x-4">
                {['Mr.', 'Ms.', 'Mrs.', 'Dr.'].map((salutation) => (
                  <label key={salutation} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="salutation"
                      value={salutation}
                      checked={formData.salutation === salutation}
                      onChange={handleChange}
                      className="form-radio text-gray-700"
                    />
                    <span>{salutation}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Company Name *"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail Id *"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="contactPersonName"
                placeholder="Contact Person Name *"
                value={formData.contactPersonName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <div className="flex space-x-2 items-center">
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number *"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded flex-1"
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="whatsappCompatible"
                  checked={formData.whatsappCompatible}
                  onChange={handleChange}
                  className="mr-1.5 ml-2"
                />
                <label htmlFor="whatsappCompatible" className="text-sm text-gray-700 mb-0.5">
                  WhatsApp number same as phone number
                </label>
              </div>
              <input
                type="number"
                name="whatsappNumber"
                placeholder="WhatsApp Number *"
                value={formData.whatsappNumber}
                onChange={handleChange}
                disabled={formData.whatsappCompatible}
                className={`p-2 border border-gray-300 rounded ${formData.whatsappCompatible ? 'bg-gray-200' : ''}`}
              />
              <input
                type="password"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password *"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="pan"
                placeholder="PAN (optional)"
                value={formData.pan}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="companyID"
                placeholder="Company ID (UIN) *"
                value={formData.companyID}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-800">Are you looking for TAX exemption receipt? (Under Section 80G)</p>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="taxExemptionRequired"
                    value="true"
                    checked={formData.taxExemptionRequired === true}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    name="taxExemptionRequired"
                    value="false"
                    checked={formData.taxExemptionRequired === false}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-gray-800">Do you want to remain anonymous while making this donation?</p>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="anonymous"
                    value="true"
                    checked={formData.anonymous === true}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="anonymous"
                    value="false"
                    checked={formData.anonymous === false}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-1/5 p-3 text-lg bg-blue-900 text-white rounded transition-transform ${
                  !isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyRegister;


