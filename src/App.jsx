import React from 'react'
import Topbar from './components/topbar.jsx';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Services from './components/services.jsx';
import Results from './components/results.jsx';
import Form from './components/Form.jsx';
import Testimonial from './components/testimonials.jsx';
import Footer from './components/Footer.jsx';
import './font.css' 


const App = () => {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Results/>
      <Form/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App