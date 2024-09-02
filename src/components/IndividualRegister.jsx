import React, { useState, useEffect } from 'react';
import LessThanIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router';
import countries from './Countries';

const IndividualRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    salutation: '',
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    panNumber: '',
    password: '',
    confirmPassword: '',
    taxExemption: 'no',
    anonymous: 'no',
    isWhatsappSame: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'isWhatsappSame') {
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


  const validateForm = () => {
    let formErrors = {};
    if (formData.taxExemption === 'yes' && !formData.panNumber) {
      formErrors.panNumber = 'PAN number is required for tax exemption.';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/');
    } else {
      console.log("NOPE!");
    }
  };

  useEffect(() => {
    const validateForm = () => {
      const { fullName, phoneNumber, password, confirmPassword, whatsappNumber } = formData;
      if (fullName && phoneNumber && password && confirmPassword && whatsappNumber && password === confirmPassword) {
        return true;
      }
      return false;
    };

    setIsFormValid(validateForm() && Object.keys(errors).length === 0);
  }, [formData, errors]);

  return (
    <>
      <div className="flex flex-col ml-5 mt-3">
        <div className="flex flex-row hover:cursor-pointer" onClick={() => navigate('/register')}>
          <LessThanIcon className='text-2xl text-gray-800 cursor-pointer mt-2' />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Now Register as an Individual :</h2>
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
                name="fullName"
                placeholder="Enter Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <div className="flex space-x-2 items-center">
                <input
                  type="text"
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
                  name="isWhatsappSame"
                  checked={formData.isWhatsappSame}
                  onChange={handleChange}
                  className="mr-1.5 ml-2"
                />
                <label htmlFor="isWhatsappSame" className="text-sm text-gray-700 mb-0.5">WhatsApp number same as phone number</label>
              </div>
              <input
                type="text"
                name="whatsappNumber"
                placeholder="WhatsApp Number *"
                value={formData.whatsappNumber}
                onChange={handleChange}
                disabled={formData.isWhatsappSame}
                className={`p-2 border border-gray-300 rounded ${formData.isWhatsappSame ? 'bg-gray-200' : ''}`}
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
                name="panNumber"
                placeholder="PAN (optional)"
                value={formData.panNumber}
                onChange={handleChange}
                className={`p-2 border border-gray-300 rounded ${errors.panNumber ? 'border-red-500' : ''}`}
              />
              {errors.panNumber && (
                <p className="text-red-500 text-sm mt-1 col-span-2">{errors.panNumber}</p>
              )}
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-800">Are you looking for TAX exemption receipt? (Under Section 80G)</p>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="taxExemption"
                    value="yes"
                    checked={formData.taxExemption === 'yes'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="taxExemption"
                    value="no"
                    checked={formData.taxExemption === 'no'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>No</span>
                </label>
              </div>
              {formData.taxExemption === 'yes' && (
                <p className="text-red-600 mt-2 text-sm">
                  Note - If Yes, Aadhar and PAN Number are mandatory
                </p>
              )}
            </div>

            <div className="mb-6">
              <p className="font-semibold text-gray-800">Do you want to keep your identity anonymous?</p>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="anonymous"
                    value="yes"
                    checked={formData.anonymous === 'yes'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="anonymous"
                    value="no"
                    checked={formData.anonymous === 'no'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-1/5 p-3 text-lg bg-blue-900 text-white rounded transition-transform"
                disabled={!isFormValid}
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

export default IndividualRegister;
