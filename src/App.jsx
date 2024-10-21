import React from 'react'
import Topbar from './components/Topbar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import './font.css' 


const App = () => {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App