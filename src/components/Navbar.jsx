import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className=" flex flex-row p-5 bg-white h-28 w-full justify-between">
      <div className=" flex flex-rows">
        <img src="./img1.jpeg" alt="logo" className=" h-20 w-20 " />
        <img src="./AAhublogo.png" alt="logo" className=" h-20 w-20" />
      </div>
      <div className="flex flex-row align-middle mt-5">
        <div className="">
          <a href="/" className="text-2xl font-semibold text-black pr-9">Home</a>
          </div>
          <div className="">  
          <a href="/about" className="text-2xl font-semibold text-black">About</a>
          </div>
      </div>
      <div className="mt-3">
        <button className=" bg-white border-2 border-[#06038D] text-[#06038D] font-semibold py-1.5 px-3 mr-2">
          Sign In
        </button>
        <button className="bg-[#06038D] font-semibold text-white py-2 px-4">
          Register
        </button>
      </div>
    </div> 
    </>
  )
}

export default Navbar
