import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectMail, selectToken } from "../redux/authSlice";
import DropdownMenu from "./DropdownMenu";
import image4 from "../assets/img1.jpeg";
import imga3 from "../assets/AAhublogo.png";

// const Navbar = () => {
//   const token = useSelector(selectToken);
//   const navigate = useNavigate();

//   const handleClick1 = () => {
//     navigate("/signin");
//   };

//   const handleClick2 = () => {
//     navigate("/register");
//   };

//   return (
//     <>
//       <div className="flex flex-row p-5 bg-white h-28 w-full justify-between">
//         <div className="flex flex-row ml-14">
//           <img src={image4} alt="logo" className="h-20 w-20 mr-5" />
//           <img src={imga3} alt="logo" className="h-20 w-20" />
//         </div>
//         <div className="flex flex-row align-middle mt-6 ml-5">
//           <div className="">
//             <a href="#home" className="text-2xl font-bold text-black pr-9">
//               Home
//             </a>
//           </div>
//           <div className="">
//             <a href="#about" className="text-2xl font-bold text-black">
//               About
//             </a>
//           </div>
//         </div>
//         {token ? (
//           <div className="mt-5">
//             <div className="text-black text-xl">
//               <DropdownMenu />
//             </div>
//           </div>
//         ) : (
//           <div className="mt-5 mr-12">
//             <button
//               onClick={handleClick1}
//               className="bg-white border-2 border-[#06038D] text-[#06038D] font-semibold py-1.5 px-4 mr-4"
//             >
//               Sign In
//             </button>
//             <button
//               onClick={handleClick2}
//               className="bg-[#06038D] font-semibold text-white py-2 px-4"
//             >
//               Register
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import DropdownMenu from "./DropdownMenu"; // Assuming DropdownMenu is in the same directory
// import { selectToken } from "../path/to/your/authSlice"; // Update this import to your store

const Navbar = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick1 = () => {
    navigate("/signin");
  };

  const handleClick2 = () => {
    navigate("/register");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white w-full fixed top-0 z-10">
      <div className="flex items-center justify-between p-5 h-20">
        {/* Logos */}
        <div className="flex items-center">
          <img src={image4} alt="logo" className="h-14 w-14 mr-2" />
          <img src={imga3} alt="logo" className="h-14 w-14" />
        </div>
        {/* Nav Links (shown only on large screens) */}
        <div className="hidden lg:flex space-x-8">
          <a href="#home" className="text-lg font-bold text-black">
            Home
          </a>
          <a href="#about" className="text-lg font-bold text-black">
            About
          </a>
        </div>
<<<<<<< HEAD
        {token ? (
          <div className="mt-5 mr-9">
            <div className="text-black text-xl">
              <DropdownMenu />
=======
        {/* Dropdown / Sign In & Register (shown on all screens) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
        </div>
        <div className="hidden lg:block">
          {token ? (
            <DropdownMenu />
          ) : (
            <div>
              <button
                onClick={handleClick1}
                className="bg-white border-2 border-[#06038D] text-[#06038D] font-semibold py-1 px-4 mr-4"
              >
                Sign In
              </button>
              <button
                onClick={handleClick2}
                className="bg-[#06038D] font-semibold text-white py-1 px-4"
              >
                Register
              </button>
>>>>>>> 083dcbed86dd34f2433958b4975a7e82ad8186bb
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white w-full p-5 space-y-4">
          <a href="#home" className="text-lg font-bold text-black block">
            Home
          </a>
          <a href="#about" className="text-lg font-bold text-black block">
            About
          </a>
          {token ? (
            <DropdownMenu />
          ) : (
            <div>
              <button
                onClick={handleClick1}
                className="bg-white border-2 border-[#06038D] text-[#06038D] font-semibold py-1 px-4 mb-2 w-full"
              >
                Sign In
              </button>
              <button
                onClick={handleClick2}
                className="bg-[#06038D] font-semibold text-white py-2 px-4 w-full"
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
