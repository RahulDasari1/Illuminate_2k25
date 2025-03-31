import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import EventDesc from './components/EventDesc'
import Sponsors from './components/Sponsors'

const App = () => {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <Hero/>
            <About/>
            <Sponsors/>
            <Events/>
          </>
        }/>
        <Route path='/event/:id' element={<EventDesc/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
