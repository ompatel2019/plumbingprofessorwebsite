import React from 'react'
import Topbar from './components/Topbar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import './font.css' 


const App = () => {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Services/>
      
    </>
  )
}

export default App