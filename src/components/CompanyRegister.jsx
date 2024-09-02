import React, { useState, useEffect } from 'react';
import LessThanIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from 'react-router';

const CompanyRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: '',
    salutation: '',
    contactName: '',
    uin: '',
    phone: '',
    whatsapp: '',
    email: '',
    pan: '',
    password: '',
    confirmPassword: '',
    taxExemption: 'No',
    anonymous: 'No',
    isWhatsappSame: false,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'isWhatsappSame') {
      setFormData({
        ...formData,
        [name]: checked,
        whatsapp: checked ? formData.phone : '',
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

    // Check for tax exemption requirements
    if (formData.taxExemption === 'Yes') {
      if (!formData.uin) {
        formErrors.uin = 'UIN is required for tax exemption.';
      }
      if (!formData.pan) {
        formErrors.pan = 'PAN number is required for tax exemption.';
      }
    }

    // Check password match
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
      navigate('/');
    } else {
      console.log('Form validation failed!');
    }
  };

  useEffect(() => {
    const validateForm = () => {
      const { companyName, contactName, uin, phone, whatsapp, email, password, confirmPassword } = formData;
      if (
        companyName &&
        contactName &&
        uin &&
        phone &&
        whatsapp &&
        email &&
        password &&
        confirmPassword &&
        password === confirmPassword
      ) {
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
          <LessThanIcon className="text-2xl text-gray-800 cursor-pointer mt-2" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Now Register as a Company :</h2>
        </div>
        <p className="mb-2 text-xl text-gray-600 ml-6">Please fill the form</p>
      </div>
      <div className="flex justify-center items-center h-full mt-2 ml-3">
        <div className="w-full px-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <p className="mb-2 font-semibold text-gray-800">Name of the Company *</p>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter Company Name"
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="mb-6">
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
                name="contactName"
                placeholder="Name of the Contact Person *"
                value={formData.contactName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="uin"
                placeholder="Company UIN *"
                value={formData.uin}
                onChange={handleChange}
                className={`p-2 border border-gray-300 rounded ${errors.uin ? 'border-red-500' : ''}`}
              />
              {errors.uin && <p className="text-red-500 text-sm mt-1">{errors.uin}</p>}
              <input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
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
                name="whatsapp"
                placeholder="WhatsApp Number *"
                value={formData.whatsapp}
                onChange={handleChange}
                disabled={formData.isWhatsappSame}
                className={`p-2 border border-gray-300 rounded ${formData.isWhatsappSame ? 'bg-gray-200' : ''}`}
              />
              <input
                type="email"
                name="email"
                placeholder="Contact Person E-Mail *"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="pan"
                placeholder="Company PAN (Optional)"
                value={formData.pan}
                onChange={handleChange}
                className={`p-2 border border-gray-300 rounded ${errors.pan ? 'border-red-500' : ''}`}
              />
              {errors.pan && <p className="text-red-500 text-sm mt-1">{errors.pan}</p>}
              <input
                type="password"
                name="password"
                placeholder="Contact Person Password *"
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
                className={`p-2 border border-gray-300 rounded ${errors.confirmPassword ? 'border-red-500' : ''}`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
            <div className="mb-6">
              <p className="font-semibold text-gray-800">Are you looking for TAX exemption receipt? (Under Section 80G)</p>
              <div className="flex space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="taxExemption"
                    value="Yes"
                    checked={formData.taxExemption === 'Yes'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="taxExemption"
                    value="No"
                    checked={formData.taxExemption === 'No'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>No</span>
                </label>
              </div>
              {formData.taxExemption === 'Yes' && (
                <p className="text-red-600 mt-2 text-sm">
                  Note - If Yes, UIN and PAN Number are mandatory
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
                    value="Yes"
                    checked={formData.anonymous === 'Yes'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="anonymous"
                    value="No"
                    checked={formData.anonymous === 'No'}
                    onChange={handleChange}
                    className="form-radio text-gray-700"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center mb-3">
            <button
              type="submit"
              disabled={!isFormValid}
              className='w-1/5 p-2 text-white rounded bg-blue-900'
            >
              Register
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyRegister;