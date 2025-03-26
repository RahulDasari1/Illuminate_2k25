import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import { Route, Routes } from 'react-router-dom'
import Event from './components/Event'
import Footer from './components/Footer'

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
            <Events/>
          </>
        }/>
        <Route path='/event/:id' element={<Event/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
