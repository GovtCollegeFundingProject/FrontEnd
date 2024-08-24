import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ContributorsSection from '../components/ContributorsSection'
import WhatWeDo from '../components/WhatWeDo'
import AboutUs from '../components/AboutUs'
// import Signin from '../components/Signin';
// import Register from '../components/Register';

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <ContributorsSection/>
      <WhatWeDo/>
      <AboutUs/>
    </div>
  )
}

export default Home
