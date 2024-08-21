import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className=" flex flex-row bg-white h-24 w-full justify-between">
      <div className=" m-3">
        <img src="./AAhublogo.png" alt="logo" className=" h-28 w-28" />
      </div>
      <div className="flex flex-row">
        <div className="">
          <a href="/" className="text-2xl font-semibold text-black pr-9">Home</a>
          </div>
          <div className="">  
          <a href="/about" className="text-2xl font-semibold text-black">About</a>
          </div>
      </div>
      <div className=""></div>
    </div> 
    </>
  )
}

export default Navbar
