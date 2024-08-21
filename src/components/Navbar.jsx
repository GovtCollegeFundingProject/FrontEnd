import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className=" bg-white h-24 w-full m-6">
      <div className=" m-3">
        <img src="/AA_hub_Logo.png" alt="logo" className="h-16 w-16" />
      </div>
      <div className=" flex justify-center">
        <div className="pt-2">
          <a href="/" className="text-2xl font-semibold text-black pr-9">Home</a>
          <a href="/about" className="text-2xl font-semibold text-black">About</a>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Navbar
