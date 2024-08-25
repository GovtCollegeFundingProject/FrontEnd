import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {

  const navigate = useNavigate()
  const handleClick1 = () => {
   navigate('/signin')
  }

  const handleClick2 = () => {  
  navigate('/register')
  }

  return (
    <>
     <div className=" flex flex-row p-5 bg-white h-28 w-full justify-between">
      <div className=" flex flex-row ml-14">
        <img src="./img1.jpeg" alt="logo" className=" h-20 w-20 mr-5" />
        <img src="./AAhublogo.png" alt="logo" className=" h-20 w-20" />
      </div>
      <div className="flex flex-row align-middle mt-6">
        <div className="">
          <a href="/" className="text-2xl font-bold text-black pr-9">Home</a>
          </div>
          <div className="">  
          <a href="/about" className="text-2xl font-bold text-black">About</a>
          </div>
      </div>
      <div className="mt-5 mr-12">
        <button onClick={handleClick1} className=" bg-white border-2 border-[#06038D] text-[#06038D] font-semibold py-1.5 px-4 mr-4">
          Sign In
        </button>
        <button  onClick={handleClick2} className="bg-[#06038D] font-semibold text-white py-2 px-4">
          Register
        </button>
      </div>
    </div> 
    </>
  )
}

export default Navbar
