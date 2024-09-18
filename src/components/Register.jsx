// import React from 'react';
// import LessThanIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { useNavigate } from 'react-router';

// const Register = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/');
//   };

//   const cards = [
//     {
//       id: 1,
//       title: 'Individual',
//       description: 'Register to contribute as an Individual',
//       imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUifInkgLw6gxPtqSIKwAk_QOnBH8KvHs2w&s',
//     },
//     {
//       id: 2,
//       title: 'Company',
//       description: 'Register to contribute as an Organization',
//       imageUrl: 'https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-company-line-icon-vector-png-image_6707332.png',
//     },
//   ];

//   return (
//     <>
//       <div className="flex flex-row hover:cursor-pointer ml-14 mt-9" onClick={handleClick}>
//         <LessThanIcon className="text-8xl text-gray-800 cursor-pointer mt-2" />
//         <h2 className="text-3xl font-medium text-[#06038D] mb-2 ml-1">Register</h2>
//       </div>
//       <div className="flex flex-row ml-20 mt-3">
//         <h2 className="text-3xl font-medium text-black mb-2 ml-2">Please select the type:</h2>
//       </div>
//       <div className="flex flex-col items-center justify-center mt-10 mr-3 h-full">
//         <div className="flex gap-24">
//           <div key={cards[0].id} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 text-center w-[400px] h-[400px] border-4 border-blue-900">
//             <img
//               src={cards[0].imageUrl}
//               alt={cards[0].title}
//               className="w-[130px] h-[130px] rounded-full object-cover mb-4"
//             />
//             <div className="text-xl font-bold mb-2 text-gray-800">{cards[0].title}</div>
//             <div className="text-base text-gray-600 mb-4">{cards[0].description}</div>
//             <button className="w-[200px] py-2 bg-blue-900 text-white rounded transition-transform" onClick={() => navigate('/register/individual')}>Register</button>
//           </div>
//           <div key={cards[1].id} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 text-center w-[400px] h-[400px] border-4 border-blue-900">
//             <img
//               src={cards[1].imageUrl}
//               alt={cards[1].title}
//               className="w-[130px] h-[130px] rounded-full object-cover mb-4"
//             />
//             <div className="text-xl font-bold mb-2 text-gray-800">{cards[1].title}</div>
//             <div className="text-base text-gray-600 mb-4">{cards[1].description}</div>
//             <button className="w-[200px] py-2 bg-blue-900 text-white rounded transition-transform" onClick={() => navigate('/register/company')}>Register</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
import React from "react";
import LessThanIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const cards = [
    {
      id: 1,
      title: "Individual",
      description: "Register to contribute as an Individual",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUifInkgLw6gxPtqSIKwAk_QOnBH8KvHs2w&s",
    },
    {
      id: 2,
      title: "Company",
      description: "Register to contribute as an Organization",
      imageUrl:
        "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-company-line-icon-vector-png-image_6707332.png",
    },
  ];

  return (
    <>
      <div
        className="flex flex-row items-center hover:cursor-pointer ml-4 mt-6 sm:ml-14 sm:mt-9"
        onClick={handleClick}
      >
        <LessThanIcon className="text-5xl sm:text-8xl text-gray-800 cursor-pointer mt-1 sm:mt-2" />
        <h2 className="text-2xl sm:text-3xl font-medium text-[#06038D] ml-2 sm:ml-1">
          Register
        </h2>
      </div>
      <div className="ml-4 mt-3 sm:ml-20">
        <h2 className="text-2xl sm:text-3xl font-medium text-black mb-2">
          Please select the type:
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 h-full space-y-8 sm:space-y-0 sm:space-x-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 text-center w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] border-4 border-blue-900"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full object-cover mb-4"
            />
            <div className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
              {card.title}
            </div>
            <div className="text-sm sm:text-base text-gray-600 mb-4">
              {card.description}
            </div>
            <button
              className="w-[180px] sm:w-[200px] py-2 bg-blue-900 text-white rounded transition-transform hover:scale-105"
              onClick={() =>
                navigate(
                  card.id === 1 ? "/register/individual" : "/register/company"
                )
              }
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Register;
