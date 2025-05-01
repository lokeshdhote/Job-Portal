import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav.jsx'
import HeroSection from './HeroSection'
import Page3 from './Page3'
import Page1 from './Page1'
import Page2 from './Page2'
import Footer from './Footer.jsx'
import TestimonialsSection from './TestimonialsSection'
import CallToAction from './CallToAction'

const LandingPage = () => {
  return (
    <div className='w-full  h-screen ' >

 <Nav/>
    <HeroSection/>
    <Page1/>
    <Page2/>
    <CallToAction/>
    <TestimonialsSection/>
    <Page3/>
    <Footer/>
    </div>
  )
}

export default LandingPage
