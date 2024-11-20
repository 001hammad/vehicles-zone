import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Featurescars from './components/featurescars'
import About from './components/about'
import OurTeam from './components/ourTeam'
import Contact from './components/contact'
import Footer from './components/footer'
// import Reviews from './components/reviews'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Featurescars/>
      <About/>
      <OurTeam/>
      {/* <Reviews/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
