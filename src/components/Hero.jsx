import { NearMe } from '@mui/icons-material'
import React from 'react'

const Hero = () => {
  return (
    <div class="bg-[url('./image4.png')] bg-contain h-96 w-full">
      <div className=" flex flex-col items-center justify-center gap-3 pt-3">
        <div className="">
          <h1 className="text-3xl font-bold text-[#06038D] text-center pt-20 pl-5">Contribute to the collective endeavor to enable</h1>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold text-[#06038D] text-center">junior colleges with lab infrastructure</h1>
        </div>
        <div className="flex justify-center">
          <button className="border-[#06038D] border-4 rounded-md text-[#06038D] font-semibold py-2 px-4 mt-5">Contribute  <NearMe className=' text-[#06038D] text-sm ml-3'/></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
