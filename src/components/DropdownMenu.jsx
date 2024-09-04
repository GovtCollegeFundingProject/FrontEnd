import React, { useState, useRef, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useDispatch, useSelector } from "react-redux";
import { clearToken, selectMail, selectToken } from "../redux/authSlice";

const DropdownMenu = () => {
  const dispatch = useDispatch(); 
  const name = useSelector(selectMail);
  const token = useSelector(selectToken);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClear = () => {
    dispatch(clearToken());
    console.log("Token cleared: ", token);
    setIsOpen(false);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left mr-6">
      <button
        className="flex items-center space-x-5 text-gray-700 hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AccountCircleIcon fontSize="large" />
        <span>{name}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="flex flex-col p-2">
            <button className="flex items-center p-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md">
              <AccountCircleIcon />
              <span className="ml-2">Profile</span>
            </button>
            <button className="flex items-center p-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md">
              <LocalOfferIcon />
              <span className="ml-2">Contributions</span>
            </button>
            <button className="flex items-center p-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md">
              <GroupIcon />
              <span className="ml-2">Beneficiaries</span>
            </button>
            <button className="flex items-center p-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md" onClick={handleClear}>
              <ExitToAppIcon />
              <span className="ml-2">Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

